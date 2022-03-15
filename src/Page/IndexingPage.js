import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Container from "../Atom/Container";
import Navigation from "../Organism/Navigation";
import MainBox from "../Atom/MainBox";
import Box from "../Atom/Box";
import Table from "../Atom/Table";
import Title from "../Atom/Title";
import {columns, rows} from "./DocumentExportPage";
import CustomInput from "../Atom/CustomInput";
import CustomButton from "../Atom/CustomButton";
import UnstyledTabsCustomized from "../Atom/UnstyledTabsCustomized";
import TransitionsModal from "../Atom/TransitionsModal";
import AppendDots from "../Atom/AppendDots";
import ImageContainer from "../Molecule/ImageContainer";
import {Style} from "../Style";
import axios from "axios";

const boxColumns = [
    {
        field: 'f_labelcode',
        headerName: '레이블',
        sortable: true,
        width: 150,
    },
    {
        field: 'f_name',
        headerName: '사전조사 철제목',
        sortable: true,
        width: 480,
    },
    {
        field: 'f_pyear',
        headerName: '생산년도',
        sortable: true,
        width: 80,
    },
    {
        field: 'f_kperiod',
        headerName: '보존기간',
        sortable: true,
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
        },
        width: 80,
    },
    {
        field: 'b_num',
        headerName: '박스번호',
        sortable: true,
        width: 80,
    },
    {
        field: 'f_complete',
        headerName: '완료',
        sortable: true,
        width: 80,
    },
    {
        field: 'f_check',
        headerName: '검수',
        sortable: true,
        width: 80,
        flex: 1,
    },
];

const cColumns = [
    {
        field: 'f_id',
        headerName: 'No. ',
        sortable: true,
        width: 80,
    },
    {
        field: 'f_labelcode',
        headerName: '레이블',
        sortable: true,
        width: 110,
    },
    {
        field: 'f_volumeamount',
        headerName: '권호수',
        sortable: true,
        width: 110,
    },
    {
        field: 'f_name',
        headerName: '철제목',
        sortable: true,
        width: 480,
    },
    {
        field: 'f_pyear',
        headerName: '생산년도',
        sortable: true,
        width: 80,
    },
    {
        field: 'f_eyear',
        headerName: '종료년도',
        sortable: true,
        width: 80,
    },
    {
        field: 'f_kperiod',
        headerName: '보존기간',
        sortable: true,
        width: 80,
        flex: 1,
    },
];

const gColumns = [
    {
        field: 'f_labelcode',
        headerName: 'No. ',
        sortable: true,
        width: 80,
    },
    {
        field: 'c_pdate',
        headerName: '생산(접수)일자',
        sortable: true,
        width: 300,
    },
    {
        field: 'c_title',
        headerName: '건 제목',
        sortable: true,
        width: 400,
    },
    {
        field: 'c_spage',
        headerName: '첫페이지',
        sortable: true,
        width: 80,
    },
    {
        field: 'c_epage',
        headerName: '끝페이지',
        sortable: true,
        width: 80,
    },
    {
        field: 'c_kperiod',
        headerName: '보존기간',
        sortable: true,
        width: 80,
        flex: 1,
    },
];

