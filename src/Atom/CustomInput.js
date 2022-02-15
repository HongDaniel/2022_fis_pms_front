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
                       sx={{width: props.width}}
                       variant="outlined"
                       type={"text"}
                       size={"small"}
            />
        )
    }
    else if(props.type==="number"){
        return (
            <TextField id="outlined-basic"
                       label={props.label}
                       sx={{width: props.width, m: props.margin}}
                       variant="outlined"
                       size={"small"}
                       name={props.name}
                       type={"number"}
                       size={props.size}
                       InputLabelProps={{
                           shrink: true,
                       }}
            />
        )
    }
    else if(props.type==="select"){
        return (
            <FormControl style={{width: props.width}} size="small">
                <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
                <Select
                    label={props.label}
                    variant="outlined"
                    name={props.name}
                    value={props.defaultValue}
                    sx={{width: props.width}}
                    onChange={props.handleChange}
                >
                    {props.contents.map((content,idx) => {
                        return <MenuItem key={idx} value={content}>{content}</MenuItem>;
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
                    onChange={props.handleChange}
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