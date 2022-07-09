import styled from "styled-components";
import Header from ".././elements/Header/Header";
import Footer from ".././elements/Footer";

export default function HomePage() {
    return (
        <Container>
            <Header />
            <h1>Conteudo do site</h1>
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    background-color: #000;

    h1 {
        color: #fff;
        position: relative;
    }
`;
