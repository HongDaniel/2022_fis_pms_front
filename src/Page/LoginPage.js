import React from 'react';
import styled from "styled-components"
import {Container} from "@mui/material";
import LoginForm from "../Molecule/LoginForm";

function LoginPage(props) {
    return (
        <Main>
            <Container maxWidth={"sm"}>
                <LoginForm/>
            </Container>
        </Main>
    );
}
const Main = styled.div`
  min-width: 100vw;
`;

export default LoginPage;