import React, {useEffect, useState} from 'react';
import Table from "../Atom/Table";
import Box from "../Atom/Box";
import styled from "styled-components";
import Navigation from "../Organism/Navigation";
import Title from "../Atom/Title";
import Container from "../Atom/Container";
import MainBox from "../Atom/MainBox";
import InputContainer from "../Molecule/InputContainer";
import CustomButton from "../Atom/CustomButton";
import {Style} from "../Style";
import axios from "axios";
import NetworkConfig from "../configures/NetworkConfig";

const columns = [
    {
        field: 'f_id',
        headerName: 'No.',
        type: 'number',
        width: 70
    },
    {
        field: 'f_labelcode',
        headerName: '레이블',
        width: 90,
        editable: true,
    },
    {
        field: 'o_name',
        headerName: '생산기관명',
        width: 230,
        editable: true,
    },
    {
        field: 'o_code',
        headerName: '기관코드',
        width: 110,
        editable: true,
    },
    {
        field: 'f_name',
        headerName: '철제목',
        description: 'This column has a value getter and is not sortable.',
        width: 280,
        flex: 1
    },
    {
        field: 'f_pyear',
        headerName: '생산년도',
        width: 90,
        editable: true,
    },
    {
        field: 'f_kperiod',
        headerName: '보존기간',
        width: 130,
        editable: true,
    },
    {
        field: 'f_db',
        headerName: '구축여부',
        width: 90,
        editable: true,
    },
    {
        field: 'f_scan',
        headerName: '스캔여부',
        width: 90,
        editable: true,
    },
    {
        field: 'b_num',
        headerName: '박스번호',
        width: 90,
        editable: true,
    },
    {
        field: 'f_location',
        headerName: '위치',
        width: 110,
        editable: true,
    },
    {
        field: 'f_kplace',
        headerName: '보존장소',
        type: 'number',
        width: 140,
        editable: true,
    },
    {
        field: 'f_type',
        headerName: '문서유형',
        type: 'number',
        width: 120,
        editable: true,
    },
    {
        field: 'f_typenum',
        headerName: '분류번호',
        type: 'number',
        width: 90,
        editable: true,
    },
];

