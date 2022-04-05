import React, {useState} from 'react';
import CustomButton from "../Atom/CustomButton";
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import logo from '../Media/logo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import {Style} from "../Style";
import axios from "axios";
import * as XLSX from "xlsx";
import {useRecoilState} from "recoil";
import {isLogedIn} from "../store/LoginInfo";

/*
날짜: 2022/02/14 2:11 PM
작성자: 정도식
작성내용: 네비게이션 사이드바
*/

const Navigation = () => {
    let navigate = useNavigate();
    const [logInStatus, setLogInStatus] = useRecoilState(isLogedIn);

    const handleClick = (e) => { // 버튼을 클릭했을 때
        const btnName=e.target.value
        switch (btnName) {
            case '사전조사':
                navigate('/')
                break
            case '문서반출':
                navigate('/export')
                break
            case '스캔':
                navigate('/scan')
                break
            case '이미지보정':
                navigate('/imageCorrect')
                break
            case '색인':
                navigate('/index')
                break
            case '업로드':
                navigate('/upload')
                break
            case '작업장관리':
                navigate('/manage/workplace')
                break
        }
    }
    // const handleUpload = (event) => {
    //     const formData = new FormData();
    //     const file = event.target.files[0];
    //     formData.append("excelFile", file);
    //     console.log(file);
    //     axios.post("http://3.38.19.119:8080/office/excel", formData, { headers: { "Content-Type" : "multipart/form-data" } })
    //         .then(res => console.log(res));
    //     let input = event.target;
    //     let reader = new FileReader();
    //     reader.onload = function () {
    //         let data = reader.result;
    //         let workBook = XLSX.read(data, { type: 'binary' });
    //         workBook.SheetNames.forEach(function (sheetName) {
    //             console.log('SheetName: ' + sheetName);
    //             let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
    //             let res = [];
    //             rows.map((row) => {
    //                 res.push({
    //                     o_code: String(row.기관코드),
    //                     o_name: row.전체기관명,
    //                     o_del: String(row.폐지구분),
    //                 })
    //             })
    //             res.push({
    //                 o_code: '0000001',
    //                 o_name: '서울특별시 마포구 상수동 와우산로 94 홍익대학교',
    //                 o_del: '1',
    //             })
    //             localStorage.setItem('organ', JSON.stringify(res));
    //         })
    //     };
    //     reader.readAsBinaryString(input.files[0]);
    // }
    const logout = async () =>{
        await axios.post("http://3.38.19.119:8080/logout")
            .then((res) => {
                console.log(res);
                setLogInStatus(false);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <Container>
            <img src={logo} alt={"logo"}/>
            <BtnContainer>
                <Button value={"사전조사"} onClick={handleClick}>사전조사</Button>
                <Button value={"문서반출"} onClick={handleClick}>문서반출</Button>
                <Button value={"스캔"} onClick={handleClick}>스캔</Button>
                <Button value={"이미지보정"} onClick={handleClick}>이미지보정</Button>
                <Button value={"색인"} onClick={handleClick}>색인</Button>
                <Button value={"검수"} onClick={handleClick}>검수</Button>
                <Button value={"업로드"} onClick={handleClick}>업로드</Button>
                <Button value={"작업장관리"} onClick={handleClick}>작업장 관리</Button>
            </BtnContainer>
            <LogoutIcon className="icon" onClick={logout}/>{/*로그아웃*/}
        </Container>
    );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px auto 150px;
  align-items: center;
  background-color: ${Style.color2};
  width: 100%;
  height: 75px;
  &>img { //fis logo
    height: 50px;
    margin-left: 50px;
  }
  & .icon {
    color: #fff;
    font-size: 42px;
    margin-left: 50px;
  }
  & .icon:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  & .manage {
    width: 100%;
  }
  & > button {
    box-sizing: border-box;
    margin: 0 5px;
  }
`;

const Label = styled.label`
  display: block;
  width: 118px;
  border-bottom: 1px solid #50586C;
  padding: 6px 25px;
  font-size: 15pt;
  background-color: #DCE2F0;
  color: #50586C;
  cursor: pointer;
`

const Button = styled.button`
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  background-color: ${Style.color2};
  border: none;
  cursor: pointer;
  font-size: 23px;
  color: #fff;
  &:hover {
    background-color: ${Style.color1};
    color: ${Style.color2};
    transition: 0.3s;
  }
`

const Bottom = styled.div`
  align-self: end;
  justify-self: center;
  margin-bottom: 45px;
`;

export default Navigation;