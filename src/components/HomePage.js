import styled from "styled-components";
import Header from "../utils/Header/Header";

export default function HomePage() {
    return (
        <Container>
            <Header />
            <h1>Conteudo do site</h1>
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
