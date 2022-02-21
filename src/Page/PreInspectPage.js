import React, {useState} from 'react';
import Table from "../Atom/Table";
import Box from "../Atom/Box";
import styled from "styled-components";
import Navigation from "../Organism/Navigation";
import Title from "../Atom/Title";
import Container from "../Atom/Container";
import MainBox from "../Atom/MainBox";
import CustomInput from "../Atom/CustomInput";
import InputContainer from "../Molecule/InputContainer";
import CustomButton from "../Atom/CustomButton";
import {DatePicker, DesktopDatePicker, LocalizationProvider} from "@mui/lab";
import {TextField} from "@mui/material";

const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 100,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        flex: 1,
        valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${
                params.getValue(params.id, 'lastName') || ''
            }`,
    },
];

const rows = [
    {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
    {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
    {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
    {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
    {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
    {id: 6, lastName: 'Melisandre', firstName: null, age: 150},
    {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
    {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
    {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
];

const PreInspectPage = () => {
    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <Container>
            <Navigation/>
            <MainBox height={"1250px"}>
                <Title> 입력 및 검색 </Title>
                <BoxContainer>
                    {/*입력정보*/}
                    <Box width='2200px' height='320px' backgroundColor='#ecf0f1'>

                        <InfoContainer>
                            <h3>필수 입력 정보</h3>
                            <Row columns={"3fr 2fr"}>
                                <InputContainer id={"철제목"} width={"550px"} height={"45px"} type={"text"}/>
                                <InputContainer id={"레이블"} width={"550px"} type={"text"}/>
                            </Row>
                            <Row columns={"3fr 2fr"}>
                                {/*<InputContainer id={"생산기관명"} width={"600px"} type={"text"}/>*/}
                                <InputContainer id={"기관코드"} width={"200px"} type={"number"}/>
                                <InputContainer id={"생산년도"} width={"200px"} type={"number"}/>

                            </Row>
                            {/*<Row columns={"1fr 1fr 1fr 1fr 1fr"}>*/}
                            {/*    <InputContainer id={"보존기간"} width={"150px"} type={"select"} defaultValue={"선택"}*/}
                            {/*                    contents={["선택", "1년", "30년", "영구"]}/>*/}
                            {/*    <InputContainer id={"구축여부"} width={"150px"} type={"select"} defaultValue={"선택"}*/}
                            {/*                    contents={["선택", "구축", "비구축"]}/>*/}
                            {/*    <InputContainer id={"스캔여부"} width={"150px"} type={"select"} defaultValue={"선택"}*/}
                            {/*                    contents={["선택", "구축", "비구축"]}/>*/}
                            {/*    <InputContainer id={"박스번호"} width={"150px"} type={"number"}/>*/}
                            {/*</Row>*/}
                        </InfoContainer>

                        {/*<InfoContainer>*/}
                        {/*    <h3>부가 입력 정보</h3>*/}
                        {/*    <Row columns={"1fr 1fr 1fr 1fr"}>*/}
                        {/*        <InputContainer id={"위치"} width={"150px"} type={"number"}/>*/}
                        {/*        <InputContainer id={"보존장소"} width={"150px"} type={"select"} defaultValue={"선택"}*/}
                        {/*                        contents={["선택", "1년", "30년", "영구"]}/>*/}
                        {/*        <InputContainer id={"문서종류"} width={"150px"} type={"select"} defaultValue={"선택"}*/}
                        {/*                        contents={["선택", "구축", "비구축"]}/>*/}
                        {/*        <InputContainer id={"분류번호"} width={"150px"} type={"select"} defaultValue={"선택"}*/}
                        {/*                        contents={["선택", "구축", "비구축"]}/>*/}
                        {/*    </Row>*/}
                        {/*</InfoContainer>*/}
                        <BtnContainer>
                            {/*<CustomButton type={"normal"} name={"저장"} width={"110px"} height={"45px"} fontSize={"22px"}*/}
                            {/*              borderRadius={"25px"} content={"저장"} backgroundColor={"#50586C"}/>*/}
                            {/*<CustomButton type={"normal"} name={"삭제"} width={"110px"} height={"45px"} fontSize={"22px"}*/}
                            {/*              borderRadius={"25px"} content={"삭제"} backgroundColor={"#50586C"}/>*/}
                            <CustomButton type={"normal"} name={"검색"} width={"310px"} height={"75px"} fontSize={"22px"}
                                          borderRadius={"25px"} content={"검색"} backgroundColor={"#50586C"}/>
                            {/*<CustomButton type={"normal"} name={"초기화"} width={"110px"} height={"45px"} fontSize={"22px"}*/}
                            {/*              borderRadius={"25px"} content={"초기화"} backgroundColor={"#50586C"}/>*/}
                            {/*<CustomButton type={"normal"} name={"출력"} width={"110px"} height={"45px"} fontSize={"22px"}*/}
                            {/*              borderRadius={"25px"} content={"출력"} backgroundColor={"#50586C"}/>*/}
                        </BtnContainer>
                    </Box>
                    {/*조회 데이터*/}
                    <Box width='2200px' height='590px' backgroundColor='#ecf0f1'>
                        <Table rows={rows} columns={columns} headerBG={"#50586C"} cellBG={"#DCE2F0"} width={"80%"} height={"90%"}/>
                    </Box>
                </BoxContainer>
            </MainBox>
        </Container>
    );
};

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;

  & h3 { //필수 입력 정보
    margin-left: 30px;
  }

  & > div:nth-child(1) { // 입력정보 box
    margin-bottom: 30px;
    box-sizing: border-box
  }

  & > div:nth-child(2) { // 조회 데이터 box
    padding: 20px;
    box-sizing: border-box;
  }
`;

const InfoContainer = styled.div`
  & > div {
    margin-left: 50px;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  & > div {
    margin-bottom: 30px;
  }
`;

const BtnContainer = styled.div`
position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 25px;
  &>button{
    margin-right: 10px;
  }
`;
export default PreInspectPage;