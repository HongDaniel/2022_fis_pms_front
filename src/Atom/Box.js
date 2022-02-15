import React from 'react';
import styled from "styled-components";

const Box = styled.div`
  background-color: ${props => props.backgroundColor};
  width: ${props => props.width};
  height: ${props => props.height};
  box-shadow: 2px 2px 5px grey;
  border: grey solid 1px;
  margin: 10px;
  position: relative;
`


export default Box;