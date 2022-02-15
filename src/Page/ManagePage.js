import React, {useState} from 'react';
import styled from "styled-components";

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
const Container = styled.div`
`;
export default ManagePage;