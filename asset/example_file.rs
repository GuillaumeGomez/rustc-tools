pub fn foo() {}
fn bar() {}

pub fn generics<A: Sized>(_: A) {
    println!("hello");
}

fn main() {
    foo();
    bar();
    generics(0i8);
}
