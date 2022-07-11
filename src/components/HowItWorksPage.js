import styled from "styled-components";
import Navbar from "../elements/Header/Navbar";
import Footer from "../elements/Footer";
import FAQ from "../elements/FAQ";
import HowItWorks from "../elements/HowItWorks";


export default function HowItWorksPage() {
    return (
        <>
            <Navbar />
            <Container>
            <Title>How it Works</Title>
            <HowItWorks />
            <FAQ />
            <Footer />
            </Container>
        </>
    );
}

const Container = styled.div`
    padding-top: 60px;
    color: #FFF;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 1) 3%,
        rgba(30, 19, 15, 1) 33%,
        rgba(46, 32, 28, 1) 66%,
        rgba(59, 42, 36, 1) 90%
    );

`

const Title = styled.h1`
    padding: 20px;
    font-size: 40px;
    text-align: center;
`;
