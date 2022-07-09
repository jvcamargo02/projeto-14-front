import styled from "styled-components";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";

import ProductsList from "../elements/Products";
import ShoppingCart from "../elements/ShoppingCart";

export default function UserPage() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>
            <Header>
                <div>
                    <TiShoppingCart onClick={() => setIsModalVisible(true)} />
                    <BiUserCircle />
                </div>
            </Header>
            {isModalVisible && <ShoppingCart setIsModalVisible={setIsModalVisible} />}
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
        gap: 16px;
        padding: 0 40px;
    }

    svg {
        font-size: 40px;
        color: white;
        cursor: pointer;
    }
`;