const IndexingPage = () => {
    const [currentTab, setCurrentTab] = useState(()=>0);
    const [openImage, setOpenImage] = useState(() => false);
    const [boxRows, setBoxRows] = useState([]);
    const [cRows, setCRows] = useState([]);
    const [gRows, setGRows] = useState([]);
    const [selectionBoxModel, setSelectionBoxModel] = useState([]);
    const [selectionCModel, setSelectionCModel] = useState([]);
    const [selectionGModel, setSelectionGModel] = useState([]);
    const [selectedRow, setSelectedRow] = useState();
    const [boxLoading, setBoxLoading] = useState(false);
    const [volumeAmount, setVolumeAmount] = useState('');

    useEffect(() => {
        if (selectionCModel.length > 0) {
            cRows.map((item) => {
                if (item.f_id === selectionCModel[0]) {
                    setSelectedRow(item);
                    setVolumeAmount(item.f_volumeamount);
                    return;
                }
            })
        } else {
            setVolumeAmount('');
        }
        caseSearch();
    }, [selectionCModel])

    const styleForm = {}
    if (selectionBoxModel.length === 0) {
        styleForm.display = 'none';
    } else {
        styleForm.display = '';
    }

    const [oInfo, setOInfo] = useState({o_code: '', o_name: ''});
    const [cInfo, setCInfo] = useState({});
    const [gInfo, setGInfo] = useState({});

    useEffect(() => {
        if (selectionBoxModel.length > 0) {
            boxRows.map((item) => {
                if (item.f_id === selectionBoxModel[0]) {
                    setSelectedRow(item);
                    console.log(item);
                    setCInfo((prevState) => ({...prevState, f_name: item.f_name, o_name: item.o_name, f_pyear: item.f_pyear}));
                    return;
                }
            })
        } else {
            setCRows([]);
        }
    }, [selectionBoxModel])

    const handleFormChange = (e) => {
        let label = e.target.id;
        let v;
        const value = e.target.value;
        if (label === undefined) {
            label = e.target.name;
        }
        console.log(label, value)
        switch (label) {
            case('o_code'):
                setOInfo({...oInfo, o_code: value})
                break;
            case('o_name'):
                setOInfo({...oInfo, o_name: value})
                break;
            case('철 제목'):
                setCInfo({...cInfo, f_name: value})
                break;
            case('총 권호수'):
                setCInfo({...cInfo, f_volumeamount: value})
                break;
            case('분류 번호'):
                setCInfo({...cInfo, f_typenum: value})
                break;
            case('담당자'):
                setCInfo({...cInfo, f_manager: value})
                break;
            case('보존 기간'):
                if (value === "1년") {
                    v = 'YEAR1';
                } else if (value === "3년") {
                    v = 'YEAR3';
                } else if (value === "5년") {
                    v = 'YEAR5';
                } else if (value === "10년") {
                    v = 'YEAR10';
                } else if (value === "20년") {
                    v = 'YEAR20';
                } else if (value === "30년") {
                    v = 'YEAR30';
                } else if (value === "준영구") {
                    v = 'SEMI';
                } else if (value === "영구") {
                    v = 'PERMANENT';
                }
                setCInfo({...cInfo, f_kperiod: v})
                break;
            case('보존 방법'):
                if (value === "원본과 보존매체를 함께 보존") {
                    v = 'ALL';
                } else if (value === "보존매체만 보존") {
                    v = 'MEDIA';
                } else {
                    v = 'ORIGINAL';
                }
                setCInfo({...cInfo, f_kmethod: v})
                break;
            case('보존 장소'):
                if (value === "기록관") {
                    v = 'ARCHIVIST';
                } else if (value === '전문관리기관') {
                    v = 'PROFESSION';
                }
                setCInfo({...cInfo, f_kplace: v})
                break;
            case('기록물 형태'):
                if (value === "일반문서") {
                    v = '1';
                } else if (value === "도면류") {
                    v = '2';
                } else if (value === "사진-필름류") {
                    v = '3';
                } else if (value === "녹음-동영상류") {
                    v = '4';
                } else if (value === '카드류') {
                    v = '5';
                }
                setCInfo({...cInfo, f_type: v})
                break;
        }
    }

    const handleCaseChange = (e) => {
        let label = e.target.id;
        let v;
        const value = e.target.value;
        if (label === undefined) {
            label = e.target.name;
        }
        console.log(label, value)
        switch (label) {
            case('첫 페이지'):
                setGInfo({...gInfo, c_spage: value})
                break;
            case('끝 페이지'):
                setGInfo({...gInfo, c_epage: value})
                break;
            case('쪽수'):
                setGInfo({...gInfo, c_page: value})
                break;
            case('시행일자'):
                setGInfo({...gInfo, c_dodate: value})
                break;
            case('생산(접수)일자'):
                setGInfo({...gInfo, c_pdate: value})
                break;
            case('생산기관명'):
                setGInfo({...gInfo, c_departmentname: value})
                break;
            case('문서 번호'):
                setGInfo({...gInfo, c_oldnum: value})
                break;
            case('보존 기간'):
                setGInfo({...gInfo, c_kperiod: v})
                break;
            case('건 제목'):
                setGInfo({...gInfo, c_title: value})
                break;
            case('기안자'):
                setGInfo({...gInfo, c_drafter: value})
                break;
            case('결재권자'):
                setGInfo({...gInfo, c_approver: value})
                break;
            case('수(발)신자'):
                setGInfo({...gInfo, c_receiver: value})
                break;
            case('전자기록물 여부'):
                setGInfo({...gInfo, c_edoc: value})
                break;
            case('공개여부'):
                setGInfo({...gInfo, c_openable: v})
                break;
            case('공개제한부분표시'):
                setGInfo({...gInfo, c_hidden: value})
                break;
        }
    }

    const [keyword, setKeyword] = useState({item: '', key: ''});

    const handleKeyChange = (e) => {
        if (e.target.id === 'key') {
            setKeyword({...keyword, key: e.target.value})
        } else if (e.target.name === '항목 검색') {
            setKeyword({...keyword, item: e.target.value})
        }
        console.log(keyword)
    }

    const handleCSave = () => {
        axios.post("http://3.38.19.119:8080/index/label", cInfo)
            .then((res) => {
                return res.data.v_id
            })
            .then((res) => {
                const result = [];
                for (let i = 0; i < res.length; i++) {
                    result.push({
                        ...selectedRow,
                        f_id: res[i],
                        f_volumeamount: i+1,
                    })
                }
                console.log(result);
                setCRows((prev) => result);
            });
    }

    const handleGSave = () => {
        console.log(gInfo);
    }

    const boxSearch = () => {
        setBoxLoading(true);
        axios.get(`http://3.38.19.119:8080/index/search/${oInfo.o_code}`)
            .then((res) => {
                setBoxRows(res.data);
            })
        setBoxLoading(false);
    };

    const caseSearch = () => {
        setBoxLoading(true);
        axios.get(`http://3.38.19.119:8080/index/case`)
            .then((res) => {
                setGRows(res.data);
            })
        setBoxLoading(false);
    };

    useEffect(() => {
        setCInfo((prevState) => ({...prevState, f_id: selectionBoxModel[0]}))
    }, [selectionBoxModel])

    return (
        <Container>
            <Navigation />
            <MainBox height={'1250px'}>
                <Title>
                    색인
                    <CustomButton onClick={() => {
                        if (openImage) {
                            setOpenImage(false);
                        } else {
                            setOpenImage(true);
                        }
                    }} type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor={Style.color2} content={openImage ? '목록 보기' : '이미지 보기'}/>
                </Title>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {openImage ?
                        <div>
                            <div style={{margin: '50px 0 0 15px'}}>
                                <Box width='1100px' height='1150px' backgroundColor={Style.color3}>
                                    <BoxTitle>이미지</BoxTitle>
                                    <div>
                                        <ImageContainer />
                                    </div>
                                </Box>
                            </div>
                        </div>
                        :
                        <div>
                            <div style={{margin: '50px 0 0 15px'}}>
                                <Box width='1100px' height='350px' backgroundColor={Style.color3}>
                                    <BoxTitle>대상 목록</BoxTitle>
                                    <Table loading={boxLoading} isRowSelectable={true} selectionModel={selectionBoxModel} setSelectionModel={setSelectionBoxModel}
                                           width='1100px' height='330px' headerBG={Style.color2} cellBG={Style.color1} rows={boxRows}
                                           columns={boxColumns}/>
                                </Box>
                            </div>
                            <div style={{margin: '50px 0 0 15px'}}>
                                <Box width='1100px' height='350px' backgroundColor={Style.color3}>
                                    <BoxTitle>철 목록</BoxTitle>
                                    <Table isRowSelectable={true} selectionModel={selectionCModel} setSelectionModel={setSelectionCModel}
                                           width='1100px' height='330px' headerBG={Style.color2} cellBG={Style.color1} rows={cRows}
                                           columns={cColumns}/>
                                </Box>
                            </div>
                            <div style={{margin: '50px 0 0 15px'}}>
                                <Box width='1100px' height='350px' backgroundColor={Style.color3}>
                                    <BoxTitle>건 목록</BoxTitle>
                                    <Table width='1100px' height='330px' headerBG={Style.color2} cellBG={Style.color1} rows={gRows}
                                           columns={gColumns}/>
                                </Box>
                            </div>
                        </div>
                    }
                    <div>
                        <div style={{margin: '50px 0 0 15px'}}>
                            <Box width='1050px' height='140px' backgroundColor={Style.color3}>
                                <InfoContainer>
                                    <Row columns={"1fr 1fr 1.9fr"}>
                                        <CustomInput disabled={true} handleChange={handleFormChange} value={oInfo.o_name} id='o_name' type='text' width='410px' label='* 기관명' size='small' margin='0 10px 0 10px'/>
                                        <span style={{fontSize: '17pt'}}>
                                            (<CustomInput disabled={true} handleChange={handleFormChange} value={oInfo.o_code} id='o_code' type='number' width='160px' label='* 기관코드' size='small' margin='0 10px 0 10px'/>)
                                        </span>
                                        {/*<CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='기관코드 찾기'/>*/}
                                        <TransitionsModal currentTab={currentTab} content={'기관코드 찾기'} oInfo={oInfo} setOInfo={setOInfo}/>
                                    </Row>
                                    <Row columns={"2fr 2fr 1fr 1fr 1fr 1fr"}>
                                        {/*<span style={{fontSize: '17pt'}}>기관 코드 : </span>*/}
                                        <CustomInput type='number' label='* 박스' size='small' margin='0 10px 0 10px'/>
                                        <CustomInput type='number' label='* 레이블' size='small' margin='0 10px 0 10px'/>
                                        <CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor={Style.color2} content='등록완료'/>
                                        <CustomButton onClick={boxSearch} type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='검색'/>
                                        <CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor={Style.color2} content='출력'/>
                                        <CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor={Style.color2} content='검수'/>
                                    </Row>
                                </InfoContainer>
                            </Box>
                        </div>
                        <div style={{margin: '20px 0 0 15px'}}>
                            <Box width='1050px' height='990px' backgroundColor='white'>
                                <Box width='1030px' height='100px' backgroundColor= {Style.color3}>
                                    {currentTab !== 1 &&
                                        <div style={{position: 'absolute', margin: '30px 0 0 250px'}}>
                                            <Row columns={'1fr 2fr 1fr'}>
                                                <CustomInput defaultValue={keyword.item} handleChange={handleKeyChange} type='select' name='항목 검색' width='130px' label='항목 검색'
                                                             contents={currentTab === 0 ? ["철 제목", "생산년도", "종료년도"] : ["문서 번호", "건 제목", "수(발)신자"]}/>
                                                <CustomInput value={keyword.key} handleChange={handleKeyChange} id='key' type='text' label='' size='small' margin='0 10px 0 10px'/>
                                                {/*<CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='검색'/>*/}
                                                <TransitionsModal keyword={keyword} currentTab={currentTab} content={'검색'}/>
                                            </Row>
                                        </div>
                                    }
                                </Box>
                                <div style={styleForm}>
                                    <UnstyledTabsCustomized volumeAmount={volumeAmount} value={cInfo.f_name} handleSave={handleCSave} handleGSave={handleGSave} handleCaseChange={handleCaseChange} handleChange={handleFormChange} currentTab={currentTab} setCurrentTab={setCurrentTab} />
                                </div>
                            </Box>
                        </div>
                    </div>
                </div>


            </MainBox>
        </Container>
    );
};

const BoxTitle = styled.div`
  position: absolute;
  margin: -15px 0 0 20px;
  font-size: 20px;
  background-color: #fff;
  z-index: 2;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  position: absolute;
  margin: 20px;
`;

export default IndexingPage;