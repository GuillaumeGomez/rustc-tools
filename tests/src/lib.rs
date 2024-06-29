use paste;

macro_rules! static_int_type {
    (
        $(#[$outer:meta])*
        Signed {
            num_bits: $num_bits:literal,
        }
    ) => {
        paste::paste! {
            pub struct [<FheInt $num_bits Id>];
        }
    };
}

static_int_type! {
    Signed {
        num_bits: 2,
    }
}

static_int_type! {
    Signed {
        num_bits: 4,
    }
}

pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
