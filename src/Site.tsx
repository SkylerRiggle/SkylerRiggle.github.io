import { BrowserRouter, Routes, Route } from "react-router-dom";

const Site = () =>
{
    return (
        <>
            Hello World
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<p>Hello World!</p>} />
                    <Route path="/test" element={<p>Hello Test!</p>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Site;