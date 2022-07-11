import styled from "styled-components";
import { Accordion, Col, Row, Modal } from "react-bootstrap";
import { BiUser, BiUserCircle } from "react-icons/bi";

export default function Configs(props) {
    const { setIsConfigsVisible } = props;

    return (
        <Configurations
            size="xl"
            show
            fullscreen={"lg-down"}
            onHide={() => setIsConfigsVisible(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>Configurations</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Col className="d-flex px-3">
                    <BiUserCircle />
                    <p className="d-flex align-items-center">Your Name</p>
                </Col>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <BiUser />
                            <p>Your Profile</p>
                        </Accordion.Header>
                        <Accordion.Body>nome / email / senha</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <BiUser />
                            <p>Your Adress</p>
                        </Accordion.Header>
                        <Accordion.Body>mudar endereço</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <BiUser />
                            <p>Your Plans</p>
                        </Accordion.Header>
                        <Accordion.Body>mudar plano / quanto falta do plano</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Modal.Body>
        </Configurations>
    );
}

const Configurations = styled(Modal)`
    svg {
        font-size: 40px;
        cursor: pointer;
    }

    .accordion svg {
        font-size: 30px;
    }

    .accordion-header p,
    .modal-title {
        font-weight: 700;
    }
`;
