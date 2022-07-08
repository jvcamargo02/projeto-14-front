import { useState } from "react";
import Card from "react-bootstrap/Card";


export default function PlansCards({ card, etapa, setEtapa}) {
    const [cardBorderColor, setCardBorderColor] = useState(false);
    const [cardBgColor, setCardBgColor] = useState(false);
    const [cardTextColor, setCardTextColor] = useState(false);

    function selectCard() {
            setCardBorderColor(!cardBorderColor);
            setCardBgColor(!cardBgColor);
            setCardTextColor(!cardTextColor);
            setEtapa(etapa + 1)
        }

    return (
        <Card
            onClick={selectCard}
            border={cardBorderColor === false ? "" : "success"}
            bg={cardBgColor === false ? "" : "dark"}
            text={cardTextColor === false ? "dark" : "light"}
        >
            <Card.Img src={card.cardImg} />
            <Card.Body>
                <Card.Title>{card.cardName}</Card.Title>
                <Card.Text>{card.cardContent}</Card.Text>
            </Card.Body>
        </Card>
    );
}
