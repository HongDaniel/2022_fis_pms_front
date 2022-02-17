import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CustomButton from "../Atom/CustomButton";
import Gitems from "./Gitems";
import InputContainer from "./InputContainer";
import CustomInput from "../Atom/CustomInput";
import Box from "../Atom/Box";
import {styled} from "@mui/system";

export default function AutoInfoToggle() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <CustomButton onClick={handleClick} width='300px' height='40px' type='normal' margin='5px' color='#ffffff' backgroundColor='#50586C' content='자동 정보 확인 >>'/>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Box width='850px' height='250px' backgroundColor={'white'}>
                    <InfoContainer>
                        <Row columns={"1fr"}>
                            <InputContainer className={'page'} id={"생산기관명"} width={"100px"} type={"text"}/>
                        </Row>
                        <Row columns={"1fr 1fr"}>
                            <InputContainer  id={"생산년도"} width={"200px"} type={"number"}/>
                            <InputContainer  id={"종료년도"} width={"200px"} labelWidth={'90px'} type={"number"}/>
                        </Row>
                        <Row columns={"1.2fr 1fr 1fr"}>
                            <InputContainer  id={"현재 권호수"} width={"100px"} type={"number"}/>
                            <InputContainer  id={"건 수"} width={"100px"} labelWidth={'50px'} type={"number"}/>
                            <InputContainer  id={"쪽 수"} width={"100px"} labelWidth={'50px'} type={"number"}/>
                        </Row>
                    </InfoContainer>
                </Box>
            </Popover>
        </div>
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