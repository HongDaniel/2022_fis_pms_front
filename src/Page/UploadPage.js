import React from 'react';
import styled from "styled-components";
import Container from "../Atom/Container";
import Navigation from "../Organism/Navigation";
import MainBox from "../Atom/MainBox";
import Title from "../Atom/Title";
import Box from "../Atom/Box";
import CustomButton from "../Atom/CustomButton";
import InputContainer from "../Molecule/InputContainer";
import Table from "../Atom/Table";

const UploadPage = () => {
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
    return (
        <Container>
            <Navigation/>
            <MainBox height={"1220px"}>
                <Title>업로드</Title>
                <BoxContainer>
                    <Box width='2200px' height='320px' backgroundColor='#ecf0f1'>
                        <Search>
                            <div className={"code"}>
                                <label for={"code"}>기관코드</label>
                                <input type={"text"} id={"code"} value={""}/>
                                <input type={"text"} placeholder={"직접코드 입력"}/>
                            </div>
                            <div className={"detail"}>
                                <input type="checkbox" id="미검수" name="미검수" className={"checkbox"}
                                       checked/>
                                <label for="미검수" style={{marginRight:"100px"}}>미검수 포함</label>
                                <input type="checkbox" id="업로드" name="업로드" className={"checkbox"}
                                       checked/>
                                <label htmlFor="업로드" style={{marginRight:"400px"}}>업로드 포함</label>
                                <label for={"range"}>박스 범위검색</label>
                                <input type={"number"} name={"start"} id={"range"} className={"range"}/>
                                <input type={"number"} name={"start"} id={"range"} className={"range"}/>
                                <CustomButton type={"normal"} name={"검색"} width={"210px"} height={"45px"} fontSize={"24px"}
                                              borderRadius={"5px"} content={"검색"}/>
                            </div>
                        </Search>
                    </Box>
                    <Box width='2200px' height='810px' backgroundColor='#ecf0f1'>
                        <Content>
                        <CustomButton type={"normal"} name={"검색"} width={"150px"} height={"45px"} fontSize={"24px"}
                                          borderRadius={"5px"} content={"파일 생성"}/>
                        <Table rows={rows} columns={columns} headerBG={"#50586C"} cellBG={"#DCE2F0"} width={"95%"} height={"70%"}/>
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
  height: 180px;
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
    right: 50px;
  }
`;