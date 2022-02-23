import React from 'react';
import Box from "../Atom/Box";
import Title from "../Atom/Title";
import Table from "../Atom/Table";
import {columns, rows} from "../Page/DocumentExportPage";
import {styled} from "@mui/system";
import InputContainer from "./InputContainer";
import CustomButton from "../Atom/CustomButton";
import CustomInput from "../Atom/CustomInput";
import {Style} from "../Style";

function DailyWork(props) {
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
        <Box mt='0' width='2200px' height='1140px' backgroundColor={'#ffffff'}>
            <div style={{position: 'absolute', margin: '30px'}}>
                <Box mt='10px' width='2120px' height='300px' backgroundColor={Style.color3}>
                    <Title>일일 작업 조회</Title>
                    <div style={{position: 'absolute', margin: '40px'}}>
                        <Row columns={'1fr 1fr 2fr 2fr'}>
                            <InputContainer fontSize='15pt' id={"날짜 선택"} width={"200px"} type={"text"}/>
                            <CustomButton type={"normal"} name={"저장"} width={"80px"} height={"35px"} fontSize={"15px"} margin={"0 0 0 10px"}
                                          backgroundColor={'#50586C'} borderRadius={"25px"} content={"저장"}/>
                            <InputContainer fontSize='15pt' id={"작업자 선택"} width={"200px"} type={"text"}/>
                            <InputContainer fontSize='15pt' id={"출근"} width={"200px"} type={"text"}/>
                        </Row>
                        <Row columns={'1fr 1fr 1fr 1fr 1fr 1fr 1fr'}>
                            <Worker name={'지각'} />
                            <Worker name={'조퇴'} />
                            <Worker name={'외출'} />
                            <Worker name={'야근'} />
                            <InputContainer fontSize='15pt' id={"공정선택"} width={"100px"} type={"text"}/>
                            <InputContainer fontSize='15pt' id={"작업량"} width={"100px"} type={"text"}/>
                            <InputContainer fontSize='15pt' id={"기타작업내용"} width={"100px"} type={"text"}/>
                        </Row>
                        <div style={{right: '10px', position: 'absolute'}}>
                            <CustomButton type='normal' color='#ffffff' backgroundColor='#50586C' content='엑셀로 저장'/>
                        </div>
                    </div>
                </Box>
                <Box mt='50px' width='2120px' height='720px' backgroundColor={Style.color3}>
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
  margin-bottom: 50px;
  grid-template-columns: ${(props) => props.columns};
  & > div {
    & > label {
      font-size: 14pt;
    }
  }
`;

export default DailyWork;