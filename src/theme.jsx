import { extendTheme } from "@chakra-ui/react";

const Button = {
    variants: {
        solid: {
            color: "textColor.10",
            background: "bgColor.10",
            border: "none",
        },
    },
    defaultProps: {
        variant: "solid",
    },
};

const arojoTheme = extendTheme({
    colors: {
        textColor: {
            10: "#BEC2CA",
            20: "#84888E",
        },
        bgColor: {
            10: "#33323B",
            20: "#1D1D22",
        },
        hiColor: {
            10: "#6061E3",
            20: "#4445A2",
            30: "#3B3C91",
        },
    },
    components: {
        Button,
    },
});

export default arojoTheme;
