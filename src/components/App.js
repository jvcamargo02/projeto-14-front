import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../globalStyles/reset";
import  'bootstrap/dist/css/bootstrap.min.css'

import HomePage from "./HomePage";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
