import React, {useEffect, useState} from 'react';
import InputContainer from "./InputContainer";
import AutoInfoToggle from "./AutoInfoToggle";
import Box from "../Atom/Box";
import {styled} from "@mui/system";
import Title from "../Atom/Title";
import CustomInput from "../Atom/CustomInput";
import ManageContainer from "./ManageContainer";
import CustomButton from "../Atom/CustomButton";
import Table from "../Atom/Table";
import {rows} from "../Page/DocumentExportPage";
import {Style} from "../Style";
import axios from "axios";
import LableTable from "../Atom/LableTable";

const columns = [
    {
        field: 'name',
        headerName: '공정',
        sortable: true,
        width: 150,
    },
    {
        field: 'plan',
        headerName: '계획',
        sortable: true,
        width: 150,
    },
    {
        field: 'worked',
        headerName: '실적',
        sortable: true,
        width: 150,
    },
    {
        field: 'progress',
        headerName: '진행율',
        sortable: true,
        width: 150,
        valueGetter: (params) => {
            const p = params.row.plan;
            const pw = params.row.worked;
            const res = 100*(pw/p) + '%'
            return res;
        },
    },
    {
        field: 'plan_w',
        headerName: '투입인원',
        sortable: true,
        width: 150,
        flex: 1,
    },
];

function Performance(props) {
    const [pRows, setPRows] = useState([]);
    const onPerformance = () => {
        axios.get("http://3.38.19.119:8080/total/info")
            .then((res) => {
                setPRows(res.data)
            });
    }
    useEffect(() => {
        onPerformance();
    }, [])

    return (
        <Box mt='0' width='2200px' height='1140px' backgroundColor={'#ffffff'}>
            <div style={{position: "absolute", margin: '20px'}}>
                <Box mt='10px' width='2120px' height='400px' backgroundColor={Style.color3}>
                    {/*<Title> 계획 입력 </Title>*/}
                    <Row columns={"1fr 1fr 1fr 1fr"}>
                        <ManageContainer name={"사전조사"}/>
                        <ManageContainer name={"문서반출"}/>
                        <ManageContainer name={"스캔작업"}/>
                        <ManageContainer name={"이미지보정"}/>
                    </Row>
                    <Row columns={"1fr 1fr 1fr 1fr"}>
                        <ManageContainer name={"색인입력"}/>
                        <ManageContainer name={"색인검수"}/>
                        <ManageContainer name={"업로드"}/>
                        <ManageContainer name={"업로드완료"}/>
                        {/*<ManageContainer name={"반입반출"}/>*/}
                        {/*<ManageContainer name={"스캔도면"}/>*/}
                    </Row>
                    {/*<Row columns={"1fr 1fr 1fr 1fr"}>*/}
                    {/*    <ManageContainer name={"재 편 철"}/>*/}
                    {/*    <ManageContainer name={"분 류"}/>*/}
                    {/*    <ManageContainer name={"이미지보정"}/>*/}
                    {/*    <ManageContainer name={"보존상자편성"}/>*/}
                    {/*</Row>*/}
                    {/*<Row columns={"1fr 1fr 1fr 1fr"}>*/}
                    {/*    <ManageContainer name={"분류검증"}/>*/}
                    {/*    <ManageContainer name={"이미지검수"}/>*/}
                    {/*    <ManageContainer name={"서가배치"}/>*/}
                    {/*    <ManageContainer name={"면 표 시"}/>*/}
                    {/*</Row>*/}
                    <Row columns={"1fr"}>
                        {/*<ManageContainer name={"색인입력"}/>*/}
                        {/*<ManageContainer name={"기타작업"}/>*/}
                        <span />
                        <CustomButton type={"normal"} name={"저장"} width={"108px"} height={"45px"} fontSize={"22px"} margin={"30px 0 0 0"}
                                      backgroundColor={'#50586C'} borderRadius={"25px"} content={"저장"}/>
                    </Row>
                </Box>
                <Row columns={"1fr 1fr"}>
                    <Box mt='30px' width='1050px' height='630px' backgroundColor={Style.color3}>
                        <BoxTitle> 계획 대비 실적(누적) </BoxTitle>
                        <div style={{marginTop: '10px'}}>
                            <LableTable checkboxSelection={false} id={'name'} headerBG='#50586C' cellBG='#DCE2F0' height={'600px'} width={'1050px'} rows={pRows} columns={columns}/>
                        </div>
                    </Box>
                    <div>
                        <Box mt='30px' width='1050px' height='300px' backgroundColor={Style.color3}>
                            <BoxTitle> 등록된 과 리스트 </BoxTitle>
                            <div style={{marginTop: '10px'}}>
                                <Table headerBG='#50586C' cellBG='#DCE2F0' height={'270px'} width={'1050px'} rows={rows} columns={columns}/>
                            </div>
                        </Box>
                        <Box mt='30px' width='1050px' height='300px' backgroundColor={Style.color3}>
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
  justify-items: center;
  & > div {
    & > label {
      font-size: 14pt;
    }
  }
`;

export default Performance;