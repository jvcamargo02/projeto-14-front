import styled from "styled-components";
import Header from ".././elements/Header/Header";
import Footer from ".././elements/Footer";
import HowItWorksResume from "../elements/HomepageElements/HowItWorksResume";

export default function HomePage() {
    return (
        <Container>
            <Header />
            <HowItWorksResume />
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    
`;
