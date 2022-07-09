import styled from "styled-components";
import Button from "react-bootstrap/Button";

export default function SuccessModal() {
    return (
        <Container>
            <h1>Congratulations 🎉🎉</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Libero enim sed faucibus turpis in eu mi.
            </p>
            <Button variant="dark" size="lg">
                Go to Login
            </Button>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h1 {
        font-size: 25px;
        font-weight: 700;
    }

    p {
        font-size: 19px;
        margin-bottom: 20px;
    }
`;
