import styled from "styled-components";
import { Accordion, Container } from "react-bootstrap";

export default function FAQ() {
    return (
        <FAQContainer className="px-4 py-4">
            <h2>
                Still have questions? <br /> We've got answers.
            </h2>
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Are there any commitments?</Accordion.Header>
                    <Accordion.Body className="px-4">
                        Nope. You can skip your weekly delivery or cancel at any time.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Can I select my products?</Accordion.Header>
                    <Accordion.Body className="px-4">
                        Yes! You can choose your products every week.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What if I'm not home?</Accordion.Header>
                    <Accordion.Body className="px-4">
                        Delivery times are from 8 am to 8 pm on the day you choose. If you’re not at
                        home, don’t worry! You can always add special delivery instructions to your
                        account.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What if I don't want a delivery every week?</Accordion.Header>
                    <Accordion.Body className="px-4">
                        No worries. You can easily skip a week (or several!) when you need to.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </FAQContainer>
    );
}

const FAQContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        padding: 20px;
        font-size: 40px;
        font-weight: 700;
        text-align: center;
    }

    .accordion-button {
        font-weight: 500;
    }
`;
