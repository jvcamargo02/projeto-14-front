import { useContext } from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import UserContext from "../../../contexts/UserContext";

export default function FormUserData() {
    const { progress, setProgress, userData, setUserData } = useContext(UserContext);
    const userAddress = userData.userAddress;

    const onSubmit = (e) => {
        e.preventDefault();
        setProgress(progress + 1);
    };

    return (
        <Form onSubmit={(e) => onSubmit(e)}>
            <label>Address</label>
            <input
                required
                type="text"
                id="adress"
                placeholder="Address"
                value={userData.userAddress.address}
                onChange={(e) =>
                    setUserData({
                        ...userData,
                        userAddress: { ...userAddress, address: e.target.value }
                    })
                }
            />
            <label>City</label>
            <input
                required
                type="text"
                id="city"
                placeholder="City"
                value={userData.userAddress.city}
                onChange={(e) =>
                    setUserData({
                        ...userData,
                        userAddress: { ...userAddress, city: e.target.value }
                    })
                }
            />
            <label>State</label>
            <input
                required
                type="text"
                id="state"
                placeholder="State"
                value={userData.userAddress.state}
                onChange={(e) =>
                    setUserData({
                        ...userData,
                        userAddress: { ...userAddress, state: e.target.value }
                    })
                }
            />
            <label>Zip-Code</label>
            <input
                required
                type="text"
                id="zip"
                placeholder="Zipcode"
                value={userData.userAddress.zip}
                onChange={(e) =>
                    setUserData({
                        ...userData,
                        userAddress: { ...userAddress, zip: e.target.value }
                    })
                }
            />
            <Buttons>
                <Button variant="light" onClick={() => setProgress(progress - 1)}>
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
