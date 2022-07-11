import axios from "axios";
import styled from "styled-components";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";

import UserContext from "../contexts/UserContext";
import SuccessModal from "../elements/Modals/SuccessModal";
import ErrorModal from "../elements/Modals/ErrorModal";

export default function AddressForms() {
    const { token, userData } = useContext(UserContext);

    const [address, setAddress] = useState(userData.userAddress.address);
    const [city, setCity] = useState(userData.userAddress.city);
    const [state, setState] = useState(userData.userAddress.state);
    const [zipCode, setZipCode] = useState(userData.userAddress.zip);
    const [description, setDescription] = useState("");
    const [result, setResult] = useState(null);

    function confirmPurchase(e) {
        e.preventDefault();

        const promise = axios.post(
            "http://localhost:5000/shopping-cart/checkout",
            { address, city, state, zipCode, description },
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );

        promise.then(() => {
            setResult(<SuccessModal />);
        });
        promise.catch((err) => {
            setResult(<ErrorModal errorMessage={err.response.data} />);
        });
    }

    return (
        <>
            <Form onSubmit={(e) => confirmPurchase(e)}>
                <h2>Shipping address</h2>
                <label>Address</label>
                <input
                    required
                    type="text"
                    id="adress"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <label>City</label>
                <input
                    required
                    type="text"
                    id="city"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label>State</label>
                <input
                    required
                    type="text"
                    id="state"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                <label>Zip-Code</label>
                <input
                    required
                    type="text"
                    id="zip"
                    placeholder="Zipcode"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                />
                <label>
                    (Optional) Provide a description of destination to help in the delivery process
                </label>
                <input
                    type="text"
                    id="description"
                    placeholder="Description of destination"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Button variant="success">Send order</Button>
            </Form>
            {result}
        </>
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

    label {
        margin-top: 10px;
        font-size: 20px;
        font-weight: 500;
    }
`;
