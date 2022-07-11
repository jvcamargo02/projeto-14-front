import styled from "styled-components";
import teste from "../../assets/teste.svg";
import getDelivery from "../../assets/get-delivery.svg";
import programming from "../../assets/programming.svg";

export default function HowItWorksResume() {
    return (
        <Container>
            <Title>
                <span>How</span>
                <span>Midnight Owl</span>
                <span> works </span>
            </Title>
            <Cards>
                <Card>
                    <img src={teste} alt="selecting coffes in mobile" />
                    <h1>Pick a Plan</h1>
                </Card>
                <Card>
                    <h1>Get your delivery</h1>
                    <img src={getDelivery} alt="selecting coffes in mobile" />
                </Card>
                <Card>
                    <img src={programming} alt="selecting coffes in mobile" />
                    <h1>Pour, drink, code</h1>
                </Card>
            </Cards>
        </Container>
    );
}

const Container = styled.div`
    background-color: black;
    color: wheat;
    position: relative;
    margin-top: 70px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 1) 3%,
        rgba(30,19,15,1) 68%
    );
`;

const Cards = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
`;

const Card = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    h1 {
        font-size: 35px;
        margin-top: 20px;
        color: #000;
        filter: drop-shadow(0px 2px 10px #fff);
    }

    h1:nth-child(2n + 1) {
        color: #3c3b3b;
        filter: drop-shadow(0px 2px 10px #fff);
    }

    img:nth-child(2) {
        filter: drop-shadow(0px 2px 10px #fff);
    }

    img:nth-child(3n + 3) {
        filter: drop-shadow(0px 2px 10px #000);
    }

    img {
        width: 280px;
        border-radius: 8px;
        filter: drop-shadow(0px 2px 4px #fff);
    }
`;

const Title = styled.div`
    display: flex;
    gap: 5px;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    font-family: "Montserrat", sans-serif;

    span:nth-child(2n) {
        font-weight: 700;
    }

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;
