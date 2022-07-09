import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import UserContext from "../../../contexts/UserContext";

export default function CardRender({ card }) {
    const { progress, setProgress, userData, setUserData } =
        useContext(UserContext);
    const [cardBorderColor, setCardBorderColor] = useState(
        userData.selectPlanId === card.id ? true : false
    );
    const [cardBgColor, setCardBgColor] = useState(
        userData.selectPlanId === card.id ? true : false
    );
    const [cardTextColor, setCardTextColor] = useState(
        userData.selectPlanId === card.id ? true : false
    );

    function selectCard() {
        setCardBorderColor(!cardBorderColor);
        setCardBgColor(!cardBgColor);
        setCardTextColor(!cardTextColor);
        setUserData({ ...userData, selectPlanId: card.id });
        setTimeout(() => setProgress(progress + 1), 500);
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
