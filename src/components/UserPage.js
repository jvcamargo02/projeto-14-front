import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";

import UserContext from "../contexts/UserContext";
import Product from "../elements/Product";
import ShoppingCart from "../elements/ShoppingCart";

export default function UserPage() {
    const { token } = useContext(UserContext);

    const [productsList, setProductsList] = useState([1, 1, 1, 1, 1]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        const API_BASE_URL =
            process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
        const promise = axios.get(`${API_BASE_URL}/products`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        promise.then((res) => {
            setProductsList(res.data);
        });
    }, []);

    return (
        <>
            <Header>
                <div>
                    <TiShoppingCart onClick={() => setIsModalVisible(true)} />
                    <BiUserCircle />
                </div>
            </Header>
            {isModalVisible && (
                <ShoppingCart setIsModalVisible={setIsModalVisible} />
            )}
            <div className="album py-5 bg-light">
                <Container>
                    <Row sm={2} lg={4} className={"row-cols-1 g-3"}>
                        {productsList.map((product) => (
                            <Product key={product._id} product={product} />
                        ))}
                    </Row>
                </Container>
            </div>
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
