import { HashRouter, Routes, Route } from "react-router-dom";

/** Pages & Components */
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

const Site = () =>
{
    return (
        <HashRouter>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </HashRouter>
    );
}

export default Site;