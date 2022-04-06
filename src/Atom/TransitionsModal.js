import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomButton from "./CustomButton";
import OfficeSearch from "../Organism/OfficeSearch";
import CitemSearch from "../Organism/CitemSearch";
import GitemSearch from "../Organism/GitemSearch";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 2400,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll',
};

export default function TransitionsModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <CustomButton onClick={()=>{
                // axios.get("http://${NetworkConfig.networkAddress}:8080/index/label")
                //     .then((res) => console.log(res.data));
                handleOpen();
            }} type='normal' margin='0 0 0 10px' width='120px' height='40px' color='#ffffff' backgroundColor='#50586C' content={props.content}/>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {props.content === '기관코드 찾기' ?
                            <OfficeSearch handleClose={handleClose} currentTab={props.currentTab} oInfo={props.oInfo} setOInfo={props.setOInfo}/>
                            :
                            props.currentTab === 0 ?
                                <CitemSearch keyword={props.keyword} handleClose={handleClose} currentTab={props.currentTab} />
                                :
                                <GitemSearch keyword={props.keyword} handleClose={handleClose} currentTab={props.currentTab} />
                        }
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}