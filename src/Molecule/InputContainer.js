import React from 'react';
import CustomInput from "../Atom/CustomInput";
import styled from "styled-components";

const InputContainer = (props) => {
    return (
        <Container labelWidth={props.labelWidth} labelColor={props.labelColor}>
            <label style={{fontSize: props.fontSize}} htmlFor={props.id} >* {props.id}</label>
            <CustomInput type={props.type}
                         label={props.id}
                         width={props.width}
                         height={props.height}
                         id={props.id}
                         defaultValue={props.defaultValue===null?"":props.defaultValue}
                         contents={props.contents}
                         size={props.size}
                         handleChange={props.handleChange}
                         onKeyPress={props.onKeyPress}
                         maxLength={props.maxLength}
            />
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > label {
    margin-right: 25px;
    width: ${(props) => props.labelWidth || '140px'};
    color: ${(props)=> props.labelColor};
    font-size: 23px;
  }

`;
export default InputContainer;