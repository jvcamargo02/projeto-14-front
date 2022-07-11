import { useContext } from "react";
import styled from "styled-components";
import CardGroup from "react-bootstrap/CardGroup";
import CardRender from "./Card";
import UserContext from "../../../contexts/UserContext";
import Form from "react-bootstrap/Form";
import coffee from "../../../assets/coffe.svg"

export default function PlansCards({setAmount}) {
    const { userData, setUserData } = useContext(UserContext);
    const cardsBody = [
        {
            id: 1,
            cardName: "Biannually",
            cardImg:
                "https://static1.conquistesuavida.com.br/articles//7/73/07/@/23387-qual-e-o-melhor-tipo-de-cafe-para-voce-t-article_block_media-3.jpg",
            cardContent: "Receive our products weekly for a semester.",
            cardFooter: `$${(70 + userData.capsules * 6.3).toFixed(1)} - 60% OFF`,
        },
        {
            id: 2,
            cardName: "Quarterly",
            cardImg:
                "https://static1.conquistesuavida.com.br/articles//7/73/07/@/23387-qual-e-o-melhor-tipo-de-cafe-para-voce-t-article_block_media-3.jpg",
            cardContent: "Receive our products weekly for a quarter.",
            cardFooter: `$${(45 + userData.capsules * 6.3).toFixed(1)} - 25% OFF`,
        },
        {
            id: 3,
            cardName: "Monthly",
            cardImg:
                "https://static1.conquistesuavida.com.br/articles//7/73/07/@/23387-qual-e-o-melhor-tipo-de-cafe-para-voce-t-article_block_media-3.jpg",
            cardContent: "Receive our products weekly for a month.",
            cardFooter: `$${(19.9 + userData.capsules * 6.3).toFixed(1)}`,
        },
    ];

    return (
        <Container>
            <Capsules>
                <h1>How many capsules do you use per week?</h1>
                <main>
                    <img src={coffee} alt="Coffee" />
                <Form.Label>{userData.capsules}</Form.Label>
                <Form.Range
                    onChange={(e) =>
                        setUserData({ ...userData, capsules: e.target.value })
                    }
                    min="3"
                    max="30"
                />
                </main>
            </Capsules>
            <hr/>
            <CardGroup>
                {cardsBody.map((card, index) => (
                    <CardRender
                        isChecked={
                            userData.selectPlanId === card.id ? true : false
                        }
                        card={card}
                        key={index}
                        setAmount={setAmount}
                    />
                ))}
            </CardGroup>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-itens: center;
    flex-direction: column;

    input[type="range"] {
        -webkit-appearance: none;
        border: 1px solid white;
        width: 300px;
    }
    input[type="range"]::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }
    input[type="range"]::-webkit-slider-runnable-track {
        width: 300px;
        height: 8px;
        background: rgb(0, 0, 0);
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 1) 3%,
            rgba(61, 13, 13, 1) 68%
        );
        border: none;
        border-radius: 3px;
    }
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        height: 20px;
        width: 20px;
        margin-top: -10px;
        background-color: transparent;
        background-image: url("https://icons.veryicon.com/png/o/food--drinks/delicacy-series/coffee-cup-16.png");
        background-position: 0 0;
        background-size: cover;
        transform: scale(1.9) rotateZ(var(--thumb-rotate, 10deg));
        cursor: pointer;
    }
`;

const Capsules = styled.div`
    width: 100%;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
    position: relative;

    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1{
        width: 25%;
        font-size: 18px;
        font-weight: 600;

    }

    input{
        margin-left: auto;
    }

    img{
        width: 80px;
        position: relative;
        margin-top: 5px;
    }

    label{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        display: flex;
        align-content: center;
        font-weight: 700;
    }

    @media (max-width:500px){
        flex-direction: column;

        h1{
            width: 200px;
            text-align: center;
        }
    }

`
