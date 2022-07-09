import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

import UserContext from "../contexts/UserContext";

export default function ShoppingCart(props) {
    const { setIsModalVisible } = props;
    const { token } = useContext(UserContext);

    const [shoppingCartList, setShoppingCartList] = useState([]);
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

    return (
        <Modal
            size="lg"
            show
            fullscreen={"lg-down"}
            onHide={() => setIsModalVisible(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Shopping Cart {`(max ${limit})`}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <ProductsList sm={2} lg={3} className={"row-cols-1 g-3"}>
                        {shoppingCartList.map((item) => (
                            <SelectedProduct
                                key={item.product._id}
                                shoppingCartList={shoppingCartList}
                                setShoppingCartList={setShoppingCartList}
                                item={item}
                                token={token}
                            />
                        ))}
                    </ProductsList>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

function SelectedProduct(props) {
    const { shoppingCartList, setShoppingCartList, item, token } = props;
    const { product, counter } = item;

    const [itemCounter, setItemCounter] = useState(counter);

    function addProductCounter() {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
        axios.put(
            `${API_BASE_URL}/shopping-cart/${product._id}/add`,
            {},
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );

        setItemCounter(itemCounter + 1);
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

        if (itemCounter - 1 === 0) {
            const newShoppingCartList = shoppingCartList.filter(
                (filtered) => filtered.product._id !== product._id
            );

            setShoppingCartList(newShoppingCartList);
            return;
        }

        setItemCounter(itemCounter - 1);
    }

    return (
        <Product>
            <Card>
                <Card.Img variant="top" src={product.imgURL} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <AiOutlineMinusCircle onClick={subtractProductCounter} />
                    {itemCounter}
                    <AiOutlinePlusCircle onClick={addProductCounter} />
                </Card.Footer>
            </Card>
        </Product>
    );
}

const ProductsList = styled(Row)`
    @media (max-width: 575px) {
        justify-content: center;
    }
`;

const Product = styled(Col)`
    max-width: 350px;

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
