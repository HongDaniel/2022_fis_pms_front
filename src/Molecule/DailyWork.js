import React from 'react';
import Box from "../Atom/Box";
import Title from "../Atom/Title";
import Table from "../Atom/Table";
import {columns, rows} from "../Page/DocumentExportPage";
import {styled} from "@mui/system";
import InputContainer from "./InputContainer";
import CustomButton from "../Atom/CustomButton";

function DailyWork(props) {
    return (
        <Box mt='0' width='2200px' height='1140px' backgroundColor={'#ffffff'}>
            <div style={{position: 'absolute', margin: '30px'}}>
                <Box mt='10px' width='2120px' height='300px' backgroundColor={'#ffffff'}>
                    <Title>일일 작업 조회</Title>
                    <div style={{position: 'absolute', margin: '30px'}}>
                        <Row columns={'1fr 1fr 2fr 2fr'}>
                            <InputContainer fontSize='15pt' id={"날짜 선택"} width={"200px"} type={"text"}/>
                            <CustomButton type={"normal"} name={"저장"} width={"80px"} height={"35px"} fontSize={"15px"} margin={"0 0 0 10px"}
                                          backgroundColor={'#50586C'} borderRadius={"25px"} content={"저장"}/>
                            <InputContainer fontSize='15pt' id={"작업자 선택"} width={"200px"} type={"text"}/>
                            <InputContainer fontSize='15pt' id={"출근"} width={"200px"} type={"text"}/>
                        </Row>
                        <Row columns={'1fr 1fr 2fr 2fr'}>
                            <InputContainer fontSize='15pt' id={"날짜 선택"} width={"200px"} type={"text"}/>
                            <CustomButton type={"normal"} name={"저장"} width={"80px"} height={"35px"} fontSize={"15px"} margin={"0 0 0 10px"}
                                          backgroundColor={'#50586C'} borderRadius={"25px"} content={"저장"}/>
                            <InputContainer fontSize='15pt' id={"작업자 선택"} width={"200px"} type={"text"}/>
                            <InputContainer fontSize='15pt' id={"출근"} width={"200px"} type={"text"}/>
                        </Row>
                        <div style={{margin: '25px', right: '10px', position: 'absolute'}}>
                            <CustomButton type='normal' color='#ffffff' backgroundColor='#50586C' content='엑셀로 저장'/>
                        </div>
                    </div>
                </Box>
                <Box mt='50px' width='2120px' height='72git0px' backgroundColor={'#ffffff'}>
                    <Title>등록 내역</Title>
                    <div style={{margin: '20px', top: '50px', position: 'absolute'}}>
                        <Table width='2080px' height='330px' headerBG='#50586C' cellBG='#DCE2F0' rows={rows} columns={columns} />
                    </div>
                </Box>
            </div>
        </Box>
    );
}

const Row = styled('div')`
  display: grid;
  margin: 30px;
  grid-template-columns: ${(props) => props.columns};
  & > div {
    & > label {
      font-size: 14pt;
    }
  }
`;

export default DailyWork;