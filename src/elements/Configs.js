import styled from "styled-components";
import { Accordion, Col, Modal } from "react-bootstrap";
import {
    BiUser,
    BiUserCircle,
    BiHome,
    BiCoffeeTogo,
    BiUserX,
    BiCreditCard,
} from "react-icons/bi";
import dayjs from "dayjs";
import { useState, useContext } from "react";

import UserContext from "../contexts/UserContext";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import PlansCards from "./Modals/SignUpModal/PlansCards";
import PaymentModal from "./Modals/SignUpModal/PaymentModal";

export default function Configs(props) {
    const { setIsConfigsVisible, setSmShow } = props;
    const { userData, setUserData, newPassword, setNewPassword } = useContext(UserContext)
    const [disabled, setDisabled] = useState("disabled");
    const [button, setButton] = useState("Edit");
    const [amount, setAmount] = useState("Save");
    const isValid = dayjs().isAfter(userData.validation);

    const userAddress = userData.userAddress;

    const edit = (e) => {
        e.preventDefault();

        if (button === "Edit") {
            setDisabled("");
            setButton("Save");
        }

        if (button === "Save") {
            setDisabled("disabled");
            setSmShow(true)
            setButton("Edit");
        }
    };

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
                    <p className="d-flex align-items-center">{userData.name}</p>
                </Col>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <BiUser />
                            <p>Your Profile</p>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Form onSubmit={(e) => edit(e)}>
                                <label>Name</label>
                                <input
                                    required
                                    disabled={disabled}
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    value={userData.name}
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            name: e.target.value,
                                        })
                                    }
                                />
                                <label>E-mail</label>
                                <input
                                    required
                                    disabled={disabled}
                                    type="email"
                                    id="email"
                                    placeholder="Enter e-mail"
                                    value={userData.email}
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            email: e.target.value,
                                        })
                                    }
                                />
                                <label>Password</label>
                                <input
                                    disabled={disabled}
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    value={newPassword}
                                    onChange={(e) =>
                                        setNewPassword(e.target.value)
                                    }
                                />
                                <Buttons>
                                    <Button
                                        variant="light"
                                        onClick={() =>
                                            setIsConfigsVisible(false)
                                        }
                                    >
                                        Go Back
                                    </Button>
                                    <Button variant="dark" type="submit">
                                        {button}
                                    </Button>
                                </Buttons>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <BiHome />
                            <p>Your Adress</p>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Form onSubmit={(e) => edit(e)}>
                                <label>Address</label>
                                <input
                                    required
                                    disabled={disabled}
                                    type="text"
                                    id="adress"
                                    placeholder="Address"
                                    value={userData.userAddress.address}
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            userAddress: {
                                                ...userAddress,
                                                address: e.target.value,
                                            },
                                        })
                                    }
                                />
                                <label>City</label>
                                <input
                                    required
                                    disabled={disabled}
                                    type="text"
                                    id="city"
                                    placeholder="City"
                                    value={userData.userAddress.city}
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            userAddress: {
                                                ...userAddress,
                                                city: e.target.value,
                                            },
                                        })
                                    }
                                />
                                <label>State</label>
                                <input
                                    required
                                    disabled={disabled}
                                    type="text"
                                    id="state"
                                    placeholder="State"
                                    value={userData.userAddress.state}
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            userAddress: {
                                                ...userAddress,
                                                state: e.target.value,
                                            },
                                        })
                                    }
                                />
                                <label>Zip-Code</label>
                                <input
                                    required
                                    disabled={disabled}
                                    type="text"
                                    id="zip"
                                    placeholder="Zipcode"
                                    value={userData.userAddress.zip}
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            userAddress: {
                                                ...userAddress,
                                                zip: e.target.value,
                                            },
                                        })
                                    }
                                />
                                <Buttons>
                                    <Button
                                        variant="light"
                                        onClick={() =>
                                            setIsConfigsVisible(false)
                                        }
                                    >
                                        Go Back
                                    </Button>
                                    <Button variant="dark" type="submit">
                                        {button}
                                    </Button>
                                </Buttons>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <BiCoffeeTogo />
                            <p>Your Plans</p>
                        </Accordion.Header>
                        <Accordion.Body>
                            {isValid === false ? (
                                <Alert variant="info">
                                    Your plan is valid until{" "}
                                    {userData.validation}. When choosing a new
                                    plan, the remaining time will be added to
                                    the time of the chosen plan.
                                </Alert>
                            ) : (
                                <Alert variant="danger">
                                    Your plan expired in {userData.validation}.
                                </Alert>
                            )}
                            <PlansCards setAmount={setAmount} />
                            <Buttons>
                                <Button
                                    variant="light"
                                    onClick={() => setIsConfigsVisible(false)}
                                >
                                    Go Back
                                </Button>
                                <Button variant="dark" type="submit">
                                    {amount}
                                </Button>
                            </Buttons>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <BiCreditCard />
                            <p>Payment Info</p>
                        </Accordion.Header>
                        <Accordion.Body>
                            <PaymentModal amount={amount} />
                            <Buttons>
                                <Button
                                    variant="light"
                                    onClick={() => setIsConfigsVisible(false)}
                                >
                                    Go Back
                                </Button>
                                <Button variant="dark" type="submit">
                                    Save
                                </Button>
                            </Buttons>
                        </Accordion.Body>
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

const Form = styled.form`
    display: flex;
    flex-direction: column;

    input {
        height: 45px;
        font-size: 18px;
        border-color: rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        box-sizing: border-box;
        padding: 0 10px;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
`;
