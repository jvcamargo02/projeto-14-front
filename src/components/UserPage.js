import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { BiUserCircle } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import ProductsList from "../elements/Products";
import ShoppingCart from "../elements/ShoppingCart";
import Configs from "../elements/Configs";
import logoImg from "../assets/logo.png";
import UserContext from "../contexts/UserContext";
import ConfirmPassword from "../elements/ConfirmPassword";

export default function UserPage() {
    const navigate = useNavigate();

    const [isCartVisible, setIsCartVisible] = useState(false);

    const [isConfigsVisible, setIsConfigsVisible] = useState(false);    
    const { token, userData, setUserData } = useContext(UserContext)
    const [smShow, setSmShow] = useState(false);


    function setConfig() {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
        const promise = axios.get(`${API_BASE_URL}/user-config`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        promise.then((res) => {
            console.log(res.data)
            const {name, email, capsules, selectPlanId, userAddress, userPaymentData} = res.data;
            const {cardName, expiry, number} = userPaymentData
            setUserData({...userData, name, email, capsules, selectPlanId, validation: res.data.validation, userAddress, userPaymentData: {...userData.userPaymentData, cardName, expiry, number}});
            setIsConfigsVisible(true)

        });
    }

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("userCredentials");
        navigate("/", { replace: true });
    }

    return (
        <>
            <Header>
                <div>
                    <img src={logoImg} alt="Midnight Owl Cafe logo" onClick={() => navigate("/")} />
                    <TiShoppingCart onClick={() => setIsCartVisible(true)} />
                    <BiUserCircle onClick={() => setConfig()} />
                    <IoMdExit onClick={logout} />
                </div>
            </Header>
            {isCartVisible && <ShoppingCart setIsCartVisible={setIsCartVisible} />}
            {isConfigsVisible && <Configs setIsConfigsVisible={setIsConfigsVisible} setSmShow={setSmShow}/>}
            <ConfirmPassword smShow={smShow} setSmShow={setSmShow}/>
            <ProductsList />
        </>
    );
}

const Header = styled.div`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;

    > div {
        width: 100%;
        max-width: 1362px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 16px;
        padding: 0 40px;
    }

    svg {
        font-size: 40px;
        color: white;
        cursor: pointer;
    }

    img {
        margin-right: auto;
        height: 60px;
        filter: invert(100%);
        cursor: pointer;
    }
`;
