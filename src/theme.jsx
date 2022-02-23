import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

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

const Link = {
    baseStyle: {
        fontWeight: "bold",
        color: "textColor.10",
    },
    sizes: {
        sm: {
            fontSize: "sm",
            px: 4,
            py: 3,
        },
        md: {
            fontSize: "md",
            px: 6,
            py: 4,
        },
    },
    variants: {},
    defaultProps: {
        size: "sm",
    },
};

const arojoTheme = extendTheme({
    config,
    colors: {
        textColor: {
            10: "#d7dade",
            20: "#bcc0c6",
            30: "#8a9099",
        },
        bgColor: {
            10: "#5f656e",
            20: "#3b3f46",
            30: "#1c1e21",
        },
        hiColor: {
            10: "#6061E3",
            20: "#4445A2",
            30: "#3B3C91",
        },
    },
    components: {
        Button,
        Link,
    },
    // fonts: {
    //     body: "system-ui, sans-serif",
    //     heading: "Georgia, serif",
    //     mono: "Menlo, monospace",
    // },
});

export default arojoTheme;
