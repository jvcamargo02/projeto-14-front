import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import logoImg from "../assets/logo.png";

export default function Footer() {
    const navigate = useNavigate();

    return (
        <FooterContainer>
            <Container className="py-5">
                <Row className="row-cols-1 row-cols-sm-1 row-cols-md-3">
                    <Col className="col-md px-4 py-4">
                        <h5>Get started</h5>
                        <ul>
                            <li>Our plans</li>
                            <li onClick={() => navigate("/how-it-works")}>How it works</li>
                        </ul>
                    </Col>
                    <Col className="col-md px-4 py-4">
                        <h5>Company</h5>
                        <ul>
                            <li>About us</li>
                            <li>Partners</li>
                        </ul>
                    </Col>
                    <Col className="col-md-4">
                        <img src={logoImg} alt="Midnight Owl Cafe logo" />
                        <p>© 2022 Midnight Owl Cafe, Inc. All rights reserved.</p>
                        <SocialMedias>
                            <BsTwitter />
                            <BsInstagram />
                            <BsFacebook />
                        </SocialMedias>
                    </Col>
                </Row>
            </Container>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    color: #ffffff;
    background: rgb(2, 0, 36);
    background: linear-gradient(
        0deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(0, 0, 0, 1) 76%
    );

    h5 {
        font-weight: 700;
    }

    li {
        margin: 8px 0;
        cursor: pointer;
    }

    img {
        width: 200px;
        filter: invert(100%);
    }

    p {
        margin: 0 10px;
        font-size: 12px;
    }
`;

const SocialMedias = styled.div`
    display: flex;
    margin: 16px 10px;

    svg {
        margin: 0 6px;
        font-size: 24px;
        cursor: pointer;
    }
`;
