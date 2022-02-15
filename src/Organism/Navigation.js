import React from 'react';
import CustomButton from "../Atom/CustomButton";
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import logo from '../Media/logo.png'

/*
날짜: 2022/02/14 2:11 PM
작성자: 정도식
작성내용: 네비게이션 사이드바
*/

const Navigation = () => {
    let navigate = useNavigate();
    const handleClick = (e) => { // 버튼을 클릭했을 때
        const btnName=e.target.value
        switch (btnName) {
            case '사전조사':
                navigate('/')
                break
            case '문서반출':
                navigate('/export')
                break
            case '색인':
                navigate('/index')
                break
            case '업로드':
                navigate('/upload')
                break
            case '관리':
                navigate('/manage')
                break
        }
    }

    return (
        <Container>
            <img src={logo} alt={"logo"}/>
            <BtnContainer>
                <CustomButton type={"normal"} width={"100%"} height={"50px"} backgroundColor={"#50586C"}
                              fontSize={"23px"} content={"사전조사"} value={"사전조사"} boxShadow ={""} onClick={handleClick}/>
                <CustomButton type={"normal"} width={"100%"} height={"50px"} backgroundColor={"#50586C"}
                              fontSize={"23px"} content={"문서반출"} value={"문서반출"} onClick={handleClick}/>
                <CustomButton type={"normal"} width={"100%"} height={"50px"} backgroundColor={"#50586C"}
                              fontSize={"23px"} content={"색인"} value={"색인"} onClick={handleClick}/>
                <CustomButton type={"normal"} width={"100%"} height={"50px"} backgroundColor={"#50586C"}
                              fontSize={"23px"} content={"업로드"} value={"업로드"} onClick={handleClick}/>
                <CustomButton type={"normal"} width={"100%"} height={"50px"} backgroundColor={"#50586C"}
                              fontSize={"23px"} content={"관리"} value={"관리"} onClick={handleClick}/>
            </BtnContainer>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  background-color: #DCE2F0;
  width: 280px;
  //height: 100vh;
  &>img { //fis logo
    width: 125px;
    margin: 45px 0;
  }
`;

const BtnContainer = styled.div`
width: 95%;
  &>button {
    margin-bottom: 12px;
  }
`;
export default Navigation;