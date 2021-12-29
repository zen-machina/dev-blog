import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import arojoTheme from "./theme";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={arojoTheme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
