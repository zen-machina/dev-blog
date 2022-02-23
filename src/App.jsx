import Navigation from "./components/Navigation";
import Home from "./Home";
import Blog from "./Blog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact"></Route>
                    <Route path="/login"></Route>
                </Routes>
            </>
        </Router>
    );
}

export default App;
