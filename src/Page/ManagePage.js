import React, {useState} from 'react';
import styled from "styled-components";
import Container from "../Atom/Container";
import Navigation from "../Organism/Navigation";
import Title from "../Atom/Title";
import MainBox from "../Atom/MainBox";
import ManageTabs from "../Atom/ManageTabs";

const ManagePage = () => {
    const [val,setVal] = useState('badasdasd')
    const handleChange=(e)=>{
        setVal((e.target.value))
    }
    return (
        <Container>
            <Navigation />
            <MainBox height={"1250px"}>
                <Title> 작업장 관리 </Title>
                <div style={{margin: '40px 0 0 10px'}}>
                    <ManageTabs />
                </div>
            </MainBox>
        </Container>
    );
};
export default ManagePage;