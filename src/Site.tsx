import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const Site = () =>
{
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<p>Hello Test!</p>} />
            </Routes>
        </HashRouter>
    );
}

export default Site;