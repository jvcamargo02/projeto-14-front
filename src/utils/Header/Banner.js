import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

export default function Banner() {
    return (
        <Container>
            <main>
                <h1>A new day has arrived on Earth for coffee</h1>
                <p>Incredibly delicious coffee made impossibly convenient.</p>
                <button>
                    Get started <BsArrowRight />
                </button>
            </main>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    background-color: blue;
    position: relative;
    background: rgb(255, 255, 255);
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 1) 80%
    );
    box-sizing: border-box;
    padding: 0 20px;

    main {
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h1 {
            max-width: 700px;
            font-size: 60px;
            text-align: center;
            color: #fff;
            font-weight: 400;
            margin: 80px 0 15px 0;
            font-family: "Montserrat", sans-serif;
        }

        p {
            font-size: 20px;
            text-align: center;
            color: #fff;
            margin-bottom: 30px;
        }

        button {
            display: flex;
            align-items: center;
            width: 180px;
            height: 50px;
            border: 1px solid wheat;
            background: none;
            color: wheat;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
            font-weight: 700;

            svg {
                margin-left: 8px;
            }
        }
    }
`;
