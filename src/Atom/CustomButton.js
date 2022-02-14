import React from 'react';
import {Button} from "@mui/material";

/*
날짜: 2022/02/14 11:38 AM
작성자: 정도식
작성내용: Button 컴포넌트
*/

const CustomButton = (props) => {
    if (props.type === "normal") {
        return (
            <Button
                variant="contained"
                style={{
                width: props.width,
                height: props.height,
                color: props.color,
                borderRadius: props.borderRadius,
                backgroundColor: props.backgroundColor,
                border: props.border,
                fontSize:props.fontSize,
                boxSizing:"border-box",
                padding:props.padding,
                margin:props.margin,
            }}>
                {props.content}
            </Button>
        )
    } else if (props.type === "reverse") {
        return (
            <Button
                variant="outlined"
                style={{
                width: props.width,
                height: props.height,
                color: props.color,
                borderRadius: props.borderRadius,
                backgroundColor: props.backgroundColor,
                border: props.border,
                fontSize:props.fontSize,
                boxSizing:"border-box",
                padding:props.padding,
                margin:props.margin,
            }}>
                {props.content}
            </Button>
        )
    }

};

export default CustomButton;