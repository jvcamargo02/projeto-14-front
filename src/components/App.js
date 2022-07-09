import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../globalStyles/reset";
import  'bootstrap/dist/css/bootstrap.min.css'
import HomePage from "./HomePage";
import { UserContextProvider } from "../context.js/UserContext";

export default function App() {



    return (
        <UserContextProvider>
            <GlobalStyle />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContextProvider>
    );
}
