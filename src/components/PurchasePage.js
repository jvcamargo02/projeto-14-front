import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Card } from "react-bootstrap";

import UserContext from "../contexts/UserContext";
import ShoppingCartListContext from "../contexts/ShoppingCartContext";
import SuccessModel from "../elements/SuccessModel";
import ErrorModel from "../elements/ErrorModel";
import logoImg from "../assets/logo.png";

export default function PurchasePage() {
    const navigate = useNavigate();
    const { token } = useContext(UserContext);
    const { shoppingCartList } = useContext(ShoppingCartListContext);

    const [result, setResult] = useState(null);

    useEffect(() => {
        if (shoppingCartList.length === 0) {
            alert("You have not selected any product. Redirecting...");
            navigate("/user");
        }
    });

    function confirmPurchase() {
        const promise = axios.post(
            "http://localhost:5000/shopping-cart/checkout",
            {},
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );

        promise.then(() => {
            setResult(<SuccessModel />);
        });
        promise.catch((err) => {
            setResult(<ErrorModel errorMessage={err.response.data} />);
        });
    }

    return (
        <>
            <Header>
                <div>
                    <img src={logoImg} alt="Midnight Owl Cafe logo" onClick={() => navigate("/")} />
                    <p onClick={() => navigate(-1)}>Return</p>
                </div>
            </Header>
            <Purchase>
                <h2>Confirm your selection</h2>
                <Row lg={1} className="row-col-1 px-5">
                    {shoppingCartList.map((item) => (
                        <Card key={item.product._id} className="my-2">
                            <Card.Img variant="start" src={item.product.imgURL} />
                            <Card.Body className="ms-3 d-flex align-items-center ">
                                <Card.Title>
                                    {item.product.name} x{item.counter}
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
                <Button variant="success" onClick={confirmPurchase}>
                    Send order
                </Button>
            </Purchase>
            {result}
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

    img {
        margin-right: auto;
        height: 60px;
        filter: invert(100%);
        cursor: pointer;
    }

    p {
        font-size: 24px;
        font-weight: 700;
        color: #ffffff;
        cursor: pointer;
    }
`;

const Purchase = styled(Container)`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    border: black 3px solid;
    border-radius: 10px;
    max-width: 800px;

    h2 {
        text-align: center;
        font-size: 32px;
        font-weight: 700;
    }

    img {
        height: 80px;
        width: 100px;
    }

    .card {
        flex-direction: row;
        justify-content: space-between;

        img {
            height: 120px;
            width: 200px;
        }
    }

    button {
        margin: 20px auto;
        width: 100%;
        max-width: 200px;
    }
`;
