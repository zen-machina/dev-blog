import { background, extendTheme } from "@chakra-ui/react";

const Button = {
    variants: {
        outline: {
            color: "brandRed",
            background: "#3E87AE",
            borderColor: "#3E87AE",
        },
    },
    defaultProps: {
        variant: "outline",
    },
};

const arojoTheme = extendTheme({
    colors: {
        brandRed: "#843939",
    },
    components: {
        Button,
    },
});

export default arojoTheme;
