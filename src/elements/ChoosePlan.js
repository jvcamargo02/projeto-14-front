import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";

import CardGroup from "react-bootstrap/CardGroup";
import PlansCards from "./PlansCards";

export default function PlansModal({ lgShow, setLgShow }) {
    const [etapa, setEtapa] = useState(0);

    const modals = [
        {
            title: "Choose the Perfect Match",
            type: "CardGroup",
            body: [
                {
                    cardName: "Bimonthly",
                    cardImg:
                        "https://static1.conquistesuavida.com.br/articles//7/73/07/@/23387-qual-e-o-melhor-tipo-de-cafe-para-voce-t-article_block_media-3.jpg",
                    cardContent: "Quem escolher esse vira sócio",
                },
                {
                    cardName: "Monthly",
                    cardImg:
                        "https://static1.conquistesuavida.com.br/articles//7/73/07/@/23387-qual-e-o-melhor-tipo-de-cafe-para-voce-t-article_block_media-3.jpg",
                    cardContent:
                        "Cafézin toda semana na sua porta por um mês todin",
                },
                {
                    cardName: "Weekly",
                    cardImg:
                        "https://static1.conquistesuavida.com.br/articles//7/73/07/@/23387-qual-e-o-melhor-tipo-de-cafe-para-voce-t-article_block_media-3.jpg",
                    cardContent:
                        "Investe mais ai e pega o mensal pow. 1 semaninha de café vai passar sede",
                },
            ],
        },
        {
            title: "Sign up",
            type: "Form",
            body: [
                {
                    cardName: "Bimonthly",
                    cardImg:
                        "https://static1.conquistesuavida.com.br/articles//7/73/07/@/23387-qual-e-o-melhor-tipo-de-cafe-para-voce-t-article_block_media-3.jpg",
                    cardContent: "Quem escolher esse vira sócio",
                },
                {
                    cardName: "Monthly",
                    cardImg:
                        "https://static1.conquistesuavida.com.br/articles//7/73/07/@/23387-qual-e-o-melhor-tipo-de-cafe-para-voce-t-article_block_media-3.jpg",
                    cardContent:
                        "Cafézin toda semana na sua porta por um mês todin",
                },
                {
                    cardName: "Weekly",
                    cardImg:
                        "https://static1.conquistesuavida.com.br/articles//7/73/07/@/23387-qual-e-o-melhor-tipo-de-cafe-para-voce-t-article_block_media-3.jpg",
                    cardContent:
                        "Investe mais ai e pega o mensal pow. 1 semaninha de café vai passar sede",
                },
            ],
        },
    ];

    function testee() {
        if (etapa === 0) {
            return (
                <CardGroup>
                    {modals[etapa].body.map((card, index) => (
                        <PlansCards
                            card={card}
                            setEtapa={setEtapa}
                            etapa={etapa}
                            key={index}
                        />
                    ))}
                </CardGroup>
            );
        }

        if (etapa === 1) {
            return (
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            );
        }
    }

    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                centered
                contentClassName="teste"
                onHide={() => setLgShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{modals[etapa].title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{testee()}</Modal.Body>
            </Modal>
        </>
    );
}
