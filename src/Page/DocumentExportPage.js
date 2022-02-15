import React from 'react';
import Box from "../Atom/Box";
import styled from "styled-components";
import Table from "../Atom/Table";
import MainBox, {add} from "../Atom/MainBox";
import Title from "../Atom/Title";
import Navigation from "../Organism/Navigation";
import CustomButton from "../Atom/CustomButton";
import CustomInput from "../Atom/CustomInput";
import Container from "../Atom/Container";

export const columns = [
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

export const rows = [
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
            <div>
                <MainBox height='620px'>
                    <Title>문서반출</Title>
                    <div style={{margin: 25, display:"flex", flexDirection: "row"}}>
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
                    <div style={{ justifyContent:'right', display:"flex", flexDirection: "row"}}>
                        <div style={{margin:10}}>
                            <CustomInput type='number' label='박스 번호' size='small'/>
                        </div>
                        <div style={{margin:10}}>
                            <CustomInput type='select' name='구축여부' width='130px' label='구축여부' contents={["구축", "비구축"]} />
                        </div>
                        <div style={{margin:10}}>
                            <CustomInput type='select' name='스캔여부' width='130px' label='스캔여부' contents={["구축", "비구축"]} />
                        </div>
                        <div style={{marginTop:6, marginRight:50}}>
                            <CustomButton type='normal' margin='5px' color='#ffffff' backgroundColor='#50586C' content='등록'/>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Box width='85vw' height='400px' backgroundColor='white'>
                            <Table headerBG='#50586C' cellBG='#DCE2F0' rows={rows} columns={columns} />
                        </Box>
                    </div>
                </MainBox>
                <MainBox height='560px'>
                    <Title>반출 리스트</Title>
                    <div style={{margin: 30, display:"flex", flexDirection: "row"}}>
                        <div style={{margin:10}}>
                            <CustomInput type='number' label='시작 날짜' size='small'/>
                        </div>
                        <div style={{marginTop:10, fontSize: 30, fontWeight: 200}}>
                            ~
                        </div>
                        <div style={{margin:10}}>
                            <CustomInput type='number' label='끝 날짜' size='small'/>
                        </div>
                        <div style={{marginTop:10}}>
                            <CustomButton type='normal' width='100px' height='40px' color='#ffffff' backgroundColor='#50586C' content='날짜 검색'/>
                        </div>
                        <div style={{marginLeft:50, marginTop:10, display:"flex", flexDirection: "row"}}>
                            <div style={{marginRight: 10}}>
                                <CustomInput type='number' label='시작 번호' size='small'/>
                            </div>
                            <div style={{ fontSize: 30, fontWeight: 200}}>
                                ~
                            </div>
                            <div style={{marginLeft: 10}}>
                                <CustomInput type='number' label='끝 번호' size='small'/>
                            </div>
                            <div>
                                <CustomButton type='normal' margin='0 5px 0 10px' width='100px' height='40px' color='#ffffff' backgroundColor='#50586C' content='박스 검색'/>
                            </div>
                            <div>
                                <CustomButton type='normal' margin='0 5px 0 930px' width='100px' height='40px' color='#ffffff' backgroundColor='#50586C' content='엑셀로 저장'/>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Box width='85vw' height='400px' backgroundColor='white'>
                            <Table headerBG='#50586C' cellBG='#DCE2F0' rows={rows} columns={columns} />
                        </Box>
                    </div>
                </MainBox>
            </div>

        </Container>
    );
};

export default DocumentExportPage;