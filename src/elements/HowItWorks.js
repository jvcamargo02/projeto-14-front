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
            <Album className="album py-5 bg-dark">
                <Container className="px-4">
                    <Row className="row-cols-1 g-3">
                        <Col className="col-md px-5">
                            <img src={selectProductImg} alt="selecting coffes in mobile" />
                        </Col>
                        <Col className="col-md px-5">
                            <Card>
                                <Card.Body className="text-white">
                                    <Card.Title>1. Pick a Plan</Card.Title>
                                    <Card.Text>
                                        Whether you are a coffee or a tea person, we have a flexible
                                        plan to match your lifestyle. Need to cancel, change
                                        products, or skip a week? Not a problem.
                                    </Card.Text>
                                    <Button
                                        variant="outline-success"
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
            <Album className="album py-5">
                <Container className="px-4">
                    <Row className="row-cols-1 g-3">
                        <Col className="col-md px-5" lg={{ order: "last" }}>
                            <img src={coffeeDeliveryImg} alt="delivering coffee to client's home" />
                        </Col>
                        <Col className="col-md px-5" lg={{ order: "first" }}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>2. Get your delivery</Card.Title>
                                    <Card.Text>
                                        Each week, you’ll choose from our diverse catalog of coffes
                                        and tea which ones you would like to have delivered to you.
                                    </Card.Text>
                                    <Button
                                        variant="outline-success"
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
            <Album className="album py-5 bg-dark">
                <Container className="px-4">
                    <Row className="row-cols-1 g-3">
                        <Col className="col-md px-5">
                            <img src={drinkCoffeeImg} alt="man drinking coffee and coding" />
                        </Col>
                        <Col className="col-md px-5">
                            <Card>
                                <Card.Body className="text-white">
                                    <Card.Title>3. Pour, drink, enjoy!</Card.Title>
                                    <Card.Text>
                                        Making great coffee is hard, but melting great coffee is
                                        easy. Boiling great tea is equally easy to make. Peel back
                                        the lid and drop it into a mug. Add water, and enjoy!
                                    </Card.Text>
                                    <Button
                                        variant="outline-success"
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
            font-size: 18px;
            font-weight: 500;
            text-align: center;
        }
    }

    .card-title {
        margin: 0;
        font-size: 28px;
        font-weight: 700;
    }

    img {
        height: 260px;
        width: 410px;
    }
`;
