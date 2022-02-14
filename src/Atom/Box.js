import React from 'react';
import styled from "styled-components";

const Div = styled.div`
  background-color: ${props => props.backgroundColor};
  width: ${props => props.width};
  height: ${props => props.height};
  box-shadow: 2px 2px 5px grey;
  border: grey solid 1px;
`

function Box(props) {
    const { width, height, backgroundColor } = props;
    return (
        <Div backgroundColor={backgroundColor} width={width} height={height} />
    );
}


export default Box;