import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Box from "./Box";
import InputContainer from "../Molecule/InputContainer";
import CustomButton from "./CustomButton";
import Table from "./Table";
import {columns, rows} from "../Page/DocumentExportPage";
import CustomInput from "./CustomInput";

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #64687e;
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid white;
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #DCE2F0;
    color: black;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  width: 500px;
  background-color: #50586C;
  border-radius: 8px 8px 0 0;
  margin: 15px 15px 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function UnstyledTabsCustomized() {
    return (
        <TabsUnstyled defaultValue={0}>
            <TabsList>
                <Tab>철항목</Tab>
                <Tab>건수입력</Tab>
                <Tab>건항목</Tab>
            </TabsList>
            <TabPanel value={0}>
                <Box mt='0' width='1030px' height='780px'>
                    <InfoContainer>
                        <Row columns={"1fr"}>
                            <InputContainer id={"철 제목"} width={"600px"} type={"text"} labelColor='red'/>
                        </Row>
                        <Row columns={"1fr"}>
                            <InputContainer id={"총 권호수"} width={"600px"} type={"number"}/>
                        </Row>
                        <Row columns={"1fr"}>
                            <InputContainer id={"분류 번호"} width={"600px"} type={"number"}/>
                        </Row>
                        <Row columns={"1fr"}>
                            <InputContainer id={"담당자"} width={"600px"} type={"text"}/>
                        </Row>
                        <Row columns={"1fr"}>
                            <InputContainer id={"보존 기간"} width={"600px"} type={"select"} label='항목 검색' contents={["7일", "30일", "1년"]}/>
                        </Row>
                        <Row columns={"1fr"}>
                            <InputContainer id={"보존 방법"} width={"600px"} type={"select"} label='항목 검색' contents={["원본과 보존매체를 함께 보존", "원본만 보존", "보존매체만 보존"]}/>
                        </Row>
                        <Row columns={"1fr"}>
                            <InputContainer id={"보존 장소"} width={"600px"} type={"select"} label='항목 검색' contents={["자료관", "문서보관실"]}/>
                        </Row>
                        <Row columns={"1fr"}>
                            <InputContainer id={"기록물 형태"} width={"600px"} type={"text"}/>
                        </Row>
                        <Row columns={"1fr"}>
                            <CustomButton width='300px' height='40px' type='normal' margin='5px' color='#ffffff' backgroundColor='#50586C' content='자동 정보 확인 >>'/>
                        </Row>
                    </InfoContainer>
                </Box>
            </TabPanel>
            <TabPanel value={1}>
                <Box mt='0' width='1030px' height='780px'>
                    <InfoContainer>
                        <Row columns={"2fr 1fr 1fr"}>
                            <InputContainer id={"권호수 선택"} width={"200px"} type={"select"} label='권호수 선택' contents={["001", "002", "003"]}/>
                            <InputContainer id={"건수"} width={"200px"} type={"text"} />
                            <CustomButton width='100px' height='40px' type='normal' margin='0 0 0 50px' color='#ffffff' backgroundColor='#50586C' content='쪽수 입력'/>
                        </Row>
                    </InfoContainer>
                    <TableContainer>
                        <Table width='1000px' height='380px' headerBG='#50586C' cellBG='#DCE2F0' rows={rows} columns={columns} />
                    </TableContainer>
                </Box>
            </TabPanel>
            <TabPanel value={2}>
                <Box mt='0' width='1030px' height='810px'>
                    <InfoContainer>
                        <Row columns={"1fr 1fr 1fr"}>
                            <InputContainer className={'page'} id={"첫 페이지"} width={"100px"} type={"text"}/>
                            <InputContainer className={'page'} id={"끝 페이지"} width={"100px"} type={"text"}/>
                            <InputContainer className={'page'} id={"쪽수"} width={"100px"} type={"text"}/>
                        </Row>
                        <Row columns={"1fr"}>
                            <InputContainer  id={"등록구분"} width={"600px"} type={"number"}/>
                        </Row>
                        <Row columns={"1fr 1fr"}>
                            <InputContainer  id={"시행일자"} width={"200px"} type={"number"}/>
                            <InputContainer  id={"생산(접수)일자"} width={"200px"} type={"number"}/>
                        </Row>
                        <Row columns={"1fr"}>
                            <InputContainer  id={"생산기관명"} width={"600px"} type={"text"}/>
                        </Row>
                        <Row columns={"1fr 1fr"}>
                            <InputContainer  id={"문서 번호"} width={"200px"} type={"select"} label='항목 검색' contents={["7일", "30일", "1년"]}/>
                            <InputContainer  id={"보존 기간"} width={"200px"} type={"select"} label='항목 검색' contents={["7일", "30일", "1년"]}/>
                        </Row>
                        <Row columns={"1fr"}>
                            <InputContainer  id={"건 제목"} width={"600px"} type={"select"} label='항목 검색' contents={["원본과 보존매체를 함께 보존", "원본만 보존", "보존매체만 보존"]}/>
                        </Row>
                        <Row columns={"1fr 1fr"}>
                            <InputContainer  id={"기안자"} width={"200px"} type={"select"} label='항목 검색' contents={["자료관", "문서보관실"]}/>
                            <InputContainer  id={"결재권자"} width={"200px"} type={"select"} label='항목 검색' contents={["자료관", "문서보관실"]}/>
                        </Row>
                        <Row columns={"1fr"}>
                            <InputContainer  id={"수(발)신자"} width={"600px"} type={"text"}/>
                        </Row>
                        <Row columns={"1fr"}>
                            <InputContainer className={'record'} fontSize='13pt' id={"전자기록물 여부"} width={"600px"} type={"text"}/>
                        </Row>
                        <Row columns={"1fr 4fr"}>
                            <span style={{fontSize: '14pt'}}>* 공개 여부</span>
                            <PublicContainer>
                                <CustomInput type='radio' name='공개 여부' width='500px' label='공개 여부' contents={["공개", "부분공개", "비공개"]} />
                                <CustomInput type='radio' name='등급' width='800px' label='등급' contents={["1등급", "2등급", "3등급", "4등급", "5등급", "6등급", "7등급", "8등급"]} />
                                <InputContainer fontSize='12pt' id={"공개제한부분표시"} width={"600px"} type={"text"}/>
                            </PublicContainer>
                        </Row>
                    </InfoContainer>
                </Box>
            </TabPanel>
        </TabsUnstyled>
    );
}

const InfoContainer = styled('div')`
  position: absolute;
  width: 900px;
  margin-top: 20px;
  & > div {
    margin-left: 50px;
  }
`;

const Row = styled('div')`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  margin-bottom: 16px;
  & > div {
    & > label {
      font-size: 14pt;
    }
  }
  
`;

const TableContainer = styled('div')`
  position: absolute;
  margin-top: 150px;
  & > div {
    margin-left: 10px;
  }
`;

const PublicContainer = styled('div')`
  position: absolute;
  border: 1px solid black;
  width: 900px;
  margin-top: 40px;
  & > div {
    margin: 10px 0 10px 20px;
  }
`;