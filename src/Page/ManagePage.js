import React, {useState} from 'react';
import styled from "styled-components";
import Container from "../Atom/Container";

const ManagePage = () => {
    const [val,setVal] = useState('badasdasd')
    const handleChange=(e)=>{
        setVal((e.target.value))
    }
    return (
        <Container>

        </Container>
    );
};
export default ManagePage;