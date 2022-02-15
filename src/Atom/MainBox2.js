import React from 'react';
import styled from "styled-components";


const MainBox2 = ({title}) => {
    return (
        <Container>
         <Text>{title}</Text>
        </Container>
    );
};
//style
const Container = styled.div`
  width: 2250px;
  height: 1250px;
  margin: 35px 15px;
  border: 2px solid #eee;
  position: relative;
  z-index: 1;
`;

const Text = styled.div`
    position: absolute;
    margin: -20px 0 0 50px;
    font-size: 30px;
    background-color: #fff;
    z-index: 2;
`;
export default MainBox2;