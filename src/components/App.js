import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../globalStyles/reset";
import { UserContextProvider } from "../contexts/UserContext";
import { ShoppingCartListProvider } from "../contexts/ShoppingCartContext";
import HomePage from "./HomePage";
import HowItWorksPage from "./HowItWorksPage";
import UserPage from "./UserPage";
import PurchasePage from "./PurchasePage";

export default function App() {
    return (
        <UserContextProvider>
            <ShoppingCartListProvider>
                <GlobalStyle />

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/how-it-works" element={<HowItWorksPage />} />
                        <Route path="/user" element={<UserPage />} />
                        <Route path="/purchase" element={<PurchasePage />} />
                    </Routes>
                </BrowserRouter>
            </ShoppingCartListProvider>
        </UserContextProvider>
    );
}
