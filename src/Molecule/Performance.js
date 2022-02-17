import React from 'react';
import InputContainer from "./InputContainer";
import AutoInfoToggle from "./AutoInfoToggle";
import Box from "../Atom/Box";
import {styled} from "@mui/system";
import Title from "../Atom/Title";
import CustomInput from "../Atom/CustomInput";
import ManageContainer from "./ManageContainer";
import CustomButton from "../Atom/CustomButton";
import Table from "../Atom/Table";
import {columns, rows} from "../Page/DocumentExportPage";

function Performance(props) {
    return (
        <Box mt='0' width='2200px' height='1140px' backgroundColor={'#ffffff'}>
            <div style={{position: "absolute", margin: '20px'}}>
                <Box mt='10px' width='2120px' height='400px' backgroundColor={'#ecf0f1'}>
                    {/*<Title> 계획 입력 </Title>*/}
                    <Row columns={"1fr 1fr 1fr 1fr"}>
                        <ManageContainer name={"전수조사"}/>
                        <ManageContainer name={"면표시검증"}/>
                        <ManageContainer name={"색인검수"}/>
                        <ManageContainer name={"목록작업"}/>
                    </Row>
                    <Row columns={"1fr 1fr 1fr 1fr"}>
                        <ManageContainer name={"스캔문서"}/>
                        <ManageContainer name={"로 딩"}/>
                        <ManageContainer name={"반입반출"}/>
                        <ManageContainer name={"스캔도면"}/>
                    </Row>
                    <Row columns={"1fr 1fr 1fr 1fr"}>
                        <ManageContainer name={"재 편 철"}/>
                        <ManageContainer name={"분 류"}/>
                        <ManageContainer name={"이미지보정"}/>
                        <ManageContainer name={"보존상자편성"}/>
                    </Row>
                    <Row columns={"1fr 1fr 1fr 1fr"}>
                        <ManageContainer name={"분류검증"}/>
                        <ManageContainer name={"이미지검수"}/>
                        <ManageContainer name={"서가배치"}/>
                        <ManageContainer name={"면 표 시"}/>
                    </Row>
                    <Row columns={"1fr 1fr 1fr 1fr"}>
                        <ManageContainer name={"색인입력"}/>
                        <ManageContainer name={"기타작업"}/>
                        <span />
                        <div style={{width: '468px', justifyContent: 'right', display: 'flex'}}>
                            <CustomButton type={"normal"} name={"저장"} width={"108px"} height={"45px"} fontSize={"22px"} margin={"20px 0 0 0"}
                                          backgroundColor={'#50586C'} borderRadius={"25px"} content={"저장"}/>
                        </div>
                    </Row>
                </Box>
                <Row columns={"1fr 1fr"}>
                    <Box mt='30px' width='1050px' height='630px' backgroundColor={'#ffffff'}>
                        <BoxTitle> 계획 대비 실적(누적) </BoxTitle>
                        <div style={{marginTop: '10px'}}>
                            <Table headerBG='#50586C' cellBG='#DCE2F0' height={'600px'} width={'1050px'} rows={rows} columns={columns}/>
                        </div>
                    </Box>
                    <div>
                        <Box mt='30px' width='1050px' height='300px' backgroundColor={'#ffffff'}>
                            <BoxTitle> 등록된 과 리스트 </BoxTitle>
                            <div style={{marginTop: '10px'}}>
                                <Table headerBG='#50586C' cellBG='#DCE2F0' height={'270px'} width={'1050px'} rows={rows} columns={columns}/>
                            </div>
                        </Box>
                        <Box mt='30px' width='1050px' height='300px' backgroundColor={'#ffffff'}>
                            <BoxTitle> 과별 공정상황</BoxTitle>
                            <div style={{marginTop: '10px'}}>
                                <Table headerBG='#50586C' cellBG='#DCE2F0' height={'270px'} width={'1050px'} rows={rows} columns={columns}/>
                            </div>
                        </Box>
                    </div>
                </Row>
            </div>
        </Box>
    );
}

const Container = styled('div')`
  margin-bottom: 40px;
  width: 2155px;
  height: ${props => props.height};
  border: 1px solid black;
`;

const RowContainer = styled('div')`
  float: right;
  margin: 20px;
  width: 1000px;
  height: ${props => props.height};
  border: 1px solid black;
`;

const InfoContainer = styled('div')`
  position: absolute;
  width: 900px;
  margin-top: 20px;
  & > div {
    margin-left: 50px;
  }
`;

const BoxTitle = styled('div')`
  position: absolute;
  margin: -15px 0 0 20px;
  font-size: 20px;
  background-color: #fff;
  z-index: 2;
`;

const Row = styled('div')`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  & > div {
    & > label {
      font-size: 14pt;
    }
  }
`;

export default Performance;