import React, {useState} from 'react';
import Box from "../Atom/Box";
import Title from "../Atom/Title";
import Table from "../Atom/Table";
import {styled} from "@mui/system";
import InputContainer from "./InputContainer";
import CustomButton from "../Atom/CustomButton";
import CustomInput from "../Atom/CustomInput";
import {Style} from "../Style";
import axios from "axios";
import LableTable from "../Atom/LableTable";


const columns = [
    {
        field: 'name',
        headerName: '이름',
        sortable: true,
        width: 80,
    },
    {
        field: 'PREINFO',
        headerName: '사전조사',
        sortable: true,
        width: 110,
        valueGetter: (params) => {
            const info = params.row.work.PREINFO.count;
            return info;
        },
    },
    {
        field: 'EXPORT',
        headerName: '문서반출',
        sortable: true,
        width: 110,
        valueGetter: (params) => {
            const info = params.row.work.EXPORT.count;
            return info;
        },
    },
    {
        field: 'IMGMODIFY',
        headerName: '이미지 보정',
        sortable: true,
        width: 430,
        valueGetter: (params) => {
            const info = params.row.work.IMGMODIFY.count;
            return info;
        },
    },
    {
        field: 'INPUT',
        headerName: '색인',
        sortable: true,
        width: 80,
        valueGetter: (params) => {
            const info = params.row.work.INPUT.count;
            return info;
        },
    },
    {
        field: 'CHECK',
        headerName: '검수',
        sortable: true,
        width: 80,
        valueGetter: (params) => {
            const info = params.row.work.CHECK.count;
            return info;
        },
    },
    {
        field: 'UPLOAD',
        headerName: '업로드',
        sortable: true,
        width: 80,
        valueGetter: (params) => {
            const info = params.row.work.UPLOAD.count;
            return info;
        },
        flex: 1,
    },
];

function DailyWork(props) {
    const [rows, setRows] = useState([]);

    const onData = () => {
        axios.get(`http://localhost:8080/workList/worker?date=2022-04-01`, {withCredentials: true})
            .then((res) => {
                setRows(res.data.data);
            })
    }

    const Worker = ({name}) => {
        return (
            <Row style={{margin: '0px'}} columns={'1fr 1fr 3fr'}>
                <span style={{fontSize: '15pt', margin: '10px', display: "block"}}>{name}</span>
                <CustomInput width={'60px'} type={'number'}/>
                <span style={{fontSize: '15pt', margin: '10px', display: "block"}}>시간</span>
            </Row>
        )
    }

    return (
        <Box mt='0' width='2200px' height='1100px' backgroundColor={'#ffffff'}>
            <div style={{position: 'absolute', margin: '30px'}}>
                <div>
                    <Title>일일 작업 조회</Title>
                    <Box mt='10px' width='2120px' height='230px' backgroundColor={Style.color3}>
                        <div style={{position: 'absolute', margin: '40px'}}>
                            <Row columns={'3fr 1fr'}>
                                <input id={"날짜 선택"} width={"200px"} type={"date"}/>
                                <CustomButton onClick={onData} type={"normal"} name={"조회"} width={"80px"} height={"35px"} fontSize={"15px"} margin={"0px 0 0 30px"}
                                              backgroundColor={'#50586C'} borderRadius={"25px"} content={"조회"}/>
                                {/*<InputContainer fontSize='15pt' id={"작업자 선택"} width={"200px"} type={"text"}/>*/}
                                {/*<InputContainer fontSize='15pt' id={"출근"} width={"200px"} type={"text"}/>*/}
                            </Row>
                            {/*<Row columns={'1fr 1fr 1fr 1fr 1fr 1fr 1fr'}>*/}
                            {/*    <Worker name={'지각'} />*/}
                            {/*    <Worker name={'조퇴'} />*/}
                            {/*    <Worker name={'외출'} />*/}
                            {/*    <Worker name={'야근'} />*/}
                            {/*    <InputContainer fontSize='15pt' id={"공정선택"} width={"100px"} type={"text"}/>*/}
                            {/*    <InputContainer fontSize='15pt' id={"작업량"} width={"100px"} type={"text"}/>*/}
                            {/*    <InputContainer fontSize='15pt' id={"기타작업내용"} width={"100px"} type={"text"}/>*/}
                            {/*</Row>*/}
                            {/*<div style={{right: '10px', position: 'absolute'}}>*/}
                            {/*    <CustomButton type='normal' color='#ffffff' backgroundColor='#50586C' content='엑셀로 저장'/>*/}
                            {/*</div>*/}
                        </div>
                    </Box>
                </div>
                <div>
                    <Title>등록 내역</Title>
                    <Box mt='50px' width='2120px' height='720px' backgroundColor={Style.color3}>
                        <div style={{margin: '20px', top: '50px', position: 'absolute'}}>
                            <LableTable id={'id'} width='2080px' height='45vh' headerBG='#50586C' cellBG='#DCE2F0' rows={rows} columns={columns} />
                        </div>
                    </Box>
                </div>
            </div>
        </Box>
    );
}

const Row = styled('div')`
  display: grid;
  margin-bottom: 50px;
  grid-template-columns: ${(props) => props.columns};
  & > div {
    & > label {
      font-size: 14pt;
    }
  }
`;

export default DailyWork;