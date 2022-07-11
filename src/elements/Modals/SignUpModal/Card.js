import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import UserContext from "../../../contexts/UserContext";

export default function CardRender({ card, setAmount}) {
    const { progress, setProgress, userData, setUserData } =
        useContext(UserContext);

    function selectCard() {
        setUserData({ ...userData, selectPlanId: card.id });
        setAmount(card.cardFooter)
        setTimeout(() => setProgress(progress + 1), 500); 
    }

    return (
        <Card
            onClick={selectCard}
            border={ userData.selectPlanId === card.id ? "success" :  ""}
            bg={ userData.selectPlanId === card.id ? "dark" : "" }
            text={userData.selectPlanId === card.id ?  "light" : "dark"}
        >
            <Card.Img src={card.cardImg} />
            <Card.Body>
                <Card.Title>{card.cardName}</Card.Title>
                <Card.Text>{card.cardContent}</Card.Text>
                <Card.Footer>{card.cardFooter}</Card.Footer>
            </Card.Body>
        </Card>
    );
}
