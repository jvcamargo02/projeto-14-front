import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import ChoosePlan from "../Modals/SignUpModal/SignUpModal"
import LoginModal from "../Modals/LoginModal/LoginModal"
import logoImg from "../../assets/logo.png";

export default function Navbar() {
    const navigate = useNavigate()
    const [lgShow, setLgShow] = useState(false);
    const [smShow, setSmShow] = useState(false);
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <DesktopMain>
                <img src={logoImg} alt="Logo" />
                <GiHamburgerMenu onClick={() => setToggle(!toggle)} />

                <NavbarDesktop>
                    <span >Our plans</span>
                    <span onClick={() => navigate("/how-it-works")}>How it works</span>
                    <span onClick={() => setLgShow(true)}>Sign up</span>
                    <span onClick={() => setSmShow(true)}>Login</span>
                </NavbarDesktop>
            </DesktopMain>

            <MobileMain display={toggle}>
                <background>
                    <AiOutlineClose onClick={() => setToggle(!toggle)} />
                </background>

                <main>
                    <img src={logoImg} alt="Logo" />
                    <span>Our plans</span>
                    <span onClick={() => navigate("/how-it-works")}>How it works</span>
                    <span onClick={() => setLgShow(true)}>Sign up</span>
                    <span onClick={() => setSmShow(true)}>Login</span>
                    <p>Follow us</p>
                    <social-media>
                        <BsFacebook />
                        <BsInstagram />
                        <BsTwitter />
                        <GoMarkGithub />
                    </social-media>
                </main>
            </MobileMain>
            <ChoosePlan lgShow={lgShow} setLgShow={setLgShow}/>
            <LoginModal smShow={smShow} setSmShow={setSmShow} />
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
    background: linear-gradient(
        180deg,rgba(0, 0, 0, 0.3) 0%,
        rgba(255, 255, 255, 0) 100%
        
    );
    color: #fff;

    img {
        height: 60px;
        filter: invert(100%);
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
