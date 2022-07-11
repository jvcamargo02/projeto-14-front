import styled from "styled-components";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import success from "../../assets/success.png";

export default function SuccessModel() {
    const navigate = useNavigate();

    return (
        <Success size="md" show centered>
            <Modal.Body>
                <img src={success} alt="an owl holding a cup" />
                <Modal.Title>Your order is complete!</Modal.Title>
                <p>You will be recieving a confirmation email with your order details</p>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
                <Button onClick={() => navigate("/", { replace: true })}>Back to Home</Button>
                <Button onClick={() => navigate("/user", { replace: true })}>Back to User</Button>
            </Modal.Footer>
        </Success>
    );
}

const Success = styled(Modal)`
    .modal-body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 100%;
        max-width: 200px;
    }

    p {
        text-align: center;
    }
`;
