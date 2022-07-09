import { useState } from "react";
import styled from "styled-components";
import logoImg from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const navigate = useNavigate();

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <DesktopMain>
                <img src={logoImg} alt="Logo" onClick={() => navigate("/")} />
                <GiHamburgerMenu onClick={() => setToggle(!toggle)} />

                <Navbar>
                    <span>Our plans</span>
                    <span onClick={() => navigate("/how-it-works")}>How it works</span>
                    <span>Sign up</span>
                    <span>Login</span>
                </Navbar>
            </DesktopMain>

            <MobileMain display={toggle}>
                <background>
                    <AiOutlineClose onClick={() => setToggle(!toggle)} />
                </background>

                <main>
                    <img src={logoImg} alt="Logo" onClick={() => navigate("/")} />
                    <span>Our plans</span>
                    <span>How it works</span>
                    <span>Sign up</span>
                    <span>Login</span>
                    <hr />
                    <p>Follow us</p>
                    <social-media>
                        <BsFacebook />
                        <BsInstagram />
                        <BsTwitter />
                        <GoMarkGithub />
                    </social-media>
                </main>
            </MobileMain>
        </>
    );
}

const DesktopMain = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000;
    box-sizing: border-box;
    padding: 0 40px;
    color: #fff;

    img {
        height: 60px;
        filter: invert(100%);
        cursor: pointer;
    }

    span,
    svg {
        cursor: pointer;
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

const Navbar = styled.div`
    display: flex;
    gap: 30px;

    @media (max-width: 650px) {
        display: none;
    }
`;

const MobileMain = styled.div`
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    color: #fff;
    display: ${(props) => (props.display === false ? "none" : "inherit")};

    hr {
        width: 100%;
    }

    main {
        width: 80%;
        height: 100vh;
        background-color: #000;
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
