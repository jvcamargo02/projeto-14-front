import {useState} from "react"
import styled from "styled-components";
import Navbar from "./Navbar";
import SignUpModal from "../Modals/SignUpModal/SignUpModal";
import bannerImg from "../../assets/banner.gif";
import Banner from "./Banner";

export default function Header() {
    const [lgShow, setLgShow] = useState(false);
    return (
        <Container>
            <Navbar  lgShow={lgShow} setLgShow={setLgShow}/>
            <SignUpModal />
            <Banner setLgShow={setLgShow}/>
        </Container>
    );
}

const Container = styled.div`
    height: 88vh;
    background-image: url(${bannerImg});
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
