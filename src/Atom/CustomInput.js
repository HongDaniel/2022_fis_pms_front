import React from 'react';
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField
} from "@mui/material";

// text number select
const CustomInput = (props) => {
    if(props.type==="text"){
        return (
            <TextField id= {props.id}
                       label={props.label}
                       sx={{width: props.width, m: props.margin, boxSizing:'border-box'}}
                       variant="outlined"
                       type={"text"}
                       size={props.size}
                       defaultValue={props.defaultValue}
                       value={props.value}
                       onChange={props.handleChange}
                       onKeyPress={props.onKeyPress}
                       disabled={props.disabled}
                       InputProps={props.InputProps}
            />
        )
    }
    else if(props.type==="password"){
        return (
            <TextField id= {props.label}
                       label={props.label}
                       sx={{width: props.width, m: props.margin, boxSizing:'border-box'}}
                       variant="outlined"
                       type={"password"}
                       size={props.size}
                       error={props.isSame===false && props.label==='비밀번호확인'}
                       helperText={props.isSame===false && "비밀번호가 일치하지 않습니다."}
                       defaultValue={props.defaultValue}
                       value={props.value}
                       onChange={props.handleChange}
                       onKeyPress={props.onKeyPress}
                       disabled={props.disabled}
            />
        )
    }
    else if(props.type==="number"){
        const maxLength=props.maxLength||30;
        return (
            <TextField
                       id= {props.id}
                       disabled={props.disabled}
                       label={props.label}
                       sx={{width: props.width, m: props.margin, boxSizing:'border-box'}}
                       variant="outlined"
                       size={"small"}
                       name={props.name}
                       value={props.value}
                       defaultValue={props.defaultValue}
                       type={"number"}
                       onChange={props.handleChange}
                       onKeyPress={props.onKeyPress}
                       onInput = {(e) =>{
                           e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0,maxLength)
                       }}
                       InputLabelProps={{
                           shrink: true,
                       }}
            />
        )
    }
    else if(props.type==="select"){
        return (
            <FormControl style={{width: props.width}} id= {props.label} size="small">
                <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
                <Select
                    disabled={props.disabled}
                    label={props.label}
                    variant="outlined"
                    name={props.label}
                    value={props.defaultValue}
                    // defaultValue={props.defaultValue}
                    sx={{width: props.width}}
                    onKeyPress={props.onKeyPress}
                    onChange={props.handleChange}
                >
                    {props.contents.map((content,idx) => {
                        // console.log(props.id);
                        if(content){
                        return <MenuItem key={idx} value={content}>{content}</MenuItem>;
                        }
                    })}
                </Select>
            </FormControl>
        )
    }
    else if(props.type==="radio"){
        return(
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">{props.label}</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={props.defaultValue}
                    name={props.name}
                    sx={{width: props.width}}
                    onKeyPress={props.onKeyPress}
                    onChange={props.handleChange}
                    row
                >
                    {props.contents.map((content,idx)=>{
                        return <FormControlLabel value={content} control={<Radio />} label={content} />
                    })}
                </RadioGroup>
            </FormControl>
        )
    }
};

export default CustomInput;