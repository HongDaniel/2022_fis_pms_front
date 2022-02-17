import React from 'react';
import InputContainer from "./InputContainer";
import CustomButton from "../Atom/CustomButton";
import Table from "../Atom/Table";
import {columns, rows} from "../Page/DocumentExportPage";
import Box from "../Atom/Box";
import {styled} from "@mui/system";

function Ginput(props) {
    return (
        <Box mt='0' width='1030px' height='810px' backgroundColor={'#ecf0f1'}>
            <InfoContainer>
                <Row columns={"2fr 1.5fr 0.5fr"}>
                    <InputContainer id={"권호수 선택"} width={"200px"} type={"select"} label='권호수 선택' contents={["001", "002", "003"]}/>
                    <InputContainer id={"건수"} width={"200px"} labelWidth={'50px'} type={"text"} />
                    <CustomButton width='100px' height='40px' type='normal' margin='0 0 0 50px' color='#ffffff' backgroundColor='#50586C' content='쪽수 입력'/>
                </Row>
            </InfoContainer>
            <TableContainer>
                <Table width='1000px' height='380px' headerBG='#50586C' cellBG='#DCE2F0' rows={rows} columns={columns} />
            </TableContainer>
        </Box>
    );
}


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