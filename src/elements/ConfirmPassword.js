import { useState } from "react"
import axios from "axios";
import styled from "styled-components"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { advice, success } from "../assets/toastifyFunctions";


export default function ConfirmPassword ({smShow, setSmShow}) {
    const {token, userData, newPassword} = useContext(UserContext)
    const [passwordConfirm, setPasswordConfirm] = useState("")

    function updateData(e) {   
        e.preventDefault()     
        
        console.log(            {
            ...userData,
             password: passwordConfirm,
             newPassword
        })
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const API_BASE_URL =

            process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
        const promisse = axios.put(
            `${API_BASE_URL}/user-config`,
            {
                ...userData,
                 password: passwordConfirm,
                 newPassword
            },
            config
        );
        promisse.then((e) => success("Edited"));
        promisse.catch((e) => advice(e.response.data));
    }

    return(
        <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
                Password confirm
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={(e) => updateData(e)}>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                >
                    <Form.Label>Confirm your password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        value={passwordConfirm}
                    />
                </Form.Group>
                <Buttons>
                    <Button variant="dark" size="lg" type="submit">
                        Submit
                    </Button>
                </Buttons>
            </Form>
        </Modal.Body>
    </Modal>
    )
}

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        width: 150px;
    }
`;