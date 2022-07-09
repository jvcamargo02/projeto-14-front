import { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function LoginPage() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


    console.log(email,password)

    function onSubmit(e) {
        e.preventDefault();


    }

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Buttons>
                    <Button variant="dark" size="lg" type="submit">
                        Submit
                    </Button>
                </Buttons>
            </Form>
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
        width: 100%
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
