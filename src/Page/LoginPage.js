import React from 'react';
import styled from "styled-components"
import {Container} from "@mui/material";
import LoginTemplate from "../Organism/LoginTemplate";

function LoginPage(props) {
    return (
        <Main>
            <Container maxWidth={"sm"}>
                <LoginTemplate setIsLogined={props.setIsLogined}/>
            </Container>
        </Main>
    );
}
const Main = styled.div`
  min-width: 100vw;
`;

export default LoginPage;