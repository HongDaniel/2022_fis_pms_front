import React from 'react';
import InputContainer from "./InputContainer";
import CustomInput from "../Atom/CustomInput";
import Box from "../Atom/Box";
import {styled} from "@mui/system";

function Gitems(props) {
    return (
        <Box mt='0' width='1030px' height='810px' backgroundColor={'#ecf0f1'}>
            <InfoContainer>
                <Row columns={"1fr 1fr 1fr"}>
                    <InputContainer className={'page'} id={"첫 페이지"} width={"100px"} type={"text"}/>
                    <InputContainer className={'page'} id={"끝 페이지"} width={"100px"} labelWidth={'100px'} type={"text"}/>
                    <InputContainer className={'page'} id={"쪽수"} width={"100px"} labelWidth={'55px'} type={"text"}/>
                </Row>
                <Row columns={"1fr"}>
                    <InputContainer  id={"등록구분"} width={"600px"} type={"number"}/>
                </Row>
                <Row columns={"1fr 1fr"}>
                    <InputContainer  id={"시행일자"} width={"200px"} type={"number"}/>
                    <InputContainer  id={"생산(접수)일자"} width={"175px"} type={"number"}/>
                </Row>
                <Row columns={"1fr"}>
                    <InputContainer  id={"생산기관명"} width={"600px"} type={"text"}/>
                </Row>
                <Row columns={"1fr 1fr"}>
                    <InputContainer  id={"문서 번호"} width={"200px"} type={"select"} label='항목 검색' contents={["7일", "30일", "1년"]}/>
                    <InputContainer  id={"보존 기간"} width={"210px"} type={"select"} label='항목 검색' labelWidth={'90px'} contents={["7일", "30일", "1년"]}/>
                </Row>
                <Row columns={"1fr"}>
                    <InputContainer  id={"건 제목"} width={"600px"} type={"select"} label='항목 검색' contents={["원본과 보존매체를 함께 보존", "원본만 보존", "보존매체만 보존"]}/>
                </Row>
                <Row columns={"1fr 1fr"}>
                    <InputContainer  id={"기안자"} width={"200px"} type={"select"} label='항목 검색' contents={["자료관", "문서보관실"]}/>
                    <InputContainer  id={"결재권자"} width={"210px"} type={"select"} label='항목 검색' labelWidth={'90px'} contents={["자료관", "문서보관실"]}/>
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


const PublicContainer = styled('div')`
  position: absolute;
  border: 1px solid black;
  width: 900px;
  margin-top: 40px;
  & > div {
    margin: 10px 0 10px 20px;
  }
`;

export default Gitems;