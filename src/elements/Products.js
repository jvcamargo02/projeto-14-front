import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { Button, Container, Card, Col, Row } from "react-bootstrap";
import { BsReceiptCutoff } from "react-icons/bs";
import { ImCheckmark2 } from "react-icons/im";
import { MdOutlineAddShoppingCart, MdDeliveryDining } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import ShoppingCartContext from "../contexts/ShoppingCartContext";

export default function ProductsList() {
    const navigate = useNavigate();
    const { shoppingCartList, setShoppingCartList } = useContext(ShoppingCartContext);

    useEffect(() => {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
        const locallyStoredToken = localStorage.getItem("token");

        if (locallyStoredToken === null) {
            alert("Your session has expired");
            navigate("/", { replace: true });
        }

        const promise = axios.get(`${API_BASE_URL}/shopping-cart`, {
            headers: { Authorization: `Bearer ${locallyStoredToken}` }
        });
        promise.then((res) => {
            setShoppingCartList(res.data.cart);
        });
    }, []);

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
        const locallyStoredToken = localStorage.getItem("token");

        if (locallyStoredToken === null) {
            alert("Your session has expired");
            navigate("/", { replace: true });
        }

        const promise = axios.get(`${API_BASE_URL}/products`, {
            headers: { Authorization: `Bearer ${locallyStoredToken}` }
        });
        promise.then((res) => {
            setProductsList(res.data);
        });
    }, []);

    return (
        <div className="album py-5 bg-light">
            <Instructions className="px-4">
                <h1 class="pb-2 border-bottom">Welcome!</h1>
                <Row className="pt-4 pb-5 row-cols-1 row-cols-lg-3">
                    <Col className="px-4">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white fs-2 mb-3">
                            <MdOutlineAddShoppingCart />
                        </div>
                        <h2>Choose your products</h2>
                        <p>
                            Select which products you want to recieve this week and adjust the
                            quantinty in your shopping cart.
                        </p>
                    </Col>
                    <Col className="px-4">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white fs-2 mb-3">
                            <BsReceiptCutoff />
                        </div>
                        <h2>Confirm your order</h2>
                        <p>Verify your order details and confirm your shipping address.</p>
                    </Col>
                    <Col className="px-4">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white fs-2 mb-3">
                            <MdDeliveryDining />
                        </div>
                        <h2>Wait for delivery</h2>
                        <p>
                            The next step is on us! We will deliver your products directly to you.
                        </p>
                    </Col>
                </Row>
            </Instructions>
            <Container>
                <Row sm={2} lg={4} className={"row-cols-1"}>
                    {productsList.map((product) => {
                        const active = shoppingCartList.some(
                            (item) => item.product._id === product._id
                        );

                        return <Product key={product._id} product={product} active={active} />;
                    })}
                </Row>
            </Container>
        </div>
    );
}

function Product(props) {
    const { product, active } = props;
    const { token } = useContext(UserContext);
    const { shoppingCartList, setShoppingCartList } = useContext(ShoppingCartContext);

    function selectProduct() {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

        if (active) {
            axios.delete(`${API_BASE_URL}/shopping-cart/${product._id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            const newShoppingCartList = shoppingCartList.filter(
                (filtered) => filtered.product._id !== product._id
            );

            setShoppingCartList(newShoppingCartList);

            return;
        } else {
            axios.post(
                `${API_BASE_URL}/shopping-cart`,
                { productId: product._id },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            const newShoppingCartList = [...shoppingCartList, { counter: 1, product }];

            setShoppingCartList(newShoppingCartList);
        }
    }

    return (
        <Col className="my-2">
            <ProductContent>
                <Card.Img variant="top" src={product.imgURL} />
                <Card.Body>
                    <div>
                        <Card.Title>{product.name}</Card.Title>
                        <Button variant="outline-success" active={active} onClick={selectProduct}>
                            {active ? <ImCheckmark2 /> : "Add"}
                        </Button>
                    </div>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{product.type}</small>
                </Card.Footer>
            </ProductContent>
        </Col>
    );
}

const Instructions = styled(Container)`
    .feature-icon {
        width: 4rem;
        height: 4rem;
        border-radius: 0.75rem;
    }

    h1 {
        font-size: 34px;
        font-weight: 700;
    }

    h2 {
        font-size: 24px;
        font-weight: 700;
    }
`;

const ProductContent = styled(Card)`
    height: 100%;

    img {
        height: 160px;
        width: 100%;
        object-fit: contain;
    }

    button {
        padding: 0 1rem;
    }

    svg {
        margin: auto;
        font-size: 20px;
    }

    .card-title {
        margin: 0;
    }
    .card-body {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 1rem 1rem;
    }
    .card-body div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
