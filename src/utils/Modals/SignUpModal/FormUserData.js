import { useContext } from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import UserContext from "../../../context.js/UserContext";

export default function FormUserData() {
    const { setProgress, userData, setUserData } = useContext(UserContext);

    return (
        <Form onSubmit={() => setProgress(2)}>
            <label>Name</label>
            <input
                required
                type="text"
                id="name"
                placeholder="Name"
                value={userData.name}
                onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                }
            />
            <label>E-mail</label>
            <input
                required
                type="email"
                id="email"
                placeholder="Enter e-mail"
                value={userData.email}
                onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                }
            />
            <label>Password</label>
            <input
                required
                type="password"
                id="password"
                placeholder="Password"
                value={userData.password}
                onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                }
            />
            <Buttons>
                <Button variant="light" onClick={() => setProgress(0)}>
                    Go Back
                </Button>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Buttons>
        </Form>
    );
}

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
