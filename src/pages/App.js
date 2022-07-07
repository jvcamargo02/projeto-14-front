import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../globalStyles/reset";
import { UserContextProvider } from "../contexts/UserContext";

import HomePage from "./HomePage";
import UserPage from "./UserPage";

export default function App() {
    return (
        <UserContextProvider>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/user" element={<UserPage />} />
                </Routes>
            </BrowserRouter>
        </UserContextProvider>
    );
}
