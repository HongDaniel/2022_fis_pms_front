import React, {useState} from 'react';
import styled from "styled-components";
import Container from "../Atom/Container";
import Navigation from "../Organism/Navigation";
import MainBox from "../Atom/MainBox";
import Title from "../Atom/Title";
import Box from "../Atom/Box";
import CustomButton from "../Atom/CustomButton";
import InputContainer from "../Molecule/InputContainer";
import Table from "../Atom/Table";
import {Style} from "../Style";

const UploadPage = () => {
    const [searchResult, setSearchResult] = useState(()=>JSON.parse(localStorage.getItem("searchResult"))||[]); //검색한 정보
    const [selected,setSelected] = useState([]);
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

    return (
        <Container>
            <Navigation/>
            <MainBox height={"1140px"}>
                <Title>업로드</Title>
                <BoxContainer>
                    <Box width='2200px' height='250px' backgroundColor={Style.color3}>
                        <Search>
                            <div className={"code"}>
                                <label htmlFor={"code"}>기관코드</label>
                                <input type={"text"} id={"code"} value={""}/>
                                <input type={"text"} placeholder={"직접코드 입력"}/>
                            </div>
                            <div className={"detail"}>
                                <input type="checkbox" id="미검수" name="미검수" className={"checkbox"}
                                       />
                                <label htmlFor="미검수" style={{marginRight:"100px"}}>미검수 포함</label>
                                <input type="checkbox" id="업로드" name="업로드" className={"checkbox"}
                                       />
                                <label htmlFor="업로드" style={{marginRight:"400px"}}>업로드 포함</label>
                                <label htmlFor={"range"}>박스 범위검색</label>
                                <input type={"number"} name={"start"} id={"range"} className={"range"}/>
                                <input type={"number"} name={"start"} id={"range"} className={"range"}/>
                                <CustomButton type={"normal"} name={"검색"} width={"210px"} height={"45px"} fontSize={"24px"}
                                              borderRadius={"5px"} content={"검색"} backgroundColor={Style.color2}/>
                            </div>
                        </Search>
                    </Box>
                    <Box width='2200px' height='810px' backgroundColor={Style.color3}>
                        <Content>
                        <CustomButton type={"normal"} name={"검색"} width={"150px"} height={"45px"} fontSize={"24px"}
                                          borderRadius={"5px"} content={"파일 생성"} backgroundColor={Style.color2}/>

                            <Table rows={searchResult} columns={columns} selectionModel={selected}
                                   setSelectionModel={setSelected} headerBG={Style.color2} cellBG={Style.color1}
                                   width={"89%"} height={"85%"}/>


                        </Content>
                        </Box>
                </BoxContainer>
            </MainBox>
        </Container>
    );
};
export default UploadPage;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
`;

const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 70px 90px;
  height: 140px;
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  & label {
    margin-right: 25px;
    font-size: 23px;
  }

  & input {
    margin-right: 25px;
    height: 45px;
    width: 250px;
    border: 1px solid #dadada;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  & .checkbox{
    width: 20px;
  }
  & .range{
    width: 150px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 90px;
  & button {
    position: absolute;
    top: 30px;
    right: 130px;
  }
`;