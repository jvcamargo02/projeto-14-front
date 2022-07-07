import styled from "styled-components";
import { Button, Card, Col } from "react-bootstrap";

export default function Product() {
    return (
        <Col>
            <ProductContent>
                <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRYTGwiY0Q6x4qC2OmOHbmUIaThobhHBftQ&usqp=CAU"
                />
                <Card.Body>
                    <div>
                        <Card.Title>Card Title</Card.Title>
                        <Button variant="outline-success">Add</Button>
                    </div>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Categorias</small>
                </Card.Footer>
            </ProductContent>
        </Col>
    );
}

const ProductContent = styled(Card)`
    img {
        height: 160px;
        width: 100%;
    }

    button {
        padding: 0 1rem;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 1rem 1rem;
    }
    .card-body div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
