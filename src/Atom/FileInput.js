import React from 'react';
import styled from "styled-components";

function FileInput(props) {
    return (
        <div>
            <Input type={'file'}/>
        </div>
    );
}

const Input = styled.input`
  background-color: #DCE2F0;
  color: #50586C;
`

export default FileInput;