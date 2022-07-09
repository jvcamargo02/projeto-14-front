import CardGroup from "react-bootstrap/CardGroup";
import CardRender from "./Card";

export default function PlansCards() {
    const cardsBody = [
        {
            id: 1,
            cardName: "Bimonthly",
            cardImg:
                "https://static1.conquistesuavida.com.br/articles//7/73/07/@/23387-qual-e-o-melhor-tipo-de-cafe-para-voce-t-article_block_media-3.jpg",
            cardContent:
                "Lorem ipsum pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus.",
        },
        {
            id: 2,
            cardName: "Monthly",
            cardImg:
                "https://static1.conquistesuavida.com.br/articles//7/73/07/@/23387-qual-e-o-melhor-tipo-de-cafe-para-voce-t-article_block_media-3.jpg",
            cardContent:
                "Lorem ipsum pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus.",
        },
        {
            id: 3,
            cardName: "Weekly",
            cardImg:
                "https://static1.conquistesuavida.com.br/articles//7/73/07/@/23387-qual-e-o-melhor-tipo-de-cafe-para-voce-t-article_block_media-3.jpg",
            cardContent:
                "Lorem ipsum pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus.",
        },
    ];

    return (
        <CardGroup>
            {cardsBody.map((card, index) => (
                <CardRender card={card} key={index} />
            ))}
        </CardGroup>
    );
}
