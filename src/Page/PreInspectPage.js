import React from 'react';
import Table from "../Atom/Table";
import Box from "../Atom/Box";
import styled from "styled-components";
import Navigation from "../Organism/Navigation";
import Title from "../Atom/Title";
import Container from "../Atom/Container";
import MainBox from "../Atom/MainBox";
import CustomInput from "../Atom/CustomInput";
import InputContainer from "../Molecule/InputContainer";


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
    return (
        <Container>
            <Navigation/>
            <MainBox height={"1250px"}>
                <Title> 입력 및 검색 </Title>
                <BoxContainer>
                    {/*입력정보*/}
                    <Box width='97%' height='540px' backgroundColor='#fff'>

                        <Required>
                            <h3>필수 입력 정보</h3>
                            <Row columns={"1fr 1fr"}>
                                <InputContainer id={"기관코드"} width={"500px"} type={"text"}/>
                                <InputContainer id={"레이블"} width={"420px"} type={"text"}/>
                            </Row>
                            <Row columns={"1fr 1fr"}>
                                <InputContainer id={"생산기관명"} width={"500px"} type={"text"}/>
                                <InputContainer id={"철제목"} width={"500px"} type={"text"}/>
                            </Row>
                            <Row columns={"1fr 1fr 1fr 1fr 1fr"}>
                                <InputContainer id={"생산년도"} width={"150px"} type={"number"} defaultValue={"1년"} contents={["1년","30년","영구"]}/>
                                <InputContainer id={"보존기간"} width={"150px"} type={"select"}/>
                                <InputContainer id={"구축여부"} width={"150px"} type={"text"}/>
                                <InputContainer id={"스캔여부"} width={"150px"} type={"text"}/>
                                <InputContainer id={"박스번호"} width={"150px"} type={"text"}/>
                            </Row>
                        </Required>

                        <Additional>
                            <h3>부가 입력 정보</h3>
                        </Additional>
                    </Box>
                    {/*조회 데이터*/}
                    <Box width='97%' height='590px' backgroundColor='#eee'>
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
  }

  & > div:nth-child(2) { // 조회 데이터 box
  }
`;

const Required = styled.div`
  & > div {
    margin-left: 50px;
  }
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: ${(props)=>props.columns};
    &>div {
      margin-bottom: 10px;
    }
`;


const Additional = styled.div`
  width: 100%;
`;


export default PreInspectPage;