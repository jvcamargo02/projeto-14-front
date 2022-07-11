import styled from "styled-components";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

import ProductsList from "../elements/Products";
import ShoppingCart from "../elements/ShoppingCart";
import Configs from "../elements/Configs";
import logoImg from "../assets/logo.png";

export default function UserPage() {
    const navigate = useNavigate();

    const [isCartVisible, setIsCartVisible] = useState(false);
    const [isConfigsVisible, setIsConfigsVisible] = useState(false);

    return (
        <>
            <Header>
                <div>
                    <img src={logoImg} alt="Midnight Owl Cafe logo" onClick={() => navigate("/")} />
                    <TiShoppingCart onClick={() => setIsCartVisible(true)} />
                    <BiUserCircle onClick={() => setIsConfigsVisible(true)} />
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
