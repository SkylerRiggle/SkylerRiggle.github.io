import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

/** Pages */
import Home from "./pages/Home";

const Site = () =>
{
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default Site;