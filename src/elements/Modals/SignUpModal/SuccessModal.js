import styled from "styled-components";
import Button from "react-bootstrap/Button";

export default function SuccessModal({ setSmShow, setLgShow }) {
    localStorage.removeItem("token");
    localStorage.removeItem("userCredentials");

    return (
        <Container>
            <h1>Congratulations 🎉🎉</h1>
            <p>
                You are now part of the select group of developers who know the magic of Midnight
                Owl Cafe. There will be no more sleep during your nightly programming.
            </p>
            <Button
                variant="dark"
                size="lg"
                onClick={() => {
                    setSmShow(true);
                    setLgShow(false);
                }}
            >
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
        text-align: center;
    }
`;
