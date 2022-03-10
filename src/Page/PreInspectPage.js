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
import PreinfoForm from "../Molecule/PreinfoForm";

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
        width: 160,
        editable: true,
    },
    {
        field: 'o_code',
        headerName: '기관코드',
        width: 90,
        editable: true,
    },
    {
        field: 'f_name',
        headerName: '철제목',
        description: '철제목입니다.',
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
        valueGetter: (params) => {
            const info = params.row.f_kperiod;
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
    },
    {
        field: 'f_db',
        headerName: '구축여부',
        width: 90,
        editable: true,
        valueGetter: (params) => {
            const info = params.row.f_db;
            if (info === 'YES') {
                return '구축';
            } else {
                return '비구축';
            }
        }
    },
    {
        field: 'f_scan',
        headerName: '스캔여부',
        width: 90,
        editable: true,
        valueGetter: (params) => {
            const info = params.row.f_scan;
            if (info === 'YES') {
                return '구축';
            } else {
                return '비구축';
            }
        }
    },
    {
        field: 'b_num',
        headerName: '박스번호',
        width: 90,
        editable: true,
    },
    {
        field: 'suga',
        headerName: '서가',
        width: 60,
        editable: true,
        valueGetter: (params) => {
            const info = new Object(params.row.f_location);
            return info.suga;
        }
    },
    {
        field: 'chung',
        headerName: '층',
        width: 60,
        editable: true,
        valueGetter: (params) => {
            const info = new Object(params.row.f_location);
            return info.chung;
        }
    },
    {
        field: 'yall',
        headerName: '열',
        width: 60,
        editable: true,
        valueGetter: (params) => {
            const info = new Object(params.row.f_location);
            return info.yall;
        }
    },
    {
        field: 'bun',
        headerName: '번',
        width: 60,
        editable: true,
        valueGetter: (params) => {
            const info = new Object(params.row.f_location);
            return info.bun;
        }
    },
    {
        field: 'f_kplace',
        headerName: '보존장소',
        type: 'number',
        width: 140,
        editable: true,
        valueGetter: (params) => {
            const info = params.row.f_kplace;
            if (info === 'ARCHIVIST') {
                return '기록관';
            } else if (info === 'PROFESSION'){
                return '전문관리기관';
            }
        }
    },
    {
        field: 'f_type',
        headerName: '문서유형',
        type: 'number',
        width: 120,
        editable: true,
        valueGetter: (params) => {
            const info = params.row.f_type;
            if (info === 'GENERAL') {
                return '일반문서';
            } else if (info === 'DRAWING') {
                return '도면류';
            } else if (info === 'PHOTO') {
                return '사진-필름류';
            } else if (info === 'VIDEO') {
                return '녹음-동영상류';
            } else if (info === 'CARD') {
                return '카드류';
            }
        },
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
    const [saveInfo,setSaveInfo] = useState({f_id:null,f_labelcode:"",o_name:"",o_code:"",f_name:"",f_pyear:"",f_kperiod:"",f_db:"",f_scan:"", b_num:"", f_location:{chung:"",yall:"",bun:"",suga:""},f_kplace:"",f_type:"",f_typenum:"",})
    const [selected,setSelected] = useState([]);
    const [selectedRow,setSelectedRow] = useState({});
    const [formState,setFormState] = useState('');
    const modalOpen = () => { setModal(true); } // 모달창 열기
    const modalClose = () => { setModal(false); } // 모달창 닫기

    const handleSearch = async () => { //검색
        await axios.get(`http://${NetworkConfig.networkAddress}:8080/preinfo/file`, {params:searchInfo}, {withCredentials: true})
            .then((res) => {
                console.log(res.data);
                const data = res.data;
                setSearchResult(data);
            })
    }

    useEffect(()=>{
        localStorage.setItem("searchResult",JSON.stringify(searchResult));
    },[searchResult]);

    // useEffect(() => { // 검색결과 조회
    //     console.log(searchInfo);
    // }, [searchInfo]);

    useEffect(()=>{
        console.log(selectedRow);
    },[selectedRow])

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
        console.log("saveInfo");
        console.log(saveInfo);
    }, [saveInfo]);

    const handleChange = (e) => { //모달창의 입력정보
        const label = e.target.id || e.target.name;
        const value = e.target.value;
        switch (label) {
            case('레이블'):
                setSaveInfo({...saveInfo, f_labelcode: value});
                break;
            case('생산기관명'):
                setSaveInfo({...saveInfo, o_name: value});
                break;
            case('기관코드'):
                setSaveInfo({...saveInfo, o_code: value});
                break;
            case ('철제목'):
                setSaveInfo({...saveInfo, f_name: value});
                break;
            case('생산년도'):
                setSaveInfo({...saveInfo, f_pyear: value});
                break;
            case('보존기간'):
                let period;
                switch (value) {
                    case('1년'):
                        period = 'YEAR1'
                        break
                    case('3년'):
                        period = 'YEAR3'
                        break
                    case('5년'):
                        period = 'YEAR5'
                        break
                    case('10년'):
                        period = 'YEAR10'
                        break
                    case('20년'):
                        period = 'YEAR20'
                        break
                    case('30년'):
                        period = 'SEMI'
                        break
                    case('영구'):
                        period = 'PERMANENT'
                        break
                }
                setSaveInfo({...saveInfo, f_kperiod: period});
                break;
            case('구축여부'):
                let construct;
                switch (value) {
                    case ('구축'):
                        construct = 'YES'
                        break
                    case ('비구축'):
                        construct = 'NO'
                        break
                }
                setSaveInfo({...saveInfo, f_db: construct});
                break;
            case('스캔여부'):
                let scan;
                switch (value) {
                    case ('구축'):
                        scan = 'YES'
                        break
                    case ('비구축'):
                        scan = 'NO'
                        break
                }
                setSaveInfo({...saveInfo, f_scan: scan});
                break;
            case('박스번호'):
                setSaveInfo({...saveInfo, b_num: value});
                break;
            case('층'):
                setSaveInfo({...saveInfo, f_location: {...saveInfo.f_location,chung:value}});
                break;
            case('열'):
                setSaveInfo({...saveInfo, f_location: {...saveInfo.f_location,yall:value}});
                break;
            case('서가'):
                setSaveInfo({...saveInfo, f_location: {...saveInfo.f_location,suga:value}});
                break;
            case('번'):
                setSaveInfo({...saveInfo, f_location: {...saveInfo.f_location,bun:value}});
                break;
            case('보존장소'):
                let place;
                switch (value) {
                    case ('기록관'):
                        place = 'ARCHIVIST';
                        break
                    case ('전문관리기관'):
                        place = 'PROFESSION';
                        break
                }
                setSaveInfo({...saveInfo, f_kplace: place});
                break;
            case('문서유형'):
                let type;
                switch (value) {
                    case ('일반문서'):
                        type = 'GENERAL';
                        break
                    case ('도면류'):
                        type = 'DRAWING';
                        break
                    case ('사진-필름류'):
                        type = 'PHOTO';
                        break
                    case ('녹음-동영상류'):
                        type = 'VIDEO';
                        break
                    case ('카드류'):
                        type = 'CARD';
                        break
                }
                setSaveInfo({...saveInfo, f_type: type});
                break;
            case('분류번호'):
                setSaveInfo({...saveInfo, f_typenum: value});
                break;
        }
    };
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

    const handleSave = async () => { //저장버튼을 눌렀을 때
            await axios.post(`http://${NetworkConfig.networkAddress}:8080/preinfo/file`, saveInfo, {withCredentials: true})
                .then((res) => {
                    console.log(res);
                    handleSearch();
                    modalClose();
                })
                .catch((err) => {
                    console.log(err);
                })
    };
    const handleModify = async () => {

    };
    const handleCancel = () =>{
        modalClose();
    }
    const Add = () =>{
        setSelectedRow({f_location:{}});
        setFormState('저장');
        modalOpen();
    }

    const Modify = () =>{
        if(selected.length==1){
            modalOpen();
            setFormState('수정');
            // setSelectedRow(searchResult.filter(row => parseInt(row.f_id) === selected[0])[0]);
            const tmp={
                "o_code": "3690052",
                "f_labelcode": "202942.0",
                "o_name": "울산광역시 중구 건설도시국 건축허가과",
                "f_name": "87 2-804(박규섭)",
                "f_id": null,
                "f_pyear": "2987.0",
                "f_kperiod": "영구",
                "f_db": null,
                "f_scan": null,
                "b_num": "009",
                "f_location": {
                    "chung": "",
                    "suga": "",
                    "yall": "",
                    "bun": ""
                },
                "f_kplace": null,
                "f_type": null,
                "f_typenum": ""
            }
            setSelectedRow(tmp);
            setSaveInfo(tmp);
        }
        else {
            window.alert("수정하고 싶은 철 1개를 선택해주세요");
        }

    }
    // useEffect(()=>{
    //     console.log(selectedRow);
    // },[selectedRow])



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
                                          borderRadius={"10px"} content={"철추가"} onClick={Add}
                                          backgroundColor={Style.color2}/>
                            <CustomButton type={"normal"} name={"수정"} width={"120px"} height={"50px"} fontSize={"22px"}
                                          borderRadius={"10px"} content={"철수정"} onClick={Modify}
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
            {/*모달창*/}
            {modal&&<PreinfoForm handleSave={handleSave} handleCancel={handleCancel} handleModify={handleModify}
                                 handleChange={handleChange} selectedRow={selectedRow} formState={formState}/>}
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
  right: 650px;
  bottom: 60px;
  &>button {
    margin-right: 15px;
  }
`;

export default PreInspectPage;
