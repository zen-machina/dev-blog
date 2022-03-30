import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/contact"></Route>
                    <Route path="/login"></Route>
                    <Route path="/createpost"></Route>
                </Routes>
            </>
        </Router>
    );
}

export default App;
