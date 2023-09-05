#![feature(rustc_private)] // This feature must be added so we can use compiler APIs.

// We need to import them like this otherwise it doesn't work.
extern crate rustc_ast;
extern crate rustc_span;

use rustc_ast::ast::{Item, VisibilityKind};
use rustc_ast::visit::{walk_crate, walk_item, Visitor};
use rustc_span::edition::Edition;
use rustc_tools::with_ast_parser;

use std::path::Path;

struct PublicItemVisitor;

// We only implement the methods we want to overload, so just `visit_item`.
impl<'ast> Visitor<'ast> for PublicItemVisitor {
    fn visit_item(&mut self, i: &'ast Item) {
        if matches!(i.vis.kind, VisibilityKind::Public) {
            println!("=> [public] {} {}", i.kind.descr(), i.ident.name.as_str());
        }
        // If we don't call this function, it'll never go through the children of the item!
        walk_item(self, i);
    }
}

fn main() {
    let p = match std::env::args().nth(1) {
        Some(p) => p,
        None => {
            eprintln!("Missing file operand");
            return;
        }
    };
    let p = Path::new(&p);
    println!("Running AST example on `{}`", p.display());
    with_ast_parser(p, Edition::Edition2018, |sess, krate| {
        println!(
            "Listing all public items of crate (edition: {:?})",
            sess.edition
        );
        // We start the visitor run by calling `walk_crate`.
        walk_crate(&mut PublicItemVisitor, krate);
    })
    .unwrap();
}
