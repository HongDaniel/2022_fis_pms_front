import React, {useState} from 'react';
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

const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 100,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
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

const rows = [
    {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
    {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
    {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
    {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
    {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
    {id: 6, lastName: 'Melisandre', firstName: null, age: 150},
    {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
    {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
    {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
];

const PreInspectPage = () => {
    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
    const [modal, setModal] = useState(false);
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const modalOpen = () => {
        setModal(true);
    }
    const modalClose = () => {
        setModal(false);
    }

    return (
        <Container>
            <Navigation/>
            <MainBox height={"1250px"}>
                <Title> 입력 및 검색 </Title>
                <BoxContainer>
                    {/*입력정보*/}

                    <Box width='2200px' height='340px' backgroundColor={Style.color3}>
                        <InfoContainer>
                            <h3>필수 입력 정보</h3>
                            <Row columns={"3fr 2fr"}>
                                <InputContainer id={"철제목"} width={"350px"} type={"text"}/>
                                <InputContainer id={"생산년도"} width={"300px"} type={"number"}/>

                            </Row>
                            <Row columns={"3fr 2fr"}>
                                <InputContainer id={"레이블"} width={"350px"} type={"text"}/>
                                <InputContainer id={"기관코드"} width={"300px"} type={"text"}/>
                            </Row>
                        </InfoContainer>


                        <BtnContainer>
                            {/*<CustomButton type={"normal"} name={"저장"} width={"110px"} height={"45px"} fontSize={"22px"}*/}
                            {/*              borderRadius={"25px"} content={"저장"}/>*/}
                            {/*<CustomButton type={"normal"} name={"삭제"} width={"110px"} height={"45px"} fontSize={"22px"}*/}
                            {/*              borderRadius={"25px"} content={"삭제"}/>*/}
                            <CustomButton type={"normal"} name={"검색"} width={"210px"} height={"55px"} fontSize={"22px"}
                                          borderRadius={"25px"} content={"검색"} backgroundColor={Style.color2}/>
                            {/*<CustomButton type={"normal"} name={"초기화"} width={"110px"} height={"45px"} fontSize={"22px"}*/}
                            {/*              borderRadius={"25px"} content={"초기화"}/>*/}
                            {/*<CustomButton type={"normal"} name={"출력"} width={"110px"} height={"45px"} fontSize={"22px"}*/}
                            {/*              borderRadius={"25px"} content={"출력"}/>*/}
                        </BtnContainer>
                    </Box>


                    {/*조회 데이터*/}
                    <Box width='2200px' height='790px' backgroundColor={Style.color3}>
                        <Table rows={rows} columns={columns} headerBG={Style.color2} cellBG={Style.color1} width={"88%"}
                               height={"85%"}/>
                        <BtnContainer2>
                            <CustomButton type={"normal"} name={"저장"} width={"180px"} height={"55px"} fontSize={"22px"}
                                          borderRadius={"25px"} content={"폴더생성"} onClick={modalOpen}
                                          backgroundColor={Style.color2}/>
                            <CustomButton type={"normal"} name={"삭제"} width={"180px"} height={"55px"} fontSize={"22px"}
                                          borderRadius={"25px"} content={"목록 불러오기"} backgroundColor={Style.color2}/>
                            <CustomButton type={"normal"} name={"검색"} width={"180px"} height={"55px"} fontSize={"22px"}
                                          borderRadius={"25px"} content={"엑셀로 저장"} backgroundColor={Style.color2}/>
                        </BtnContainer2>
                    </Box>
                </BoxContainer>
            </MainBox>
            {/*폴더생성 모달창*/}
            {modal?<Modal>
                <div className={"bg"}></div>

                <div id={"modal"}>

                    <div className={"info"}>
                        <h3>필수 입력 정보</h3>
                        <InputContainer id={"철제목"} width={"350px"} type={"text"}/>
                        <InputContainer id={"생산년도"} width={"300px"} type={"number"}/>
                        <InputContainer id={"레이블"} width={"350px"} type={"text"}/>
                        <InputContainer id={"기관코드"} width={"300px"} type={"text"}/>
                        <InputContainer id={"생산년도"} width={"150px"} type={"number"}/>
                        <InputContainer id={"보존기간"} width={"150px"} type={"select"} defaultValue={"선택"}
                                        contents={["선택", "1년", "30년", "영구"]}/>
                        <InputContainer id={"구축여부"} width={"150px"} type={"select"} defaultValue={"선택"}
                                        contents={["선택", "구축", "비구축"]}/>
                        <InputContainer id={"스캔여부"} width={"150px"} type={"select"} defaultValue={"선택"}
                                        contents={["선택", "구축", "비구축"]}/>
                        <InputContainer id={"박스번호"} width={"150px"} type={"number"}/>
                    </div>

                    <div className={"info"}>
                        <h3>부가 입력 정보</h3>
                        <InputContainer id={"위치"} width={"150px"} type={"number"}/>
                        <InputContainer id={"보존장소"} width={"150px"} type={"select"} defaultValue={"선택"}
                                        contents={["선택", "1년", "30년", "영구"]}/>
                        <InputContainer id={"문서종류"} width={"150px"} type={"select"} defaultValue={"선택"}
                                        contents={["선택", "구축", "비구축"]}/>
                        <InputContainer id={"분류번호"} width={"150px"} type={"select"} defaultValue={"선택"}
                                        contents={["선택", "구축", "비구축"]}/>
                    </div>
                    <div className={"btnContainer"}>
                        <CustomButton type={"normal"} width={"180px"} height={"55px"} fontSize={"22px"}
                                      borderRadius={"25px"} content={"저장"} backgroundColor={Style.color2}/>
                        <CustomButton type={"normal"}width={"180px"} height={"55px"} fontSize={"22px"}
                                      borderRadius={"25px"} content={"취소"} backgroundColor={Style.color2} onClick={modalClose}/>
                    </div>

                </div>
            </Modal>:null}
        </Container>
    );
};

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
    margin: 15px 0;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  & .bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  
  & #modal{
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 900px;
    height: 990px;
    padding: 15px;
    box-shadow: 2px 2px 3px grey;
    border-radius: 15px;
    
    & .info {
      margin-left: 200px;
      margin-top: 20px;
      &>div{
        margin-bottom: 12px;
      }
    }
    
    & .btnContainer {
      margin-left: 200px;
      &>button{
        margin-top: 20px;
        margin-right: 150px;
      }
    }
    
  }
  
  
`;
export default PreInspectPage;