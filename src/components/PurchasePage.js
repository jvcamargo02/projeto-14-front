import styled from "styled-components";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Card } from "react-bootstrap";

import ShoppingCartListContext from "../contexts/ShoppingCartContext";
import AddressForms from "../elements/AddressForms";
import logoImg from "../assets/logo.png";

export default function PurchasePage() {
    const navigate = useNavigate();
    const { shoppingCartList } = useContext(ShoppingCartListContext);

    useEffect(() => {
        if (shoppingCartList.length === 0) {
            alert("You have not selected any product. Redirecting...");
            navigate("/user", { replace: true });
        }
    });

    return (
        <>
            <Header>
                <div>
                    <img src={logoImg} alt="Midnight Owl Cafe logo" onClick={() => navigate("/")} />
                    <p onClick={() => navigate(-1)}>Return</p>
                </div>
            </Header>
            <Purchase className="px-5">
                <h2>Confirm your order</h2>
                <Row lg={1} className="row-col-1 py-3">
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
                {<AddressForms />}
            </Purchase>
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
        object-fit: contain;

        img {
            height: 100%;
        }
    }

    button {
        margin: 20px auto;
        width: 100%;
        max-width: 200px;
    }
`;
