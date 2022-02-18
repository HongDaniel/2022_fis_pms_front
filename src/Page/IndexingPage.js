import React, {useState} from 'react';
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
import TransitionsModal from "../Atom/TransitionsModal";
import AppendDots from "../Atom/AppendDots";

const IndexingPage = () => {
    const [currentTab, setCurrentTab] = useState(()=>'0');
    const [openImage, setOpenImage] = useState(() => false);

    return (
        <Container>
            <Navigation />
            <MainBox height={'1250px'}>
                <Title>
                    색인
                    <CustomButton onClick={() => {
                        if (openImage) {
                            setOpenImage(false);
                        } else {
                            setOpenImage(true);
                        }
                    }} type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content={openImage ? '목록 보기' : '이미지 보기'}/>
                </Title>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {openImage ?
                        <div>
                            <div style={{margin: '50px 0 0 15px'}}>
                                <Box width='1100px' height='1150px' backgroundColor='#ecf0f1'>
                                    <BoxTitle>이미지</BoxTitle>
                                    <AppendDots />
                                </Box>
                            </div>
                        </div>
                        :
                        <div>
                            <div style={{margin: '50px 0 0 15px'}}>
                                <Box width='1100px' height='350px' backgroundColor='#ecf0f1'>
                                    <BoxTitle>대상 목록</BoxTitle>
                                    <Table width='1100px' height='330px' headerBG='#50586C' cellBG='#DCE2F0' rows={rows}
                                           columns={columns}/>
                                </Box>
                            </div>
                            <div style={{margin: '50px 0 0 15px'}}>
                                <Box width='1100px' height='350px' backgroundColor='#ecf0f1'>
                                    <BoxTitle>철 목록</BoxTitle>
                                    <Table width='1100px' height='330px' headerBG='#50586C' cellBG='#DCE2F0' rows={rows}
                                           columns={columns}/>
                                </Box>
                            </div>
                            <div style={{margin: '50px 0 0 15px'}}>
                                <Box width='1100px' height='350px' backgroundColor='#ecf0f1'>
                                    <BoxTitle>건 목록</BoxTitle>
                                    <Table width='1100px' height='330px' headerBG='#50586C' cellBG='#DCE2F0' rows={rows}
                                           columns={columns}/>
                                </Box>
                            </div>
                        </div>
                    }
                    <div>
                        <div style={{margin: '50px 0 0 15px'}}>
                            <Box width='1050px' height='140px' backgroundColor='#ecf0f1'>
                                <InfoContainer>
                                    <Row columns={"1fr 1fr 1.9fr"}>
                                        <CustomInput type='number' width='410px' label='* 기관명' size='small' margin='0 10px 0 10px'/>
                                        <span style={{fontSize: '17pt'}}>
                                            (<CustomInput type='number' width='160px' label='* 기관코드' size='small' margin='0 10px 0 10px'/>)
                                        </span>
                                        {/*<CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='기관코드 찾기'/>*/}
                                        <TransitionsModal currentTab={currentTab} content={'기관코드 찾기'}/>
                                    </Row>
                                    <Row columns={"2fr 2fr 1fr 1fr 1fr 1fr"}>
                                        {/*<span style={{fontSize: '17pt'}}>기관 코드 : </span>*/}
                                        <CustomInput type='number' label='* 박스' size='small' margin='0 10px 0 10px'/>
                                        <CustomInput type='number' label='* 레이블' size='small' margin='0 10px 0 10px'/>
                                        <CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='등록완료'/>
                                        {/*<CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='검색'/>*/}
                                        <TransitionsModal currentTab={currentTab} content={'검색'}/>
                                        <CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='출력'/>
                                        <CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='검수'/>
                                    </Row>
                                </InfoContainer>
                            </Box>
                        </div>
                        <div style={{margin: '20px 0 0 15px'}}>
                            <Box width='1050px' height='990px' backgroundColor='white'>
                                <Box width='1030px' height='100px' backgroundColor='#ecf0f1'>
                                    {currentTab !== '1' &&
                                        <div style={{position: 'absolute', margin: '30px 0 0 250px'}}>
                                            <Row columns={'1fr 2fr 1fr'}>
                                                <CustomInput type='select' name='항목 검색' width='130px' label='항목 검색'
                                                             contents={currentTab === '0' ? ["철 제목", "생산년도", "종료년도"] : ["문서 제목", "건 제목", "수(발)신자"]}/>
                                                <CustomInput type='number' label='' size='small' margin='0 10px 0 10px'/>
                                                {/*<CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='검색'/>*/}
                                                <TransitionsModal currentTab={currentTab} content={'검색'}/>
                                            </Row>
                                        </div>
                                    }
                                </Box>
                                <UnstyledTabsCustomized setCurrentTab={setCurrentTab} />
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

const Row = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  position: absolute;
  margin: 20px;
`;

export default IndexingPage;