import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import LoginForm from "./LoginForm";

export default function LoginModal({ smShow, setSmShow }) {
    return (
        <Container>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm />
                </Modal.Body>
            </Modal>
        </Container>
    );
}

const Container = styled.div`
    @media (min-width: 576px) {
        .modal-sm {
            max-width: 400px;
        }
    }
`;
