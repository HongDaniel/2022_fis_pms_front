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
                <BtnContainer>
                    {/*입력정보*/}
                    <Box width='97%' height='540px' backgroundColor='#eee'>

                        <Required>
                            <h3>필수 입력 정보</h3>
                            <InputContainer id={"기관코드"} width={"320px"}/>
                        </Required>

                        <Additional>
                            <h3>부가 입력 정보</h3>
                        </Additional>
                    </Box>
                    {/*조회 데이터*/}
                    <Box width='97%' height='590px' backgroundColor='#eee'>
                    </Box>
                </BtnContainer>
            </MainBox>
        </Container>
    );
};

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;

  & > div:nth-child(1) { // 입력정보
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }

  & > div:nth-child(2) { // 조회 데이터
  }
`;

const Required = styled.div`
  width: 100%;
  &>label{
    margin-right: 50px;
  }
`;
const Additional = styled.div`
  width: 100%;
`;


export default PreInspectPage;