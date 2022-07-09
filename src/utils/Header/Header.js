import styled from "styled-components"
import Navbar from "./Navbar";
import SignUpModal from "../Modals/SignUpModal/SignUpModal";
import bannerImg from "../../assets/banner.gif"
import Banner from "./Banner";

export default function Header() {
    return (
    <Container>
            <Navbar />
            <SignUpModal />
            <Banner/>
    </Container>)
}

const Container = styled.div`
    height: 88vh;
    background-image: url(${bannerImg});
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`