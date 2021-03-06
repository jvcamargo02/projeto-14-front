import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import SignUpModal from "../Modals/SignUpModal/SignUpModal";
import LoginModal from "../Modals/LoginModal/LoginModal";
import logoImg from "../../assets/logo.png";
import UserContext from "../../contexts/UserContext";
import PlansCards from "../Modals/SignUpModal/PlansCards"

export default function Navbar({lgShow, setLgShow}) {
    const navigate = useNavigate();
    const userDataString = localStorage.getItem("userCredentials");
    const { setToken } = useContext(UserContext);

    const [plansShow, setPlansShow] = useState(false);
    const [smShow, setSmShow] = useState(false);
    const [toggle, setToggle] = useState(false);

    function successLoggedUser(token) {
        setToken(token);
        navigate("/user");
    }

    function connectedUser() {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
        const credentials = JSON.parse(userDataString);

        if (credentials !== null) {
            const promisse = axios.post(`${API_BASE_URL}/login`, {
                email: credentials.email,
                password: credentials.password
            });
            promisse.then((response) => successLoggedUser(response.data));
        }
        setSmShow(true);
    }

    return (
        <>
            <DesktopMain>
                <img src={logoImg} alt="Logo" onClick={() => navigate("/")} />
                <GiHamburgerMenu onClick={() => setToggle(!toggle)} />

                <NavbarDesktop>
                    <span onClick={() => setPlansShow(true)}>Our plans</span>
                    <span onClick={() => navigate("/how-it-works")}>How it works</span>
                    <span onClick={() => setLgShow(true)}>Sign up</span>
                    <span onClick={() => connectedUser()}>Login</span>
                </NavbarDesktop>
            </DesktopMain>

            <MobileMain display={toggle}>
                <background>
                    <AiOutlineClose onClick={() => setToggle(!toggle)} />
                </background>

                <main>
                    <img src={logoImg} alt="Logo" onClick={() => navigate("/")} />
                    <span onClick={() => setPlansShow(true)}>Our plans</span>
                    <span onClick={() => navigate("/how-it-works")}>How it works</span>
                    <span onClick={() => setLgShow(true)}>Sign up</span>
                    <span onClick={() => connectedUser()}>Login</span>
                    <p>Follow us</p>
                    <social-media>
                        <BsFacebook />
                        <BsInstagram />
                        <BsTwitter />
                        <GoMarkGithub />
                    </social-media>
                </main>
            </MobileMain>
            <SignUpModal lgShow={lgShow} setLgShow={setLgShow} setSmShow={setSmShow} />
            <LoginModal smShow={smShow} setSmShow={setSmShow} />
            <Modal
                size="lg"
                show={plansShow}
                centered
                contentClassName="modal"
                onHide={() => setPlansShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Our Plans</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PlansCards />

                </Modal.Body>
            </Modal>
        </>
    );
}

const DesktopMain = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    position: fixed;
    z-index: 1;
    padding: 0 40px;
    background: rgb(255, 255, 255);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
    color: #fff;

    img {
        height: 60px;
        filter: invert(100%);
        cursor: pointer;
    }

    span,
    svg {
        cursor: pointer;
        font-weight: 600;
    }

    svg {
        display: none;
    }

    @media (max-width: 650px) {
        svg {
            display: inherit;
        }
    }
`;

const NavbarDesktop = styled.div`
    display: flex;
    gap: 30px;

    @media (max-width: 650px) {
        display: none;
    }
`;

const MobileMain = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #000;
    position: fixed;
    top: 0;
    z-index: 1;
    color: #fff;
    display: ${(props) => (props.display === false ? "none" : "inherit")};

    hr {
        width: 100%;
    }

    main {
        width: 80%;
        height: 100vh;
        margin-left: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;

        img {
            height: 80px;
            width: 200px;
            filter: invert(100%);
            cursor: pointer;
        }

        social-media {
            display: flex;
            font-size: 20px;
            margin: 5px 0;
            gap: 20px;
            margin-bottom: 5px;
        }
    }

    background {
        width: 20%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
        position: absolute;

        svg {
            float: right;
            color: #fff;
            font-size: 40px;
            margin-top: 15px;
            margin-right: 10px;
            cursor: pointer;
        }
    }

    span {
        width: 100%;
        line-height: 130px;
        text-align: center;
        font-weight: 500;
        cursor: pointer;
    }

    span:nth-child(2n) {
        background-color: #313131;
    }

    span:last-child {
        border-radius: 0 0 10px 10px;
    }

    @media (min-width: 650px) {
        display: none;
    }
`;
