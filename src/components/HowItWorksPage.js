import styled from "styled-components";

import Header from "../elements/Header";
import Footer from "../elements/Footer";
import FAQ from "../elements/FAQ";
import HowItWorks from "../elements/HowItWorks";

export default function HowItWorksPage() {
    return (
        <>
            <Header />
            <Title>How it Works</Title>
            <HowItWorks />
            <FAQ />
            <Footer />
        </>
    );
}

const Title = styled.h1`
    padding: 20px;
    font-size: 40px;
    text-align: center;
`;
