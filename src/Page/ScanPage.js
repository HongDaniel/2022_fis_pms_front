import React from 'react';
import Navigation from "../Organism/Navigation";
import Container from "../Atom/Container";
import MainBox from "../Atom/MainBox";
import styled from "styled-components";
import arrow from "../Media/arrow.png";

const ScanPage = () => {
    const handleHaeCheol = () =>{
        console.log("해철됨");
    }
    return (
        <Container>
            <Navigation/>
            <BoxContainer>
                <MainBox height='1140px' width={"28%"}>
                    <div className={"title"}>반출된 목록</div>
                </MainBox>
                <Arrow src={arrow} onClick={handleHaeCheol}/>
                <MainBox height='1140px' width={"28%"}>
                    <div className={"title"}>해철된 목록</div>
                </MainBox>
                <Arrow src={arrow}/>
                <MainBox height='1140px' width={"28%"}>
                    <div className={"title"}>스캔된 목록</div>
                </MainBox>
            </BoxContainer>
        </Container>
    );
};

//style
const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95vw;
  position: relative;
  & .title { // 제목
    position: absolute;
    margin: -20px 0 0 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    background-color: #fff;
    z-index: 2;
  }
`;
const Arrow = styled.img`
  height: 70px;
  cursor: pointer;
  &:hover{
    transform: scale(1.05);
  }
`;
export default ScanPage;