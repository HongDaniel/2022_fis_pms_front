import React from 'react';
import styled from "styled-components";
import Container from "../Atom/Container";
import Navigation from "../Organism/Navigation";
import MainBox from "../Atom/MainBox";
import Box from "../Atom/Box";
import Table from "../Atom/Table";
import Title from "../Atom/Title";
import {columns, rows} from "./DocumentExportPage";
import CustomInput from "../Atom/CustomInput";
import CustomButton from "../Atom/CustomButton";
import UnstyledTabsCustomized from "../Atom/UnstyledTabsCustomized";

const IndexingPage = () => {
    return (
        <Container>
            <Navigation />
            <MainBox height={'1250px'}>
                <Title>색인</Title>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div>
                        <div style={{margin: '50px 0 0 15px'}}>
                            <Box width='43vw' height='350px' backgroundColor='white'>
                                <BoxTitle>대상 목록</BoxTitle>
                                <Table headerBG='#50586C' cellBG='#DCE2F0' rows={rows} columns={columns} />
                            </Box>
                        </div>
                        <div style={{margin: '50px 0 0 15px'}}>
                            <Box width='43vw' height='350px' backgroundColor='white'>
                                <BoxTitle>철 목록</BoxTitle>
                                <Table headerBG='#50586C' cellBG='#DCE2F0' rows={rows} columns={columns} />
                            </Box>
                        </div>
                        <div style={{margin: '50px 0 0 15px'}}>
                            <Box width='43vw' height='350px' backgroundColor='white'>
                                <BoxTitle>건 목록</BoxTitle>
                                <Table headerBG='#50586C' cellBG='#DCE2F0' rows={rows} columns={columns} />
                            </Box>
                        </div>
                    </div>
                    <div>
                        <div style={{margin: '50px 0 0 15px'}}>
                            <Box width='41vw' height='140px' backgroundColor='white'>
                                <div style={{margin: 20}}>
                                    {/*<span style={{fontSize: '17pt'}}>기관 코드 : </span>*/}
                                    <CustomInput type='number' width='410px' label='기관코드' size='small' margin='0 10px 0 10px'/>
                                    <span style={{fontSize: '17pt'}}>( <CustomInput type='number' width='340px' label='기관코드' size='small' margin='0 10px 0 10px'/> )</span>
                                    <CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='기관코드 찾기'/>
                                </div>
                                <div style={{margin: 20}}>
                                    {/*<span style={{fontSize: '17pt'}}>기관 코드 : </span>*/}
                                    <CustomInput type='number' label='박스' size='small' margin='0 10px 0 10px'/>
                                    <CustomInput type='number' label='레이블' size='small' margin='0 10px 0 10px'/>
                                    <CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='등록완료'/>
                                    <CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='검색'/>
                                    <CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='출력'/>
                                    <CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='검수'/>
                                </div>
                            </Box>
                        </div>
                        <div style={{margin: '50px 0 0 15px'}}>
                            <Box width='41vw' height='961px' backgroundColor='white'>
                                <Box height='100px' backgroundColor='white'>
                                    <div style={{marginTop: '30px', display: 'flex', justifyContent: 'center'}}>
                                        <CustomInput type='select' name='항목 검색' width='130px' label='항목 검색' contents={["철 제목", "생산년도", "종료년도"]} />
                                        <CustomInput type='number' label='' size='small' margin='0 10px 0 10px'/>
                                        <CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='검색'/>
                                    </div>
                                </Box>
                                <UnstyledTabsCustomized />
                            </Box>
                        </div>
                    </div>
                </div>


            </MainBox>
        </Container>
    );
};

const BoxTitle = styled.div`
  position: absolute;
  margin: -15px 0 0 20px;
  font-size: 20px;
  background-color: #fff;
  z-index: 2;
`;

export default IndexingPage;