import React from "react";
import axios from "axios";
import Card from "react-credit-cards";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { advice } from "../../../assets/toastifyFunctions";
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
} from "./utils.js/PaymentUtils";
import "react-credit-cards/es/styles-compiled.css";
import UserContext from "../../../contexts/UserContext";

export default class App extends React.Component {
    static contextType = UserContext;

    render() {
        const { progress, setProgress, setUserData, userData } = this.context;

        let state = {
            number: userData.userPaymentData.number,
            name: userData.userPaymentData.cardName,
            expiry: userData.userPaymentData.expiry,
            cvc: userData.userPaymentData.cvc,
            issuer: "",
            focused: "",
            formData: null,
        };

        function handleCallback({ issuer }, isValid) {
            if (isValid) {
                state = { ...state, issuer };
            }
        }

        function handleInputFocus({ target }) {
            state = { ...state, focused: target.name };
        }

        function handleInputChange({ target }) {
            if (target.name === "number") {
                target.value = formatCreditCardNumber(target.value);
                setUserData({
                    ...userData,
                    userPaymentData: {
                        ...userData.userPaymentData,
                        number: target.value,
                    },
                });
            } else if (target.name === "expiry") {
                target.value = formatExpirationDate(target.value);
                setUserData({
                    ...userData,
                    userPaymentData: {
                        ...userData.userPaymentData,
                        expiry: target.value,
                    },
                });
            } else if (target.name === "cvc") {
                target.value = formatCVC(target.value);
                setUserData({
                    ...userData,
                    userPaymentData: {
                        ...userData.userPaymentData,
                        cvc: target.value,
                    },
                });
            } else if (target.name === "name") {
                setUserData({
                    ...userData,
                    userPaymentData: {
                        ...userData.userPaymentData,
                        cardName: target.value,
                    },
                });
            }

            state = { ...state, [target.name]: target.value };
        }

        function handleSubmit(e) {
            e.preventDefault();

            const promisse = axios.post(
                "http://localhost:5000/sign-up",
                userData
            );

            promisse.then(() => setProgress(progress + 1));
            promisse.catch((e) => advice(e.response.data));
        }

        return (
            <div key="Payment">
                <CardBoxes className="App-payment">
                    <Card
                        number={userData.userPaymentData.number}
                        name={userData.userPaymentData.cardName}
                        expiry={userData.userPaymentData.expiry}
                        cvc={userData.userPaymentData.cvc}
                        focused={state.focused}
                        callback={handleCallback}
                    />
                    <form
                        ref={(c) => (this.form = c)}
                        onSubmit={(e) =>
                            handleSubmit(
                                e,
                                this.props.setProgress,
                                this.props.progress
                            )
                        }
                    >
                        <div className="form-group">
                            <label>Card Number</label>
                            <input
                                type="tel"
                                name="number"
                                className="form-control"
                                placeholder="Card Number"
                                pattern="[\d| ]{16,22}"
                                required
                                value={userData.userPaymentData.number}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                            />
                        </div>

                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Name"
                                required
                                value={userData.userPaymentData.cardName}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                            />
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label>Valid Thru</label>
                                <input
                                    type="tel"
                                    name="expiry"
                                    className="form-control"
                                    placeholder="Valid Thru"
                                    pattern="\d\d/\d\d"
                                    required
                                    value={userData.userPaymentData.expiry}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />
                            </div>
                            <div className="col-6">
                                <label>CVC</label>
                                <input
                                    type="tel"
                                    name="cvc"
                                    className="form-control"
                                    placeholder="CVC"
                                    pattern="\d{3,4}"
                                    required
                                    value={userData.userPaymentData.cvc}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />
                            </div>
                        </div>
                        <input
                            type="hidden"
                            name="issuer"
                            value={state.issuer}
                        />
                        <div className="form-actions">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => setProgress(progress - 1)}
                            >
                                Go back
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                            >
                                PAY
                            </button>
                        </div>
                    </form>
                </CardBoxes>
                <ToastContainer />
            </div>
        );
    }
}

const CardBoxes = styled.div`
    display: flex;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        gap: 15px;

        label {
            margin-bottom: 10px;
        }
    }
    .row {
        margin: 0;
        justify-content: space-between;
        width: 100%;

        .col-6 {
            width: 48%;
            padding: 0;
        }
    }

    .form-actions {
        display: flex;
        justify-content: space-between;

        .btn {
            border: none;
        }

        .btn:first-child {
            background-color: #f8f9fa;
            color: #000;
        }

        .btn:last-child {
            width: 150px;
            background-color: #212529;
        }
    }

    @media (max-width: 1000px) {
        flex-direction: column;
    }

    @media (max-width: 430px) {
        .col-6 {
            max-width: 130px;
        }
    }
`;

/*                 setUserData({...userData, userPaymentData: {...userData.userPaymentData, number: target.value}) */
