import React, {useState} from 'react';
import LoginForm from "../Molecule/LoginForm";
import axios from "axios";

function LoginTemplate(props) {
    return (
        <div>
            <LoginForm/>
        </div>
    );
}

export default LoginTemplate;