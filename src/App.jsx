/** @jsxImportSource theme-ui */

import { ThemeProvider } from "theme-ui";
import { theme } from "./theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <header className="App-header">
                    <h3 sx={{ color: "primary" }}>HELLO WORLD</h3>
                </header>
            </div>
        </ThemeProvider>
    );
}

export default App;
