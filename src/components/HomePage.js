import Header from "../elements/Header";
import Banner from "../elements/Banner";
import SignUp from "../elements/ChoosePlan";
import styled from "styled-components";

export default function HomePage() {
    return (
        <>
            <Header />
            <SignUp />
            <h1>Essa é a página principal</h1>
        </>
    );
}
