import React, {useState} from 'react';
import CustomInput from "../Atom/CustomInput";

const ManagePage = () => {
    const [val,setVal] = useState('badasdasd')
    const handleChange=(e)=>{
        setVal((e.target.value))
    }
    return (
        <div>
        </div>
    );
};

export default ManagePage;