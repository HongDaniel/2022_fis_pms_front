import React from 'react';
import styled from "styled-components";

const MainBox = styled.div`
  width: 2250px;
  height: ${props => props.height};
  margin: 35px 15px;
  border: 3px solid #eee;
  border-radius: 12px;
  position: relative;
  z-index: 1;
`;

export default MainBox;