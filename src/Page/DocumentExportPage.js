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
import {Style} from "../Style";
import axios from "axios";

export const columns = [
    { field: 'f_id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 100,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
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
    { f_id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { f_id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
];

const DocumentExportPage = () => {
    const onSearch = () => {
        axios.get('http://3.38.19.119:8080/manage/worker')
            .then((res) => console.log(res.data.data))
            .catch(err => console.log(err))
    }

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
                            <CustomButton onClick={onSearch} type='normal' color='#ffffff' backgroundColor={Style.color2} content='레이블 검색'/>
                        </div>
                        <div style={{marginLeft:1350, marginTop:10}}>
                            <CustomButton type='normal' margin='5px' color='#ffffff' backgroundColor={Style.color2} content='박스 출력'/>
                            <CustomButton type='normal' margin='5px' color='#ffffff' backgroundColor={Style.color2} content='철 출력'/>
                            <CustomButton type='normal' margin='5px' color='#ffffff' backgroundColor={Style.color2} content='모두 출력'/>
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
                        <Box width='2176px' height='400px' backgroundColor={Style.color3}>
                            <Table width='2170px' height='380px' headerBG={Style.color2} cellBG={Style.color1} rows={rows} columns={columns} />
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
                            <CustomButton type='normal' width='100px' height='40px' color='#ffffff' backgroundColor={Style.color2} content='날짜 검색'/>
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
                                <CustomButton type='normal' margin='0 5px 0 10px' width='100px' height='40px' color='#ffffff' backgroundColor={Style.color2} content='박스 검색'/>
                            </div>
                            <div>
                                <CustomButton type='normal' margin='0 5px 0 930px' width='100px' height='40px' color='#ffffff' backgroundColor={Style.color2} content='엑셀로 저장'/>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Box width='2176px' height='400px' backgroundColor={Style.color3}>
                            <Table width='2170px' height='380px' headerBG={Style.color2} cellBG={Style.color1} rows={rows} columns={columns} />
                        </Box>
                    </div>
                </MainBox>
            </div>

        </Container>
    );
};

export default DocumentExportPage;