import styled from "styled-components";
import Header from ".././elements/Header/Header";
import HowItWorksResume from "../elements/HomepageElements/HowItWorksResume";

export default function HomePage() {
    return (
        <Container>
            <Header />
            <HowItWorksResume />

        </Container>
    );
}

const Container = styled.div`

`;
