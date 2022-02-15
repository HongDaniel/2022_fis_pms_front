import React from 'react';
import CustomInput from "../Atom/CustomInput";
import styled from "styled-components";

const InputContainer = (props) => {
    console.log(props.labelColor)
    return (
        <Container labelColor={props.labelColor}>
            <label for={props.id} >* {props.id}</label>
            <CustomInput type={props.type} label={props.id} width={props.width} id={props.id}/>
        </Container>
    );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > label {
    margin-right: 25px;
    width: 125px;
    color: ${(props)=> props.labelColor};
    font-size: 23px;
  }

`;
export default InputContainer;