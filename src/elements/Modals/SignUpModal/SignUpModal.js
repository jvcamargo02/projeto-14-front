import { useState, useContext } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import PaymentModal from "./PaymentModal";
import SuccessModal from "./SuccessModal";
import PlansCards from "./PlansCards";
import UserContext from "../../../contexts/UserContext";
import FormUserData from "./FormUserData";
import ShippingInfo from "./ShippingInfo"

 
export default function SignUpModal({ lgShow, setLgShow, setSmShow }) {
    const { progress } = useContext(UserContext);
    const [amount, setAmount] = useState("")
    const location = useLocation()

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
            title: "Shipping",
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
                return <PlansCards setAmount={setAmount}/>;
            case 1:
                return <FormUserData />;
            case 2:
                return <ShippingInfo />;
            case 3:
                return <PaymentModal amount={amount} location={location.pathname}/>;
            case 4:
                return <SuccessModal setSmShow={setSmShow} setLgShow={setLgShow}/>;
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
