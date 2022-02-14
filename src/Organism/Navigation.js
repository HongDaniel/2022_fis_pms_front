import React from 'react';
import CustomButton from "../Atom/CustomButton";
import {Container} from "@mui/material";

const Navigation = () => {
    return (
        <Container>
            <CustomButton type={"reverse"} height={"50px"} backgroundColor={"#eee"} content={"button"}/>
        </Container>
    );
};

export default Navigation;