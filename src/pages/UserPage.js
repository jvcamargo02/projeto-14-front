import styled from "styled-components";
import { useContext, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";

import UserContext from "../contexts/UserContext";
import Product from "../components/Product";

export default function UserPage() {
    const { token } = useContext(UserContext);

    const [productsList, setProductsList] = useState([1, 1, 1, 1, 1]);

    return (
        <>
            <DesktopMain></DesktopMain>
            <div class="album py-5 bg-light">
                <Container>
                    <Row sm={2} lg={4} className={"row-cols-1 g-3"}>
                        {productsList.map((product) => (
                            <Product />
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
}

const DesktopMain = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000;
    padding: 0 40px;
`;

const UserIcon = styled(BiUserCircle)`
    font-size: 30px;
    color: white;
`;
