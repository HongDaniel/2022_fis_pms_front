import React, {useEffect, useState} from 'react';
import Box from "../Atom/Box";
import styled from "styled-components";
import Table from "../Atom/Table";
import MainBox, {add} from "../Atom/MainBox";
import Title from "../Atom/Title";
import Navigation from "../Organism/Navigation";
import CustomButton from "../Atom/CustomButton";
import CustomInput from "../Atom/CustomInput";
import Container from "../Atom/Container";
import {Style} from "../Style";
import axios from "axios";

export const columns = [
    { field: 'f_id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 100,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        flex: 1,
        valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${
                params.getValue(params.id, 'lastName') || ''
            }`,
    },
];

export const rows = [
    { f_id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { f_id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
];

const col = [
    {
        field: 'f_labelcode',
        headerName: '레이블',
        sortable: true,
        width: 300,
    },
    {
        field: 'f_name',
        headerName: '철 제목',
        sortable: true,
        width: 1200,
    },
    {
        field: 'f_pyear',
        headerName: '생산년도',
        sortable: true,
        width: 300,
    },
    {
        field: 'f_kperiod',
        headerName: '보존기간',
        sortable: true,
        width: 200,
        flex: 1,
    },
];

const exCol = [
    {
        field: 'f_id',
        headerName: 'No.',
        sortable: true,
        width: 100,
    },
    {
        field: 'f_labelcode',
        headerName: '레이블',
        sortable: true,
        width: 100,
    },
    {
        field: 'o_name',
        headerName: '생산기관명',
        sortable: true,
        width: 300,
    },
    {
        field: 'o_code',
        headerName: '기관코드',
        sortable: true,
        width: 100,
    },
    {
        field: 'f_name',
        headerName: '철 제목',
        sortable: true,
        width: 300,
    },
    {
        field: 'f_pyear',
        headerName: '생산년도',
        sortable: true,
        width: 100,
    },
    {
        field: 'f_kperiod',
        headerName: '보존기간',
        sortable: true,
        width: 200,
    },
    {
        field: 'f_db',
        headerName: '구축여부',
        sortable: true,
        width: 100,
    },
    {
        field: 'f_scan',
        headerName: '스캔여부',
        sortable: true,
        width: 100,
    },
    {
        field: 'b_num',
        headerName: '박스번호',
        sortable: true,
        width: 100,
    },
    {
        field: 'f_location',
        headerName: '위치',
        sortable: true,
        width: 200,
    },
    {
        field: 'f_kplace',
        headerName: '보존장소',
        sortable: true,
        width: 200,
    },
    {
        field: 'f_type',
        headerName: '문서유형',
        sortable: true,
        width: 100,
    },
    {
        field: 'f_typenum',
        headerName: '분류번호',
        sortable: true,
        width: 100,
        flex: 1,
    },
];

const DocumentExportPage = () => {
    const [docRows, setDocRows] = useState([]);
    const [searchInfo, setSearchInfo] = useState({elabel: "", slabel: ""});
    const [searchDateInfo, setSearchDateInfo] = useState({edate: "", sdate: ""});
    const [searchBoxInfo, setSearchBoxInfo] = useState({ebox: "", sbox: ""});
    const [registerInfo, setRegisterInfo] = useState({b_num: "", f_db: "", f_scan: ""});
    const [saveInfo, setSaveInfo] = useState({});

    const [exportRows, setExportRows] = useState([]);
    const [selectionModel, setSelectionModel] = useState([]); // 체크박스 State
    const [selectionScanModel, setSelectionScanModel] = useState([]); // 체크박스 State

    const addEList = () => {
        const eList = [];
        (selectionModel.map((f_id) => {
            eList.push({
                b_num: registerInfo.b_num,
                f_db: registerInfo.f_db,
                f_exportdate: String(new Date()),
                f_id: f_id,
                f_scan: registerInfo.f_scan,
            })
        }))
        setSaveInfo((item) => {
            item['e_list'] = eList;
        })
        console.log(saveInfo.e_list);
    };

    const onRegister = () => {
        axios.patch('http://3.38.19.119:8080/export/save', saveInfo)
            .then((res) => {
                setSaveInfo({});
                console.log(res);
            })
            .catch((err) => console.log(err))
    }
    const onLabelSearch = () => {
        axios.get('http://3.38.19.119:8080/export/search/label', searchInfo)
            .then((res) => {
                console.log(res);
                setDocRows(res.data);
            })
            .catch(err => console.log(err))
    }
    const onDateSearch = () => {
        axios.get('http://3.38.19.119:8080/export/search/date', searchDateInfo)
            .then((res) => {
                console.log(res);
                setExportRows(res.data);
            })
            .catch(err => console.log(err))
    }
    const onBoxSearch = () => {
        axios.get('http://3.38.19.119:8080/export/search/box', searchBoxInfo)
            .then((res) => {
                console.log(res);
                setExportRows(res.data);
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        onLabelSearch();
        onDateSearch();
    }, []);

    const handleChange = (e) => {
        const label = e.target;
        const value = e.target.value;
        console.log(label, value);
        switch (label) {
            case('slabel'):
                setSearchInfo({...searchInfo, slabel: value})
                break;
            case('elabel'):
                setSearchInfo({...searchInfo, elabel: value})
                break;
            case('sdate'):
                setSearchDateInfo({...searchDateInfo, sdate: value})
                break;
            case('edate'):
                setSearchDateInfo({...searchDateInfo, edate: value})
                break;
            case('sbox'):
                setSearchBoxInfo({...searchBoxInfo, sbox: value})
                break;
            case('ebox'):
                setSearchBoxInfo({...searchBoxInfo, ebox: value})
                break;
        }
    }

    const handleRegisterChange = (e) => {
        const label = e.target;
        const value = e.target.value;
        let make = "";
        if (label.id === 'b_num') {
            setRegisterInfo({...registerInfo, b_num: value})
        } else if (label.name === '구축여부') {
            if (value === "구축") {
                make = "YES";
            } else if (value === "비구축") {
                make = "NO";
            }
            setRegisterInfo({...registerInfo, f_db: make})
        } else if (label.name === '스캔여부') {
            if (value === "구축") {
                make = "YES";
            } else if (value === "비구축") {
                make = "NO";
            }
            setRegisterInfo({...registerInfo, f_scan: make})
        }
    };

    const handleScan = (e) => {
        const formData = new FormData();
        const files = e.target.files;
        formData.append('fileId', selectionScanModel[0]);
        for (let i = 0; i < files.length; i++) {
            formData.append("images", files[i]);
            console.log(files[i])
        }
        axios.post("http://3.38.19.119:8080/images/origin", formData, { headers: { "Content-Type" : "multipart/form-data" } })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <Container>
            <Navigation/>
            <div>
                <MainBox height='620px'>
                    <Title>문서반출</Title>
                    <div style={{margin: 25, display:"flex", flexDirection: "row"}}>
                        <div style={{margin:10}}>
                            <CustomInput handleChange={handleChange} id={'slabel'} type='number' label='시작 레이블' size='small'/>
                        </div>
                        <div style={{marginTop:10, fontSize: 30, fontWeight: 200}}>
                            ~
                        </div>
                        <div style={{margin:10}}>
                            <CustomInput handleChange={handleChange} id={'elabel'} type='number' label='끝 레이블' size='small'/>
                        </div>
                        <div style={{marginTop:10}}>
                            <CustomButton onClick={onLabelSearch} type='normal' color='#ffffff' backgroundColor={Style.color2} content='레이블 검색'/>
                        </div>
                        <div style={{marginLeft:1350, marginTop:10}}>
                            <CustomButton type='normal' margin='5px' color='#ffffff' backgroundColor={Style.color2} content='박스 출력'/>
                            <CustomButton type='normal' margin='5px' color='#ffffff' backgroundColor={Style.color2} content='철 출력'/>
                            <CustomButton type='normal' margin='5px' color='#ffffff' backgroundColor={Style.color2} content='모두 출력'/>
                        </div>
                    </div>
                    <div style={{ justifyContent:'right', display:"flex", flexDirection: "row"}}>
                        <div style={{margin:10}}>
                            <CustomInput type='number' handleChange={handleRegisterChange} id={'b_num'} label='박스 번호' size='small'/>
                        </div>
                        <div style={{margin:10}}>
                            <CustomInput type='select' handleChange={handleRegisterChange} id={'f_db'} name='구축여부' width='130px' label='구축여부' contents={["구축", "비구축"]} />
                        </div>
                        <div style={{margin:10}}>
                            <CustomInput type='select' handleChange={handleRegisterChange} id={'f_scan'} name='스캔여부' width='130px' label='스캔여부' contents={["구축", "비구축"]} />
                        </div>
                        <div style={{marginTop:6, marginRight:50}}>
                            <CustomButton onClick={() => {
                                addEList();
                                onRegister();
                            }} type='normal' margin='5px' color='#ffffff' backgroundColor='#50586C' content='등록'/>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Box width='2176px' height='400px' backgroundColor={Style.color3}>
                            <Table selectionModel={selectionModel} setSelectionModel={setSelectionModel} width='2170px' height='380px' headerBG={Style.color2} cellBG={Style.color1} rows={docRows} columns={col} />
                        </Box>
                    </div>
                </MainBox>
                <MainBox height='560px'>
                    <Title>반출 리스트</Title>
                    <div style={{margin: 30, display:"flex", flexDirection: "row"}}>
                        <div style={{margin:10}}>
                            <CustomInput handleChange={handleChange} id={'sdate'} type='number' label='시작 날짜' size='small'/>
                        </div>
                        <div style={{marginTop:10, fontSize: 30, fontWeight: 200}}>
                            ~
                        </div>
                        <div style={{margin:10}}>
                            <CustomInput handleChange={handleChange} id={'edate'} type='number' label='끝 날짜' size='small'/>
                        </div>
                        <div style={{marginTop:10}}>
                            <CustomButton onClick={onDateSearch} type='normal' width='100px' height='40px' color='#ffffff' backgroundColor={Style.color2} content='날짜 검색'/>
                        </div>
                        <div style={{marginLeft:50, marginTop:10, display:"flex", flexDirection: "row"}}>
                            <div style={{marginRight: 10}}>
                                <CustomInput handleChange={handleChange} id={'sbox'} type='number' label='시작 번호' size='small'/>
                            </div>
                            <div style={{ fontSize: 30, fontWeight: 200}}>
                                ~
                            </div>
                            <div style={{marginLeft: 10}}>
                                <CustomInput handleChange={handleChange} id={'ebox'} type='number' label='끝 번호' size='small'/>
                            </div>
                            <div>
                                <CustomButton onClick={onBoxSearch} type='normal' margin='0 5px 0 10px' width='100px' height='40px' color='#ffffff' backgroundColor={Style.color2} content='박스 검색'/>
                            </div>
                            <div>
                                {/*<form action="upload" id="uploadForm" method="post" encType="multipart/form-data">*/}
                                {/*    <input type="file" name="file" id="file" style={{display:'none'}}/>*/}
                                {/*</form>*/}
                                <CustomButton onClick={()=>{
                                    if (selectionScanModel.length === 0 || selectionScanModel.length > 1) {
                                        alert('레이블을 하나만 선택해주세요.');
                                        return;
                                    }
                                    const inputFile = document.getElementById("input-file");
                                    inputFile.click();
                                }} type='normal' margin='0 5px 0 800px' width='100px' height='40px' color='#ffffff' backgroundColor={Style.color2} content='스캔'/>
                                <input multiple={'multiple'} onChange={handleScan} type="file" id="input-file" style={{display: "none"}}/>
                            </div>
                            <div>
                                <CustomButton type='normal' margin='0 5px 0 10px' width='100px' height='40px' color='#ffffff' backgroundColor={Style.color2} content='엑셀로 저장'/>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Box width='2176px' height='400px' backgroundColor={Style.color3}>
                            <Table isRowSelectable={true} selectionModel={selectionScanModel} setSelectionModel={setSelectionScanModel} width='2170px' height='380px' headerBG={Style.color2} cellBG={Style.color1} rows={exportRows} columns={exCol} />
                        </Box>
                    </div>
                </MainBox>
            </div>

        </Container>
    );
};

export default DocumentExportPage;