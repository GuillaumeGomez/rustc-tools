use cargo_metadata::{Edition, Message};
use std::process::{Command, Stdio};

/// Returns the rustc version `rustc-tools` is currently using.
pub fn get_supported_rustc_version() -> &'static str {
    const TOOLCHAIN_FILE: &str = include_str!("../rust-toolchain");
    TOOLCHAIN_FILE
        .lines()
        .find(|line| line.starts_with("channel ") || line.starts_with("channel="))
        .and_then(|line| {
            line.rsplit('=')
                .next()
                .unwrap()
                .trim()
                .strip_prefix('"')
                .unwrap()
                .strip_suffix('"')
        })
        .unwrap()
}

/// Allows your rustc plugin to run directly with cargo integration. Quite useful in case you are
/// writing a cargo tool.
///
/// `cargo_args` is the list of extra arguments you want to pass to `cargo` such as `--all-targets`
/// or `-p [PACKAGE]`, etc. DO NOT PASS cargo commands like `check`, `build` or equivalent!
pub fn cargo_integration<T, F: Fn(&[String]) -> T>(
    cargo_args: &[String],
    f: F,
) -> Result<T, String> {
    let supported_rustc_version = get_supported_rustc_version();

    let version = format!("+{supported_rustc_version}");

    let mut args = vec![
        &version,
        "check",
        "--message-format=json-render-diagnostics",
    ];
    for arg in cargo_args {
        args.push(arg.as_str());
    }

    let mut command = Command::new("cargo")
        .args(&args)
        // We silence warnings for the initial compilation.
        .env("RUSTFLAGS", "-Awarnings")
        .stdout(Stdio::piped())
        .spawn()
        .unwrap();

    let reader = std::io::BufReader::new(command.stdout.take().unwrap());

    let mut artifacts = Vec::new();

    for message in cargo_metadata::Message::parse_stream(reader) {
        match message.unwrap() {
            Message::CompilerArtifact(artifact) => artifacts.push(artifact),
            _ => {
                // not handled.
            }
        }
    }

    command.wait().unwrap();

    let artifact = match artifacts.pop() {
        Some(artifact) => artifact,
        None => return Err("Nothing to check?".to_string()),
    };

    let mut rustc_args = vec![
        String::new(), // rustc skip the first argument (which is supposed to be itself).
        artifact.target.src_path.into_string(),
    ];

    for crate_type in &artifact.target.crate_types {
        rustc_args.push("--crate-type".to_string());
        rustc_args.push(crate_type.to_string());
    }
    if artifact.target.edition != Edition::E2015 {
        rustc_args.push(format!("--edition={}", artifact.target.edition.as_str()));
    }
    for feature in artifact.features {
        rustc_args.push("--cfg".to_string());
        rustc_args.push(format!("feature=\"{feature}\""));
    }
    rustc_args.push("-L".to_string());
    match artifact.filenames.first().and_then(|path| path.parent()) {
        Some(path) => {
            rustc_args.push(format!("dependency={}", path.as_str()));
        }
        None => return Err("Cannot figure out `-L` option".to_string()),
    }
    for artifact in artifacts {
        rustc_args.push("--extern".to_string());
        match artifact.filenames.first() {
            Some(path) => rustc_args.push(format!(
                "{}={}",
                artifact.target.name.replace('-', "_"),
                path.as_str()
            )),
            None => {
                return Err(format!(
                    "Cannot get path for `{}` dependency",
                    artifact.target.name
                ))
            }
        }
    }

    Ok(f(&rustc_args))
}
