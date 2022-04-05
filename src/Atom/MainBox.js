import React from 'react';
import styled from "styled-components";

const MainBox = styled.div`
  width: ${props=>props.width||"95%"};
  height: ${props => props.height};
  margin: 35px 10px;
  border: 3px solid #eee;
  border-radius: 12px;
  position: relative;
  z-index: 1;
`;

export default MainBox;