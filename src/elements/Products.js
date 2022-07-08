import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { Button, Container, Card, Col, Row } from "react-bootstrap";
import { ImCheckmark2 } from "react-icons/im";

import UserContext from "../contexts/UserContext";

export default function ProductsList() {
    const { token } = useContext(UserContext);

    const [productsList, setProductsList] = useState([]);

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
        <div className="album py-5 bg-light">
            <Container>
                <Row sm={2} lg={4} className={"row-cols-1 g-3"}>
                    {productsList.map((product) => {
                        return <Product key={product._id} product={product} />;
                    })}
                </Row>
            </Container>
        </div>
    );
}

function Product(props) {
    const { product } = props;
    const { token } = useContext(UserContext);

    const [active, setActive] = useState(false);

    function selectProduct() {
        const API_BASE_URL =
            process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

        if (active) {
            axios.delete(`${API_BASE_URL}/shopping-cart/${product._id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
        } else {
            axios.post(
                `${API_BASE_URL}/shopping-cart`,
                { productId: product._id },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
        }

        setActive(!active);
    }

    return (
        <Col>
            <ProductContent>
                <Card.Img variant="top" src={product.imgURL} />
                <Card.Body>
                    <div>
                        <Card.Title>Card Title</Card.Title>
                        <Button
                            variant="outline-success"
                            active={active}
                            onClick={selectProduct}
                        >
                            {active ? <ImCheckmark2 /> : "Add"}
                        </Button>
                    </div>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Categorias</small>
                </Card.Footer>
            </ProductContent>
        </Col>
    );
}

const ProductContent = styled(Card)`
    img {
        height: 160px;
        width: 100%;
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
