import styled from "styled-components";
import { useState, useContext }from "react";
import axios from "axios"
import { BiUserCircle } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

import ProductsList from "../elements/Products";
import ShoppingCart from "../elements/ShoppingCart";
import Configs from "../elements/Configs";
import logoImg from "../assets/logo.png";
import UserContext from "../contexts/UserContext";

export default function UserPage() {
    const navigate = useNavigate();

    const [isCartVisible, setIsCartVisible] = useState(false);
    const [isConfigsVisible, setIsConfigsVisible] = useState(false);    
    const { token, userData, setUserData } = useContext(UserContext)

    function setConfig () {
        const API_BASE_URL =
            process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
        const promise = axios.get(`http://localhost:5000/user-config`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        console.log("enviei a promisse")
        promise.then((res) => {
            console.log(res.data)
            const {name, email, capsules, selectPlanId, userAddress, userPaymentData} = res.data;
            const {cardName, expiry, number} = userPaymentData
            setUserData({...userData, name, email, capsules, selectPlanId, userAddress, userPaymentData: {...userData.userPaymentData, cardName, expiry, number}});
            setIsConfigsVisible(true)
        });
    }

    return (
        <>
            <Header>
                <div>
                    <img src={logoImg} alt="Midnight Owl Cafe logo" onClick={() => navigate("/")} />
                    <TiShoppingCart onClick={() => setIsCartVisible(true)} />
                    <BiUserCircle onClick={() => setConfig()} />
                </div>
            </Header>
            {isCartVisible && <ShoppingCart setIsCartVisible={setIsCartVisible} />}
            {isConfigsVisible && <Configs setIsConfigsVisible={setIsConfigsVisible} />}
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
