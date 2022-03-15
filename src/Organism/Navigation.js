import React, {useState} from 'react';
import CustomButton from "../Atom/CustomButton";
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import logo from '../Media/logo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import FileInput from "../Atom/FileInput";
import {Style} from "../Style";
import axios from "axios";
import * as XLSX from "xlsx";

/*
날짜: 2022/02/14 2:11 PM
작성자: 정도식
작성내용: 네비게이션 사이드바
*/

const Navigation = () => {
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [files, setFiles] = useState(null);
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
            case '색인':
                navigate('/index')
                break
            case '업로드':
                navigate('/upload')
                break
            case '작업장 관리':
                navigate('/manage/workplace')
                break
        }
    }
    const handleClickManage = (e) => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };
    const handleUpload = (event) => {
        const formData = new FormData();
        const file = event.target.files[0];
        formData.append("excelFile", file);
        console.log(file);
        axios.post("http://3.38.19.119:8080/office/excel", formData, { headers: { "Content-Type" : "multipart/form-data" } })
            .then(res => console.log(res));
        let input = event.target;
        let reader = new FileReader();
        reader.onload = function () {
            let data = reader.result;
            let workBook = XLSX.read(data, { type: 'binary' });
            workBook.SheetNames.forEach(function (sheetName) {
                console.log('SheetName: ' + sheetName);
                let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
                let res = [];
                rows.map((row) => {
                    res.push({
                        o_code: String(row.기관코드),
                        o_name: row.전체기관명,
                        o_del: String(row.폐지구분),
                    })
                })
                res.push({
                    o_code: '0000001',
                    o_name: '서울특별시 마포구 상수동 와우산로 94 홍익대학교',
                    o_del: '1',
                })
                localStorage.setItem('organ', JSON.stringify(res));
            })
        };
        reader.readAsBinaryString(input.files[0]);

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
                              fontSize={"23px"} content={"스캔 및 보정"} value={"스캔"} onClick={handleClick}/>
                <CustomButton type={"normal"} width={"100%"} height={"50px"} backgroundColor={"#50586C"}
                              fontSize={"23px"} content={"색인"} value={"색인"} onClick={handleClick}/>
                <CustomButton type={"normal"} width={"100%"} height={"50px"} backgroundColor={"#50586C"}
                              fontSize={"23px"} content={"업로드"} value={"업로드"} onClick={handleClick}/>
                <CustomButton type={"normal"} width={"100%"} height={"50px"} backgroundColor={"#50586C"}
                              fontSize={"23px"} content={"관리"} value={"관리"} onClick={handleClickManage}/>
                {open &&
                    <div style={{ marginLeft: '25%', borderLeft: '3px solid #50586C'}}>
                        <div style={{margin: '10px'}}>
                            <Button value={"작업장 관리"} onClick={handleClick}>작업장 관리</Button>
                        </div>
                        <div style={{margin: '10px'}}>
                            <Label className={'input-file-button'} for={'input-file'}>
                                기관코드 등록
                            </Label>
                            <input type={'file'} name='excel' id={'input-file'} style={{display: 'none'}} onChange={handleUpload}/>
                        </div>
                    </div>
                }
            </BtnContainer>
            <Bottom>
                <LogoutIcon className="icon" onClick={()=>{
                    axios.post("http://3.38.19.119:8080/logout")
                        .then(console.log);
                    navigate('/login');
                }}/>{/*로그아웃*/}
            </Bottom>
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
  height: 100vh;
  &>img { //fis logo
    width: 125px;
    margin: 45px 0;
  }
  & .icon {
    //color: #FFD400;
    color: ${Style.color2};
    font-size: 42px;
  }
  & .icon:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const BtnContainer = styled.div`
width: 95%;
  &>button {
    margin-bottom: 12px;
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
  border: none;
  width: 168px;
  border-bottom: 1px solid #50586C;
  padding: 6px 25px;
  font-size: 15pt;
  background-color: #DCE2F0;
  color: #50586C;
  cursor: pointer;
`

const Bottom = styled.div`
  align-self: end;
  justify-self: center;
  margin-bottom: 45px;
`;

export default Navigation;