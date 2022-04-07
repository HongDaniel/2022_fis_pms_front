import React from 'react';
import styled from "styled-components";
import logo from "../Media/logo.png";

const NotFound = () => {
    return (
        <Container>
                <img src={logo}/>
                <h2>
                    잘못된 접근입니다. 뒤로 돌아가주세요.
                </h2>
        </Container>
    );
};
const Container = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  & img{
    margin-right: 30px;
  }
`;
export default NotFound;