import React, {useEffect, useState} from 'react';
import InputContainer from "./InputContainer";
import CustomButton from "../Atom/CustomButton";
import Table from "../Atom/Table";
import {columns, rows} from "../Page/DocumentExportPage";
import Box from "../Atom/Box";
import {styled} from "@mui/system";
import CustomInput from "../Atom/CustomInput";
import axios from "axios";

function Ginput(props) {
    const [caseNum, setCaseNum] = useState(null);
    const [pageInfo, setPageInfo] = useState([]);
    const params = {
        f_id: props.f_id,
        v_id: props.v_id,
        v_info: pageInfo,
    }
    const handleSave = () => {
        console.log(params);
        axios.post('http://3.38.19.119:8080/index/volume', params)
            .then((res) => console.log(res))
    }
    const handleChange = (e) => {
        setCaseNum(parseInt(e.target.value));
    }
    const handlePageChange = (e) => {
        const rowNum = e.target.id[0];
        const colNum = e.target.id[2];
        if (!pageInfo[rowNum]) {
            pageInfo[rowNum] = {};
        }
        if (colNum === '0') {
            pageInfo[rowNum]['startPage'] = e.target.value;
        } else if (colNum === '1') {
            pageInfo[rowNum]['endPage'] = e.target.value;
        }
        console.log(pageInfo[rowNum]);
    }
    useEffect(() => {
        setPageInfo(new Array(caseNum));
    }, [caseNum])
    const Repeat = () => {
        const result = [];
        for (let i = 0; i < caseNum; i++) {
            result.push(<ListContainer columns={'1fr 1fr 1fr'} fontSize={'15pt'} weight={'400'} mb={'10px'}>
                <CustomInput handleChange={handlePageChange} id={`${i}-${0}`} type='number' label='' size='small' margin='0 10px 0 10px'/>
                <CustomInput handleChange={handlePageChange} id={`${i}-${1}`} type='number' label='' size='small' margin='0 10px 0 10px'/>
                <CustomInput handleChange={handlePageChange} id={`${i}-${2}`} type='number' label='' size='small' margin='0 10px 0 10px'/>
            </ListContainer>);
        }
        return result;
    }

    return (
        <Box mt='0' width='98%' height='810px' backgroundColor={'#ecf0f1'}>
            <InfoContainer>
                <Row columns={"2fr 1.5fr 0.5fr"}>
                    <InputContainer value={props.volumeAmount} disabled={true} id={"권호수 선택"} width={"200px"} type={"text"} size={'large'} label='권호수 선택' contents={["001", "002", "003"]}/>
                    <InputContainer value={caseNum} handleChange={handleChange} id={"건수"} width={"200px"} labelWidth={'50px'} type={"number"} />
                </Row>
                <ListHeader columns={'1fr 1fr 1fr'} fontSize={'20pt'} weight={'700'} mb={'20px'}>
                    <div>첫 페이지</div>
                    <div>끝 페이지</div>
                    <div>페이지</div>
                </ListHeader>
                <div style={{width: '700px', height: '480px', overflowY: 'auto'}}>
                    {Repeat()}
                </div>
            </InfoContainer>
            <div style={{position:"absolute", bottom: '27px', right: '25px'}}>
                <CustomButton onClick={async() => {
                    await handleSave();
                    await props.caseSearch();
                    // props.setCurrentTab(()=>2);
                }} width='100px' height='40px' type='normal' margin='0 0 0 50px' color='#ffffff' backgroundColor='#50586C' content='저장'/>
                <CustomButton width='100px' height='40px' type='normal' margin='0 0 0 50px' color='#ffffff' backgroundColor='#50586C' content='삭제'/>
            </div>
        </Box>
    );
}

const ListHeader = styled('div')`
  display: grid;
  grid-template-columns: ${props => props.columns};
  font-size: 18pt;
  font-weight: 700;
  margin-top: 100px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 15px;
  background-color: #50586C;
  color: #ffffff;
  width: 600px;
`;

const ListContainer = styled('div')`
  display: grid;
  grid-template-columns: ${props => props.columns};
  font-size: 15pt;
  font-weight: 400;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 15px;
  background-color: #ecf0f1;
  cursor: pointer;
  width: 600px;
  &:hover {
    transform: scale(1.01);
  }
`;

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

const TableContainer = styled('div')`
  position: absolute;
  margin-top: 150px;
  & > div {
    margin-left: 10px;
  }
`;

export default Ginput;