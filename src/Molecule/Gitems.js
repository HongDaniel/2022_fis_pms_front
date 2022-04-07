import React, {useEffect, useState} from 'react';
import InputContainer from "./InputContainer";
import CustomInput from "../Atom/CustomInput";
import Box from "../Atom/Box";
import {styled} from "@mui/system";
import CustomButton from "../Atom/CustomButton";

function Gitems(props) {
    console.log(props.gInfo);
    const kperiod = (info) => {
        if (info === 'YEAR1') {
            return '1년';
        } else if (info === 'YEAR3') {
            return '3년';
        } else if (info === 'YEAR5') {
            return '5년';
        } else if (info === 'YEAR10') {
            return '10년';
        } else if (info === 'YEAR20') {
            return '20년';
        } else if (info === 'YEAR30') {
            return '30년';
        } else if (info === 'SEMI') {
            return '준영구';
        } else {
            return '영구';
        }
    }

    const openable = (info) => {
        if (info === undefined) {
            return '';
        }
        if (info[0] === '1') {
            return '공개';
        } else if (info[1] === '2') {
            return '부분공개';
        } else {
            return '비공개';
        }
    }

    const grade = (info) => {
        if (info === undefined) {
            return '';
        }
        for (let i = 1; i < 9; i++) {
            if (info[i] === 'Y') {
                return (i + "등급");
            }
        }
    }
    return (
        <Box mt='0' width='98%' height='810px' backgroundColor={'#ecf0f1'}>
            <InfoContainer>
                <Row columns={"1fr 1fr 1fr"}>
                    <InputContainer value={props.gInfo === undefined ? '' : props.gInfo.c_spage} handleChange={props.handleCaseChange} size={'small'} className={'page'} id={"첫 페이지"} width={"100px"} type={"text"}/>
                    <InputContainer value={props.gInfo === undefined ? '' : props.gInfo.c_epage} handleChange={props.handleCaseChange} size={'small'} className={'page'} id={"끝 페이지"} width={"100px"} labelWidth={'100px'} type={"text"}/>
                    <InputContainer value={props.gInfo === undefined ? '' : props.gInfo.c_page} handleChange={props.handleCaseChange} size={'small'} className={'page'} id={"쪽수"} width={"100px"} labelWidth={'55px'} type={"text"}/>
                </Row>
                <Row columns={"1fr"}>
                    <InputContainer value={props.gInfo === undefined ? '' : props.gInfo.c_class} handleChange={props.handleCaseChange} size={'small'} id={"등록구분"} width={"600px"} type={"text"}/>
                </Row>
                <Row columns={"1fr 1fr"}>
                    <InputContainer value={props.gInfo === undefined ? '' : props.gInfo.c_dodate} handleChange={props.handleCaseChange} size={'small'} id={"시행일자"} width={"200px"} type={"text"}/>
                    <InputContainer value={props.gInfo === undefined ? '' : props.gInfo.c_pdate} handleChange={props.handleCaseChange} size={'small'} id={"생산(접수)일자"} width={"175px"} type={"text"}/>
                </Row>
                <Row columns={"1fr"}>
                    <InputContainer value={props.gInfo === undefined ? '' : props.gInfo.c_departmentname} handleChange={props.handleCaseChange} size={'small'} id={"생산기관명"} width={"600px"} type={"text"}/>
                </Row>
                <Row columns={"1fr 1fr"}>
                    <InputContainer value={props.gInfo === undefined ? '' : props.gInfo.c_oldnum} handleChange={props.handleCaseChange} size={'small'} id={"문서 번호"} width={"200px"} type={"text"} label='항목 검색' />
                    <InputContainer defaultValue={kperiod(props.gInfo.c_kperiod)} handleChange={props.handleCaseChange} size={'small'} id={"보존 기간"} width={"210px"} type={"select"} label='항목 검색' labelWidth={'90px'} contents={["1년", "3년", "5년", "10년", "20년", "30년", "준영구", "영구"]}/>
                </Row>
                <Row columns={"1fr"}>
                    <InputContainer value={props.gInfo === undefined ? '' : props.gInfo.c_title} handleChange={props.handleCaseChange} size={'small'} id={"건 제목"} width={"600px"} type={"text"} label='항목 검색' />
                </Row>
                <Row columns={"1fr 1fr"}>
                    <InputContainer value={props.gInfo === undefined ? '' : props.gInfo.c_drafter} handleChange={props.handleCaseChange} size={'small'} id={"기안자"} width={"200px"} type={"text"} label='항목 검색' />
                    <InputContainer value={props.gInfo === undefined ? '' : props.gInfo.c_approver} handleChange={props.handleCaseChange} size={'small'} id={"결재권자"} width={"210px"} type={"text"} label='항목 검색' labelWidth={'90px'} />
                </Row>
                <Row columns={"1fr"}>
                    <InputContainer value={props.gInfo === undefined ? '' : props.gInfo.c_receiver} handleChange={props.handleCaseChange} size={'small'} id={"수(발)신자"} width={"600px"} type={"text"}/>
                </Row>
                <Row columns={"1fr"}>
                    <InputContainer defaultValue={props.gInfo === undefined ? '' : props.gInfo.c_edoc === 'ELEC' ? '전자기록물' : '비전자기록물'} handleChange={props.handleCaseChange} size={'small'} className={'record'} fontSize='13pt' id={"전자기록물 여부"} width={"600px"} type={"select"} contents={['전자기록물', '비전자기록물']}/>
                </Row>
                <Row columns={"1fr 4fr"}>
                    <span style={{fontSize: '14pt'}}>* 공개 여부</span>
                    <PublicContainer>
                        <CustomInput defaultValue={openable(props.gInfo.c_openable)} handleChange={props.handleCaseChange} type='select' name='공개 여부' width='500px' label='공개 여부' contents={["공개", "부분공개", "비공개"]} />
                        <div>
                            <CustomInput defaultValue={grade(props.gInfo.c_openable)} handleChange={props.handleCaseChange} type='select' name='등급' width='800px' label='등급' contents={["1등급", "2등급", "3등급", "4등급", "5등급", "6등급", "7등급", "8등급"]} />
                        </div>
                        <InputContainer value={props.gInfo === undefined ? '' : props.gInfo.c_hidden} handleChange={props.handleCaseChange} size={'small'} fontSize='12pt' id={"공개제한부분표시"} width={"400px"} type={"text"}/>
                    </PublicContainer>
                </Row>
            </InfoContainer>
            <div style={{position:"absolute", bottom: '27px', right: '25px'}}>
                <CustomButton onClick={async () => {
                    await props.handleGSave();
                    props.setCurrentTab(()=>1);
                    props.caseSearch();
                    props.setOpenImage(false);
                }} width='100px' height='40px' type='normal' margin='0 0 0 50px' color='#ffffff' backgroundColor='#50586C' content='저장'/>
                <CustomButton width='100px' height='40px' type='normal' margin='0 0 0 50px' color='#ffffff' backgroundColor='#50586C' content='삭제'/>
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


const PublicContainer = styled('div')`
  position: absolute;
  width: 900px;
  margin-top: 40px;
  & > div {
    margin: 10px 0 10px 20px;
  }
`;

export default Gitems;