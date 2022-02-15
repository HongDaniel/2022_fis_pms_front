import React from 'react';
import styled from "styled-components";
import Container from "../Atom/Container";
import Navigation from "../Organism/Navigation";
import MainBox from "../Atom/MainBox";
import Title from "../Atom/Title";
import Box from "../Atom/Box";
import Table from "../Atom/Table";

const IndexingPage = () => {
    return (
        <Container>
            <Navigation />
            <MainBox height={'1250px'}>
                <Title>색인</Title>
                <div style={{margin: '50px 0 0 15px'}}>
                    <Box width='40vw' height='350px' backgroundColor='white'>
                    </Box>
                </div>
                <div style={{margin: '50px 0 0 15px'}}>
                    <Box width='40vw' height='350px' backgroundColor='white'>
                    </Box>
                </div>
                <div style={{margin: '50px 0 0 15px'}}>
                    <Box width='40vw' height='350px' backgroundColor='white'>
                    </Box>
                </div>
            </MainBox>
        </Container>
    );
};
export default IndexingPage;