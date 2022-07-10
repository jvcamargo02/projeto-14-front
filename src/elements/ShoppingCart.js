import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import UserContext from "../contexts/UserContext";
import ShoppingCartContext from "../contexts/ShoppingCartContext";

export default function ShoppingCart(props) {
    const navigate = useNavigate();
    const { setIsCartVisible } = props;
    const { token } = useContext(UserContext);
    const { shoppingCartList, setShoppingCartList } = useContext(ShoppingCartContext);

    console.log(shoppingCartList);

    const [limit, setLimit] = useState(0);

    useEffect(() => {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
        const promise = axios.get(`${API_BASE_URL}/shopping-cart`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        promise.then((res) => {
            setShoppingCartList(res.data.cart);
            setLimit(res.data.limit);
        });
    }, []);

    function confirmPurchase() {
        const initialValue = 0;
        const itemsCounter = shoppingCartList.reduce(
            (total, item) => total + item.counter,
            initialValue
        );

        if (itemsCounter > limit) {
            alert(`Select max ${limit} products`);
            return;
        }

        if (itemsCounter === 0) {
            alert(`Select min 1 product`);
            return;
        }

        navigate("/purchase");
    }

    return (
        <Cart size="xl" show fullscreen={"lg-down"} onHide={() => setIsCartVisible(false)}>
            <Modal.Header closeButton>
                <Modal.Title className="d-flex justify-content-between w-100">
                    <p>Select max {limit} products.</p>
                    <Button variant="success" className="mx-3" onClick={confirmPurchase}>
                        Confirm Purchase
                    </Button>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row sm={2} md={2} lg={3} xl={4} className="row-cols-1">
                        {shoppingCartList.map((item, index) => (
                            <SelectedProduct key={item.product._id} item={item} index={index} />
                        ))}
                    </Row>
                </Container>
            </Modal.Body>
        </Cart>
    );
}

function SelectedProduct(props) {
    const { item, index } = props;
    const { product, counter } = item;
    const { token } = useContext(UserContext);
    const { shoppingCartList, setShoppingCartList } = useContext(ShoppingCartContext);

    function addProductCounter() {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
        axios.put(
            `${API_BASE_URL}/shopping-cart/${product._id}/add`,
            {},
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );

        const newShoppingCartList = [...shoppingCartList];
        newShoppingCartList[index] = { product, counter: counter + 1 };
        setShoppingCartList(newShoppingCartList);
    }

    function subtractProductCounter() {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
        axios.put(
            `${API_BASE_URL}/shopping-cart/${product._id}/subtract`,
            {},
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );

        const newShoppingCartList = [...shoppingCartList];
        newShoppingCartList[index] = { product, counter: counter - 1 };
        setShoppingCartList(newShoppingCartList);

        if (counter - 1 === 0) {
            const newShoppingCartList = shoppingCartList.filter(
                (filtered) => filtered.product._id !== product._id
            );

            setShoppingCartList(newShoppingCartList);
            return;
        }
    }

    return (
        <Product className="col-lg">
            <Card>
                <Card.Img variant="top" src={product.imgURL} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <AiOutlineMinusCircle onClick={subtractProductCounter} />
                    {counter}
                    <AiOutlinePlusCircle onClick={addProductCounter} />
                </Card.Footer>
            </Card>
        </Product>
    );
}

const Cart = styled(Modal)`
    * {
        gap: 0px;
    }
`;

const Product = styled(Col)`
    img {
        height: 150px;
        object-fit: cover;
    }

    svg {
        font-size: 20px;
        cursor: pointer;
    }

    .card-body {
        display: flex;
        justify-content: center;
        padding: 0.25rem;
    }

    .card-title {
        margin: 0;
    }

    .card-footer {
        display: flex;
        justify-content: space-between;
    }
`;
