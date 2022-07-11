import styled from "styled-components";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import selectProductImg from "../assets/select-product.jpg";
import coffeeDeliveryImg from "../assets/coffee-delivery.jpg";
import drinkCoffeeImg from "../assets/drink-coffee.jpg";

export default function HowItWorks() {
    const navigate = useNavigate();

    return (
        <>
        <hr/>
            <Album className="album py-5">
                <Container className="px-4">
                    <Row className="row-cols-1 g-3">
                        <Col className="col-md px-5">
                            <img src={selectProductImg} alt="selecting coffes in mobile" />
                        </Col>
                        <Col className="col-md px-5">
                            <Card>
                                <Card.Body>
                                    <Card.Title>1. Pick a Plan</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                                    </Card.Text>
                                    <Button
                                        variant="light"
                                        active
                                        onClick={() => navigate("/")}
                                    >
                                        Get started
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Album>
            <hr/>
            <Album className="album py-5">
                <Container className="px-4">
                    <Row className="row-cols-1 g-3">
                        <Col className="col-md px-5" lg={{ order: "last" }}>
                            <img src={coffeeDeliveryImg} alt="delivering coffee to client's home" />
                        </Col>
                        <Col className="col-md px-5" lg={{ order: "first" }}>
                            <Card >
                                <Card.Body>
                                    <Card.Title>2. Get your delivery</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                                    </Card.Text>
                                    <Button
                                        variant="light"
                                        active
                                        onClick={() => navigate("/")}
                                    >
                                        Get started
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Album>
            <hr/>
            <Album className="album py-5">
                <Container className="px-4">
                    <Row className="row-cols-1 g-3">
                        <Col className="col-md px-5">
                            <img src={drinkCoffeeImg} alt="man drinking coffee and coding" />
                        </Col>
                        <Col className="col-md px-5">
                            <Card>
                                <Card.Body>
                                    <Card.Title>3. Pour, drink, code</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                                    </Card.Text>
                                    <Button
                                        variant="light"
                                        active
                                        onClick={() => navigate("/")}
                                    >
                                        Get started
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Album>
            <hr/>
        </>
    );
}

const Album = styled.div`
    display: flex;
    justify-content: center;

    .col {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card {
        border: none;
        background-color: transparent;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        p,
        button {
            font-size: 16px;
            text-align: center;
        }
    }

    .card-title {
        margin: 0;
    }

    img {
        height: 260px;
        width: 410px;
    }
`;
