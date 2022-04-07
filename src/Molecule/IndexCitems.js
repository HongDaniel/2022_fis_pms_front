import React from 'react';
import InputContainer from "./InputContainer";
import CustomButton from "../Atom/CustomButton";
import Box from "../Atom/Box";
import {styled} from "@mui/system";
import AutoInfoToggle from "./AutoInfoToggle";

function IndexCitems(props) {
    return (
        <Box mt='0' width='98%' height='810px' backgroundColor={'#ecf0f1'}>
            <InfoContainer>
                <Row columns={"1fr"}>
                    <InputContainer value={props.cInfo.f_name} handleChange={props.handleChange} id={"철 제목"} width={"600px"} type={"text"} labelColor='red'/>
                </Row>
                <Row columns={"1fr"}>
                    <InputContainer value={props.cInfo.f_volumeamount} handleChange={props.handleChange} id={"총 권호수"} width={"600px"} type={"text"}/>
                </Row>
                <Row columns={"1fr"}>
                    <InputContainer handleChange={props.handleChange} id={"분류 번호"} width={"600px"} type={"number"}/>
                </Row>
                <Row columns={"1fr"}>
                    <InputContainer handleChange={props.handleChange} id={"담당자"} width={"600px"} type={"text"}/>
                </Row>
                <Row columns={"1fr"}>
                    <InputContainer handleChange={props.handleChange} id={"보존 기간"} width={"600px"} type={"select"} label='항목 검색' contents={["1년", "3년", "5년", "10년", "20년", "30년", "준영구", "영구"]}/>
                </Row>
                <Row columns={"1fr"}>
                    <InputContainer handleChange={props.handleChange} id={"보존 방법"} width={"600px"} type={"select"} label='항목 검색' contents={["원본과 보존매체를 함께 보존", "원본만 보존", "보존매체만 보존"]}/>
                </Row>
                <Row columns={"1fr"}>
                    <InputContainer handleChange={props.handleChange} id={"보존 장소"} width={"600px"} type={"select"} label='항목 검색' contents={["기록관", "전문관리기관"]}/>
                </Row>
                <Row columns={"1fr"}>
                    <InputContainer handleChange={props.handleChange} id={"기록물 형태"} width={"600px"} type={"select"} label='기록물 형태' contents={["일반문서", "도면류", "사진-필름류", "녹음-동영상류", "카드류"]}/>
                </Row>
                <Row columns={"1fr"}>
                    {/*<CustomButton width='300px' height='40px' type='normal' margin='5px' color='#ffffff' backgroundColor='#50586C' content='자동 정보 확인 >>'/>*/}
                    <AutoInfoToggle />
                </Row>
            </InfoContainer>
            <div style={{position:"absolute", bottom: '27px', right: '25px'}}>
                <CustomButton onClick={() => {
                    props.handleSave();
                    props.setCurrentTab(()=>1);
                }} width='100px' height='40px' type='normal' margin='0 0 0 50px' color='#ffffff' backgroundColor='#50586C' content='저장'/>
                <CustomButton onClick={props.handleCDelete} width='100px' height='40px' type='normal' margin='0 0 0 50px' color='#ffffff' backgroundColor='#50586C' content='삭제'/>
            </div>
        </Box>
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

export default IndexCitems;