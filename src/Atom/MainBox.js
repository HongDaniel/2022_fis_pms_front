import React from 'react';
import styled from "styled-components";

const MainBox = styled.div`
  background-color: white;
  width: 1000px;
  height: 400px;
  border: #eee solid 2px;
  margin: 10px;
  position: relative;
`

const H1 = styled.h1`
  text-align: left;
  margin-top: -10px;
  margin-bottom: 10px;
  margin-left: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 25px;
`

const Span = styled.span`
  background-color: white;
`

export const add = (text) => {
    return (<H1><Span>{text}</Span></H1>)
}

export default MainBox;