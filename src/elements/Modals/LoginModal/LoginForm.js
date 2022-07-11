import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer } from "react-toastify";
import { advice } from "../../../assets/toastifyFunctions";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../../contexts/UserContext";

export default function LoginPage() {
    const navigate = useNavigate();
    const { setToken } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkBox, setCheckBox] = useState("");

    function success(response) {
        if (checkBox === "on") {
            const credentials = JSON.stringify({ email, password });
            localStorage.setItem("userCredentials", credentials);
        }

        setToken(response);
        navigate("/user");
    }

    function onSubmit(e) {
        e.preventDefault();

        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

        const promisse = axios.post(`${API_BASE_URL}/login`, {
            email,
            password
        });

        promisse.then((response) => success(response.data));
        promisse.catch((e) => advice(e.response.data));
    }

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="Check me out"
                        onChange={(e) => setCheckBox(e.target.value)}
                    />
                </Form.Group>
                <Buttons>
                    <Button variant="dark" size="lg" type="submit">
                        Submit
                    </Button>
                </Buttons>
            </Form>
            <ToastContainer />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #000;

    img {
        max-width: 360px;
        filter: invert(100%);
    }

    form {
        width: 100%;
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        width: 150px;
    }
`;
