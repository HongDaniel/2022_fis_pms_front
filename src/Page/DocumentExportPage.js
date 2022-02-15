import React from 'react';
import Box from "../Atom/Box";
import styled from "styled-components";
import Table from "../Atom/Table";
import MainBox, {add} from "../Atom/MainBox";
import Title from "../Atom/Title";
import Navigation from "../Organism/Navigation";
import CustomButton from "../Atom/CustomButton";
import CustomInput from "../Atom/CustomInput";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
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
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const H1 = styled.h1`
  text-align: left;
  margin-top: -10px;
  margin-bottom: 10px;
  margin-left: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 25px;
`

const Span = styled.span`
  background-color: white;
`

const DocumentExportPage = () => {
    return (
        <Container>
            <Navigation/>
            <MainBox>
                <Title>문서반출</Title>
                <div style={{margin: 30, display:"flex", flexDirection: "row"}}>
                    <div style={{margin:10}}>
                        <CustomInput type='number' label='시작 레이블' size='small'/>
                    </div>
                    <div style={{marginTop:10, fontSize: 30, fontWeight: 200}}>
                        ~
                    </div>
                    <div style={{margin:10}}>
                        <CustomInput type='number' label='끝 레이블' size='small'/>
                    </div>
                    <div style={{marginTop:10}}>
                        <CustomButton type='normal' color='#ffffff' backgroundColor='#50586C' content='레이블 검색'/>
                    </div>
                    <div style={{marginLeft:1350, marginTop:10}}>
                        <CustomButton type='normal' margin='5px' color='#ffffff' backgroundColor='#50586C' content='박스 출력'/>
                        <CustomButton type='normal' margin='5px' color='#ffffff' backgroundColor='#50586C' content='철 출력'/>
                        <CustomButton type='normal' margin='5px' color='#ffffff' backgroundColor='#50586C' content='모두 출력'/>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Box width='85vw' height='400px' backgroundColor='white'>
                        <Table headerBG='#50586C' cellBG='#DCE2F0' rows={rows} columns={columns} />
                    </Box>
                </div>
            </MainBox>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  //height: 100vh;
  //width: auto;
`;

export default DocumentExportPage;