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
    const [currentTab, setCurrentTab] = useState(()=>'0');
    const [openImage, setOpenImage] = useState(() => false);
    const [boxRows, setBoxRows] = useState([]);
    const [cRows, setCRows] = useState([]);
    const [gRows, setGRows] = useState([]);
    const [selectionBoxModel, setSelectionBoxModel] = useState([]);
    const [selectionCModel, setSelectionCModel] = useState([]);
    const [selectionGModel, setSelectionGModel] = useState([]);
    const styleForm = {}
    if (selectionBoxModel.length === 0) {
        styleForm.display = 'none';
    } else {
        styleForm.display = '';
    }

    const [cInfo, setCInfo] = useState({});

    const handleChange = (e) => {
        let label = e.target.id;
        let v;
        const value = e.target.value;
        if (label === undefined) {
            label = e.target.name;
        }
        console.log(label, value)
        switch (label) {
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
                } else {
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
                } else {
                    v = 'PROFESSION';
                }
                setCInfo({...cInfo, f_kplace: v})
                break;
            case('기록물 형태'):
                setCInfo({...cInfo, f_type: value})
                break;
        }
    }

    const handleCSave = () => {
        console.log(cInfo);
        axios.post("http://3.38.19.119:8080/index/label", cInfo)
            .then((res) => console.log(res));
    }

    const boxSearch = () => {
        axios.get(`http://3.38.19.119:8080/index/search/${1234567}`)
            .then((res) => {
                setBoxRows(res.data);
            })
    };

    useEffect(() => {
        setCInfo({...cInfo, f_id: selectionBoxModel[0]})
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
                                    <Table isRowSelectable={true} selectionModel={selectionBoxModel} setSelectionModel={setSelectionBoxModel}
                                           width='1100px' height='330px' headerBG={Style.color2} cellBG={Style.color1} rows={boxRows}
                                           columns={boxColumns}/>
                                </Box>
                            </div>
                            <div style={{margin: '50px 0 0 15px'}}>
                                <Box width='1100px' height='350px' backgroundColor={Style.color3}>
                                    <BoxTitle>철 목록</BoxTitle>
                                    <Table width='1100px' height='330px' headerBG={Style.color2} cellBG={Style.color1} rows={rows}
                                           columns={cColumns}/>
                                </Box>
                            </div>
                            <div style={{margin: '50px 0 0 15px'}}>
                                <Box width='1100px' height='350px' backgroundColor={Style.color3}>
                                    <BoxTitle>건 목록</BoxTitle>
                                    <Table width='1100px' height='330px' headerBG={Style.color2} cellBG={Style.color1} rows={rows}
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
                                        <CustomInput type='number' width='410px' label='* 기관명' size='small' margin='0 10px 0 10px'/>
                                        <span style={{fontSize: '17pt'}}>
                                            (<CustomInput type='number' width='160px' label='* 기관코드' size='small' margin='0 10px 0 10px'/>)
                                        </span>
                                        {/*<CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='기관코드 찾기'/>*/}
                                        <TransitionsModal currentTab={currentTab} content={'기관코드 찾기'}/>
                                    </Row>
                                    <Row columns={"2fr 2fr 1fr 1fr 1fr 1fr"}>
                                        {/*<span style={{fontSize: '17pt'}}>기관 코드 : </span>*/}
                                        <CustomInput type='number' label='* 박스' size='small' margin='0 10px 0 10px'/>
                                        <CustomInput type='number' label='* 레이블' size='small' margin='0 10px 0 10px'/>
                                        <CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor={Style.color2} content='등록완료'/>
                                        <CustomButton onClick={boxSearch} type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='검색'/>
                                        {/*<TransitionsModal currentTab={currentTab} content={'검색'}/>*/}
                                        <CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor={Style.color2} content='출력'/>
                                        <CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor={Style.color2} content='검수'/>
                                    </Row>
                                </InfoContainer>
                            </Box>
                        </div>
                        <div style={{margin: '20px 0 0 15px'}}>
                            <Box width='1050px' height='990px' backgroundColor='white'>
                                <Box width='1030px' height='100px' backgroundColor= {Style.color3}>
                                    {currentTab !== '1' &&
                                        <div style={{position: 'absolute', margin: '30px 0 0 250px'}}>
                                            <Row columns={'1fr 2fr 1fr'}>
                                                <CustomInput type='select' name='항목 검색' width='130px' label='항목 검색'
                                                             contents={currentTab === '0' ? ["철 제목", "생산년도", "종료년도"] : ["문서 제목", "건 제목", "수(발)신자"]}/>
                                                <CustomInput type='number' label='' size='small' margin='0 10px 0 10px'/>
                                                {/*<CustomButton type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content='검색'/>*/}
                                                <TransitionsModal currentTab={currentTab} content={'검색'}/>
                                            </Row>
                                        </div>
                                    }
                                </Box>
                                <div style={styleForm}>
                                    <UnstyledTabsCustomized handleSave={handleCSave} handleChange={handleChange} setCurrentTab={setCurrentTab} />
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