const PreInspectPage = () => {
    const [modal, setModal] = useState(false);
    const [searchInfo, setSearchInfo] = useState({f_name: "", f_pyear: "", f_labelcode: "", o_code: ""}); //검색하는 정보
    const [searchResult, setSearchResult] = useState(()=>JSON.parse(localStorage.getItem("searchResult"))||[]); //검색한 정보
    const [saveInfo,setSaveInfo] = useState({f_id:null,f_labelcode:"",o_name:"",o_code:"",f_name:"",f_pyear:"",f_kperiod:"",f_db:"",f_scan:"", b_num:"", f_location:"",f_kplace:"",f_type:"",f_typenum:"",})
    const [selected,setSelected] = useState([]);
    const modalOpen = () => { setModal(true); } // 모달창 열기
    const modalClose = () => { setModal(false); } // 모달창 닫기

    const handleSearch = async () => { //검색
        await axios.get(`http://${NetworkConfig.networkAddress}:8080/preinfo/file`, searchInfo, {withCredentials: true})
            .then((res) => {
                console.log(res.data);
                const data = (res.data).filter((el)=>{
                    if(el.f_name.includes(searchInfo.f_name)&&el.f_pyear.includes(searchInfo.f_pyear)&&el.f_labelcode.includes(searchInfo.f_labelcode)&&el.o_code.includes(searchInfo.o_code)) {
                        return el
                    }
                })
                setSearchResult(data);
            })
    }

    useEffect(()=>{
        localStorage.setItem("searchResult",JSON.stringify(searchResult));
    },[searchResult]);

    const handleSearchInfo = (e) => { //검색내용 트랙킹
        const label = e.target.id;
        const content = e.target.value;
        switch (label) {
            case("철제목"):
                setSearchInfo({...searchInfo,f_name: content})
                break;
            case("레이블"):
                setSearchInfo({...searchInfo,f_labelcode: content})
                break;
            case("생산년도"):
                setSearchInfo({...searchInfo,f_pyear: String(content)})
                break;
            case("기관코드"):
                setSearchInfo({...searchInfo,o_code: String(content)})
                break;
        }
    };

    const onKeyPress = (e) =>{ //엔터를 눌렸을 때 검색기능
        if(e.key==='Enter'){
            handleSearch();
        }
    }

    useEffect(() => {
        // console.log(saveInfo);
    }, [saveInfo]);

    const handleChange = (e) => { //모달창의 입력정보
        const label = e.target.id||e.target.name;
        const value = e.target.value;
        switch (label) {
            case('레이블'):
                setSaveInfo({...saveInfo,f_labelcode:value});
                break;
            case('생산기관명'):
                setSaveInfo({...saveInfo,o_name:value});
                break;
            case('기관코드'):
                setSaveInfo({...saveInfo,o_code:value});
                break;
            case ('철제목'):
                setSaveInfo({...saveInfo,f_name:value});
                break;
            case('생산년도'):
                setSaveInfo({...saveInfo,f_pyear:value});
                break;
            case('보존기간'):
                setSaveInfo({...saveInfo,f_kperiod:value});
                break;
            case('구축여부'):
                setSaveInfo({...saveInfo,f_db:value});
                break;
            case('스캔여부'):
                setSaveInfo({...saveInfo,f_scan:value});
                break;
            case('박스번호'):
                setSaveInfo({...saveInfo,b_num:value});
                break;
            case('위치'):
                setSaveInfo({...saveInfo,f_location:value});
                break;
            case('보존장소'):
                setSaveInfo({...saveInfo,f_kplace:value});
                break;
            case('문서유형'):
                setSaveInfo({...saveInfo,f_type:value});
                break;
            case('분류번호'):
                setSaveInfo({...saveInfo,f_typenum:value});
                break;
        }
    }
    const handleUpload = async (e) =>{ //목록 불러오기
        let formData = new FormData();
        formData.append("excelfile",e.target.files[0]);
        // FormData의 value 확인
        for (let key of formData.keys()) {
            console.log(key);
        }
        for (let value of formData.values()) {
            console.log(value);
        }
        e.target.value='';
        await axios.post(`http://${NetworkConfig.networkAddress}:8080/preinfo/excel`, formData, {withCredentials: true})
            .then((res) => {
                console.log(res.data);
            }).catch((err)=>{
                console.log(err);
            });
    }
    const handleSave = async () => { //철 정보 추가
        const data = {
            "b_num": "123",
            "f_db": "YES",
            "f_id": 2,
            "f_kperiod": "YEAR1",
            "f_kplace": "ARCHIVIST",
            "f_labelcode": "string",
            "f_location": "string",
            "f_name": "string",
            "f_pyear": "1234",
            "f_scan": "YES",
            "f_type": "GENERAL",
            "f_typenum": "string",
            "o_code": "string",
            "o_name": "string"
        }

        await axios.post(`http://${NetworkConfig.networkAddress}:8080/preinfo/file`, data, {withCredentials: true})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const handleModify = async () => {
        if(selected.length==1){
            modalOpen();
        }
        console.log("clicked");
    };

    const handleDelete=async ()=>{ //철삭제
        const fid = selected[0];
        await axios.delete(`http://${NetworkConfig.networkAddress}:8080/preinfo/file/${fid}`)
            .then((res)=>{
                console.log(res);
                setSearchResult(searchResult.filter((el) => {
                    if (el.f_id !== fid) {
                        return el;
                    }
                }));
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    // useEffect(() => { //항목이 선택될 때 업데이트
    //     console.log(selected)
    // }, [selected]);

    return (
        <Container>
            <Navigation/>
            <MainBox height={"1140px"}>
                <Title> 입력 및 검색 </Title>
                <BoxContainer>
                    {/*입력정보*/}
                    <Box width='2000px' height='340px' backgroundColor={Style.color3}>
                        <InfoContainer>
                            <h3>필수 입력 정보</h3>
                            <Row columns={"3fr 2fr"}>
                                <InputContainer id={"철제목"} width={"350px"} type={"text"} handleChange={handleSearchInfo} onKeyPress={onKeyPress}/>
                                <InputContainer id={"생산년도"} width={"300px"} type={"number"} handleChange={handleSearchInfo} onKeyPress={onKeyPress}/>
                            </Row>
                            <Row columns={"3fr 2fr"}>
                                <InputContainer id={"레이블"} width={"350px"} type={"text"} handleChange={handleSearchInfo} onKeyPress={onKeyPress}/>
                                <InputContainer id={"기관코드"} width={"300px"} type={"number"} handleChange={handleSearchInfo} onKeyPress={onKeyPress}/>
                            </Row>
                        </InfoContainer>

                        <BtnContainer>
                            <CustomButton type={"normal"} name={"검색"} width={"210px"} height={"55px"} fontSize={"22px"}
                                          borderRadius={"25px"} content={"검색"} backgroundColor={Style.color2}
                                          onClick={handleSearch}/>
                        </BtnContainer>
                    </Box>
                    {/*조회 데이터*/}
                    <Box width='2000px' height='670px' backgroundColor={Style.color3}>
                        <Table rows={searchResult} columns={columns} selectionModel={selected} setSelectionModel={setSelected} headerBG={Style.color2} cellBG={Style.color1} width={"88%"} height={"85%"}/>

                        <BtnContainer3>
                            <CustomButton type={"normal"} name={"저장"} width={"120px"} height={"50px"} fontSize={"22px"}
                                          borderRadius={"10px"} content={"철추가"} onClick={modalOpen}
                                          backgroundColor={Style.color2}/>
                            <CustomButton type={"normal"} name={"수정"} width={"120px"} height={"50px"} fontSize={"22px"}
                                          borderRadius={"10px"} content={"철수정"} onClick={handleModify}
                                          backgroundColor={Style.color2}/>
                            <CustomButton type={"normal"} name={"삭제"}width={"120px"} height={"50px"} fontSize={"22px"}
                                          borderRadius={"10px"} content={"철삭제"} onClick={handleDelete}
                                          backgroundColor={Style.color2}/>
                        </BtnContainer3>
                        <BtnContainer2>
                            <label htmlFor={"uploadExcel"} className="uploadExcel">목록 불러오기</label>
                            <input type="file"
                                   id="uploadExcel"
                                   accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                   onChange={handleUpload}
                                   style={{display:"none"}}
                            />
                            <CustomButton type={"normal"} name={"검색"} width={"180px"} height={"55px"} fontSize={"22px"}
                                          borderRadius={"25px"} content={"엑셀로 저장"} backgroundColor={Style.color2}/>
                        </BtnContainer2>
                    </Box>
                </BoxContainer>
            </MainBox>
            {/*폴더생성 모달창*/}
            {modal ?
                <Modal>
                    <div className={"bg"}></div>
                    <div id={"modal"}>
                        <div className={"info"}>
                            <h3>필수 입력 정보</h3>
                            <InputContainer id={"레이블"} width={"320px"} type={"number"} handleChange={handleChange}/>
                            <InputContainer id={"생산기관명"} width={"320px"} type={"text"} handleChange={handleChange}/>
                            <InputContainer id={"기관코드"} width={"320px"} type={"number"} handleChange={handleChange}/>
                            <InputContainer id={"철제목"} name={"f_name"}width={"320px"} type={"text"} handleChange={handleChange}/>
                            <InputContainer id={"생산년도"} width={"320px"} type={"number"} maxLength={4} handleChange={handleChange}/>
                            <InputContainer id={"보존기간"} width={"150px"} type={"select"}
                                            contents={["선택", "1년", "30년", "영구"]} handleChange={handleChange}/>
                            <InputContainer id={"구축여부"} width={"150px"} type={"select"}
                                            contents={["선택", "구축", "비구축"]} handleChange={handleChange}/>
                            <InputContainer id={"스캔여부"} width={"150px"} type={"select"}
                                            contents={["선택", "구축", "비구축"]} handleChange={handleChange}/>
                            <InputContainer id={"박스번호"} width={"150px"} type={"number"} maxLength={3} handleChange={handleChange}/>
                        </div>

                        <div className={"info"}>
                            <h3>부가 입력 정보</h3>
                            <InputContainer id={"위치"} width={"150px"} type={"text"} handleChange={handleChange}/>
                            <InputContainer id={"보존장소"} width={"150px"} type={"select"}
                                            contents={["선택", "기록관", "전문관리기관"]} handleChange={handleChange}/>
                            <InputContainer id={"문서유형"} width={"150px"} type={"select"}
                                            contents={["선택", "일반문서", "도면류"]} handleChange={handleChange}/>
                            <InputContainer id={"분류번호"} width={"150px"} type={"number"} handleChange={handleChange}/>
                        </div>

                        <div className={"btnContainer"}>
                            <CustomButton type={"normal"} width={"180px"} height={"55px"} fontSize={"22px"}
                                          borderRadius={"25px"} content={"저장"} backgroundColor={Style.color2}
                                          onClick={handleSave}/>
                            <CustomButton type={"normal"} width={"180px"} height={"55px"} fontSize={"22px"}
                                          borderRadius={"25px"} content={"취소"} backgroundColor={Style.color2}
                                          onClick={modalClose}/>
                        </div>
                    </div>
                </Modal>
                : null}
        </Container>
    );
};



// style
const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;

  & h3 { //필수 입력 정보
    margin-left: 50px;
    font-size: 23px;
  }

  & > div:nth-child(1) { // 입력정보 box
    margin-bottom: 30px;
    box-sizing: border-box
  }

  & > div:nth-child(2) { // 조회 데이터 box
    display: flex;
    flex-direction: column;
    justify-content: center;
    //align-items: center;
    padding: 20px;
    box-sizing: border-box;
  }
`;

const InfoContainer = styled.div`
  & > div {
    margin-left: 80px;
    padding: 0 100px;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};

  & > div {
    margin-bottom: 30px;
  }
`;

const BtnContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 25px;

  & > button {
    margin-right: 10px;
  }
`;

const BtnContainer2 = styled.div`
  position: absolute;
  right: 2%;
  display: flex;
  flex-direction: column;

  & > button {
    margin: 10px 0;
  }
  & > label {
    margin: 10px 0;
  }

  & .uploadExcel {
    width: 180px;
    height: 55px;
    font-size: 22px;
    border-radius: 25px;
    background-color: ${Style.color2};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
  }
`;
const BtnContainer3 = styled.div`
position: absolute;
  right: 600px;
  bottom: 60px;
  &>button {
    margin-right: 15px;
  }
`;

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

  }


`;
export default PreInspectPage;
