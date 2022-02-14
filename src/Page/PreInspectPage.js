import React from 'react';
import Table from "../Atom/Table";
import Box from "../Atom/Box";
import styled from "styled-components";
import Navigation from "../Organism/Navigation";

const PreInspectPage = () => {
    return (
        <Container>
            PreInspectPage
            <Navigation/>
            <Box width='80%' height='400px' backgroundColor='white'>
                <Table />
            </Box>
        </Container>
    );
};
const Container = styled.div`

`;
export default PreInspectPage;