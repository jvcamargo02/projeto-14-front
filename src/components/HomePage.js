import styled from "styled-components";
import Header from "../utils/Header";
import Banner from "../utils/Header";
import SignUpModal from "../utils/Modals/SignUpModal/SignUpModal";

export default function HomePage() {

    return (
        <Container>
            <Header />
            <h1>Essa é a página principal</h1>
        </Container>
    );
}

const Container = styled.div`
    background-color: #000;
`