import React from 'react';
import CustomInput from "../Atom/CustomInput";
import styled from "styled-components";

function ManageContainer(props) {
    return (
        <div style={{width: '500px'}}>
            <Row columns={"1.1fr 1fr 1fr 0.7fr 1fr"}>
                <Span>{props.name}</Span>
                <Label>계획(권)</Label>
                <CustomInput width={'80px'} type={"text"} />
                <Label>인력</Label>
                <CustomInput width={'80px'} type={"text"} />
            </Row>
        </div>
    );
}

const Span = styled.span`
  display: block;
  font-weight: bold;
  font-size: 12pt;
  margin: 10px;
`;

const Label = styled.label`
  font-size: 12pt;
  margin: 10px;
`;

const Row = styled('div')`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  position: relative;
  margin: 16px;
  & > div {
    & > label {
      font-size: 14pt;
    }
  }
`;

export default ManageContainer;