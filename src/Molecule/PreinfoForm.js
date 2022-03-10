import React from 'react';
import InputContainer from "./InputContainer";
import CustomButton from "../Atom/CustomButton";
import {Style} from "../Style";
import styled from "styled-components";
import CustomInput from "../Atom/CustomInput";

const PreinfoForm = (props) => {
    const category = {
        'YEAR1':'1년',
        'YEAR3':'3년',
        'YEAR5':'5년',
        'YEAR10':'10년',
        'YEAR20':'20년',
        'SEMI': '30년',
        'PERMANENT':'영구',
        'YES':'구축',
        'NO':'비구축',
        'ARCHIVIST':'기록관',
        'PROFESSION':'전문관리기관',
        'GENERAL':'일반문서',
        'DRAWING':'도면류',
        'PHOTO':'사진-필름류',
        'VIDEO':'녹음-동영상류',
        'CARD':'카드류'
    }
    //select 요소들
    let f_db = category[props.selectedRow.f_db]||props.selectedRow.f_db;
    let f_scan = category[props.selectedRow.f_scan]||props.selectedRow.f_scan;
    let f_kperiod = category[props.selectedRow.f_kperiod]||props.selectedRow.f_kperiod;
    let f_type = category[props.selectedRow.f_type]||props.selectedRow.f_type;
    let f_kplace = category[props.selectedRow.f_kplace]||props.selectedRow.f_kplace;
    // 영어 => 한글로 변환

    //
    return (
        <Modal>
            <div className={"bg"}></div>
            <div id={"modal"}>
                <div className={"info"}>
                    <h3>필수 입력 정보</h3>
                    <InputContainer id={"레이블"} width={"320px"} type={"number"} maxLength={6} defaultValue={props.selectedRow.f_labelcode} handleChange={props.handleChange}/>
                    <InputContainer id={"생산기관명"} width={"320px"} type={"text"} defaultValue={props.selectedRow.o_name} handleChange={props.handleChange}/>
                    <InputContainer id={"기관코드"} width={"320px"} type={"number"}  defaultValue={props.selectedRow.o_code} handleChange={props.handleChange}/>
                    <InputContainer id={"철제목"} name={"f_name"}width={"320px"} type={"text"} defaultValue={props.selectedRow.f_name} handleChange={props.handleChange}/>
                    <InputContainer id={"생산년도"} width={"320px"} type={"number"} maxLength={4} defaultValue={props.selectedRow.f_pyear} handleChange={props.handleChange}/>
                    <InputContainer id={"보존기간"} width={"150px"} type={"select"}
                                    contents={["1년","3년","5년","10년","20년", "30년", "영구"]} defaultValue={f_kperiod} handleChange={props.handleChange}/>
                    <InputContainer id={"구축여부"} width={"150px"} type={"select"}
                                    contents={["구축", "비구축"]} handleChange={props.handleChange} defaultValue={f_db}/>
                    <InputContainer id={"스캔여부"} width={"150px"} type={"select"}
                                    contents={["구축", "비구축"]} handleChange={props.handleChange} defaultValue={f_scan}/>
                    <InputContainer id={"박스번호"} width={"150px"} type={"number"} maxLength={3} defaultValue={props.selectedRow.b_num} handleChange={props.handleChange}/>
                </div>

                <div className={"info"}>
                    <h3>부가 입력 정보</h3>
                    <InputContainer id={"서가"} width={"100px"} type={"text"} defaultValue={props.selectedRow.f_location.suga} handleChange={props.handleChange}/>
                    <InputContainer id={"층"} width={"100px"} type={"text"} defaultValue={props.selectedRow.f_location.chung} handleChange={props.handleChange}/>
                    <InputContainer id={"열"} width={"100px"} type={"text"} defaultValue={props.selectedRow.f_location.yall} handleChange={props.handleChange}/>
                    <InputContainer id={"번"} width={"100px"} type={"text"} defaultValue={props.selectedRow.f_location.bun} handleChange={props.handleChange}/>
                    <InputContainer id={"보존장소"} width={"200px"} type={"select"}
                                    contents={["기록관", "전문관리기관"]} handleChange={props.handleChange} defaultValue={f_kplace}/>
                    <InputContainer id={"문서유형"} width={"200px"} type={"select"}
                                    contents={["일반문서", "도면류","사진-필름류","녹음-동영상류","카드류"]} handleChange={props.handleChange} defaultValue={f_type}/>
                    <InputContainer id={"분류번호"} width={"200px"} type={"number"} defaultValue={props.selectedRow.f_typenum} handleChange={props.handleChange}/>
                </div>

                <div className={"btnContainer"}>
                    {props.formState==='저장'?
                        <CustomButton type={"normal"} width={"180px"} height={"55px"} fontSize={"22px"}
                                      borderRadius={"25px"} content={"저장"} onClick={props.handleSave} backgroundColor={Style.color2}
                    />:
                        <CustomButton type={"normal"} width={"180px"} height={"55px"} fontSize={"22px"}
                                     borderRadius={"25px"} content={"수정"} onClick={props.handleModify} backgroundColor={Style.color2}
                        />}

                    <CustomButton type={"normal"} width={"180px"} height={"55px"} fontSize={"22px"}
                                  borderRadius={"25px"} content={"취소"} onClick={props.handleCancel} backgroundColor={Style.color2}/>
                </div>
            </div>
        </Modal>
    );
};


//style
const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  & .bg { //배경색깔
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  & #modal {
    position: absolute;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    width: 990px;
    height: 920px;
    padding: 15px;
    box-shadow: 2px 2px 3px grey;
    border-radius: 15px;

    & .info {
      margin-left: 10px;
      margin-right: 50px;

      & > div { //각 항목 
        margin-bottom: 30px;
      }
    }
    
    & .btnContainer { //저장, 취소버튼
      position: absolute;
      bottom: 50px;
      left: 250px;

      & > button {
        margin-top: 20px;
        margin-right: 150px;
      }
    }

  }`;

export default PreinfoForm;