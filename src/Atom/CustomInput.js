import React from 'react';
import {FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Select, TextField} from "@mui/material";

// text number select
const CustomInput = (props) => {
    if(props.type==="text"){
        return (
            <TextField id="outlined-basic"
                       label={props.label}
                       variant="outlined"
                       name={props.name}
                       type={"text"}

            />
        )
    }
    else if(props.type==="number"){
        return (
            <TextField id="outlined-basic"
                       label={props.label}
                       variant="outlined"
                       name={props.name}
                       type={"number"}
                       InputLabelProps={{
                           shrink: true,
                       }}
            />
        )
    }
    else if(props.type==="select"){
        return (
            <FormControl style={{width: props.width}} size="small">
                {/*<InputLabel id="demo-simple-select-label">{props.labelContent}</InputLabel>*/}
                <Select
                    name={props.name}
                    value={props.defaultValue}
                    name={props.name}
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