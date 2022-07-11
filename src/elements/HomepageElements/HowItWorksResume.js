import styled from "styled-components";
import Footer from "../Footer";
import teste from "../../assets/teste.svg";
import getDelivery from "../../assets/get-delivery.svg";
import programming from "../../assets/programming.svg";

export default function HowItWorksResume() {
    return (
        <Container>
            <Content>
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
                        <img
                            src={getDelivery}
                            alt="selecting coffes in mobile"
                        />
                    </Card>
                    <Card>
                        <img
                            src={programming}
                            alt="selecting coffes in mobile"
                        />
                        <h1>Pour, drink, code</h1>
                    </Card>
                </Cards>
            </Content>
            <hr />
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    background: rgb(0, 0, 0);
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 1) 3%,
        rgba(30, 19, 15, 1) 44%,
        rgba(46, 32, 28, 1) 66%,
        rgba(59, 42, 36, 1) 90%
    );
`;

const Content = styled.div`
    color: wheat;
    position: relative;
    margin-top: 70px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
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
        font-size: 33px;
        margin-top: 20px;
        color: #fff;
        filter: drop-shadow(0px 2px 10px #fff);
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
