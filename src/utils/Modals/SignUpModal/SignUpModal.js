import { useContext, useState } from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import PaymentModal from "./PaymentModal";
import SuccessModal from "./SuccessModal";
import PlansCards from "./PlansCards";
import UserContext from "../../../context.js/UserContext";
import FormUserData from "./FormUserData";

export default function SignUpModal({ lgShow, setLgShow }) {
    const { progress } = useContext(UserContext);

    const modals = [
        {
            title: "Choose the Perfect Match",
            type: "CardGroup",
        },
        {
            title: "Sign up",
            type: "Form",
        },
        {
            title: "Payment",
            type: "payment",
        },
        {
            title: "Success",
            type: "success",
        },
    ];

    function renderModal() {
        switch (progress) {
            case 0:
                return <PlansCards />;
            case 1:
                return <FormUserData />;
            case 2:
                return <PaymentModal />;
            case 3:
                return <SuccessModal />;
        }
    }

    return (
        <Container>
            <Modal
                size="lg"
                show={lgShow}
                centered
                contentClassName="modal"
                onHide={() => setLgShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{modals[progress].title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{renderModal()}</Modal.Body>
            </Modal>
        </Container>
    );
}



const Container = styled.div`
    .modal-content {
        background-color: black;

        .teste {
            gap: 30px;
        }
    }
`;

/*     const { userData, setUserData, progress, setProgress } = useContext(UserContext) */
