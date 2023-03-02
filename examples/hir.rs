#![feature(rustc_private)] // This feature must be added so we can use compiler APIs.

use rustc_tools::rustc_hir::def_id::LOCAL_CRATE;
use rustc_tools::rustc_hir::intravisit::{walk_item, Visitor};
use rustc_tools::rustc_hir::Item;
use rustc_tools::rustc_middle::ty::TyCtxt;
use rustc_tools::rustc_span::{FileName, Span};
use rustc_tools::with_tyctxt;

struct ItemsLocator<'tcx> {
    tcx: TyCtxt<'tcx>,
}

fn get_filename_and_line(tcx: TyCtxt<'_>, span: Span) -> Option<(String, usize)> {
    let source_map = tcx.sess.source_map();

    // `Span` is just an index with a `lo` and a `hi` position into the `SourceMap` which
    // contains all source code concatenated into one big data. So here, we use `lo` to get
    // the beginning of the `Span` position.
    let loc = source_map.lookup_char_pos(span.lo());
    let filename = if let FileName::Real(file) = &loc.file.name {
        match file.local_path() {
            Some(p) => p.display().to_string(),
            None => return None,
        }
    } else {
        return None;
    };
    Some((filename, loc.line))
}

// We only implement the methods we want to overload, so just `visit_item`.
impl<'tcx> Visitor<'tcx> for ItemsLocator<'tcx> {
    fn visit_item(&mut self, i: &'tcx Item) {
        let def_id = i.owner_id.def_id;
        let file_info = match get_filename_and_line(self.tcx, i.span) {
            Some((filename, line_nb)) => format!("{}:{}", filename, line_nb),
            None => "??".to_owned(),
        };
        println!(
            "=> [{:?}] {} {}@{}",
            self.tcx.visibility(def_id),
            i.kind.descr(),
            i.ident.name.as_str(),
            file_info
        );
        // If we don't call this function, it'll never go through the children of the item!
        walk_item(self, i);
    }
}

fn main() {
    let args: Vec<String> = std::env::args().skip(1).collect();
    if args.is_empty() {
        eprintln!("Missing file operand");
        return;
    }
    println!("Running HIR example with arguments `{:?}`", args);
    with_tyctxt(&args, |tcx| {
        println!("Here are the available crates:");
        for krate in tcx.crates(()).iter() {
            println!("  * {}", tcx.crate_name(*krate));
        }
        println!(
            "Listing all items of current crate ({}) with their location",
            tcx.crate_name(LOCAL_CRATE)
        );
        // We start the visitor run by calling `visit_all_item_likes_in_crate`.
        tcx.hir()
            .visit_all_item_likes_in_crate(&mut ItemsLocator { tcx });
    })
    .unwrap();
}
