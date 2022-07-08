import React from "react";
import Card from "react-credit-cards";
import styled from "styled-components";
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
} from "./utils.js/PaymentUtils";
import "react-credit-cards/es/styles-compiled.css";
import UserContext from "../../../context.js/UserContext";

export default class App extends React.Component {
    static contextType = UserContext;

    state = {
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        issuer: "",
        focused: "",
        formData: null,
    };

    handleCallback = ({ issuer }, isValid) => {
        if (isValid) {
            this.setState({ issuer });
        }
    };

    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name,
        });
    };

    handleInputChange = ({ target }) => {
        if (target.name === "number") {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === "expiry") {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === "cvc") {
            target.value = formatCVC(target.value);
        }

        this.setState({ [target.name]: target.value });
    };

    render() {
        const { name, number, expiry, cvc, focused, issuer } = this.state;

        const { progress, setProgress, setUserData, userData } = this.context;

        function handleSubmit(e) {
            e.preventDefault();
            setUserData({
                ...userData,
                userPaymentData: {
                    number,
                    name,
                    expiry,
                    cvc,
                },
            });
            setProgress(progress + 1);
            console.log(userData);
        }

        return (
            <div key="Payment">
                <CardBoxes className="App-payment">
                    <Card
                        number={number}
                        name={name}
                        expiry={expiry}
                        cvc={cvc}
                        focused={focused}
                        callback={this.handleCallback}
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
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
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
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
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
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
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
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>
                        </div>
                        <input type="hidden" name="issuer" value={issuer} />
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
