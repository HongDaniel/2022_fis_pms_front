import React, {useState} from 'react';
import LoginForm from "../Molecule/LoginForm";
import axios from "axios";

function LoginTemplate(props) {
    const [loginInfo, setLoginInfo] = useState({
        u_nickname: "",
        u_pwd: ""
    });
    const onLogin = () => {
        axios.post('http://3.38.19.119:8080/login', {
            nickname: loginInfo.u_nickname,
            password: loginInfo.u_pwd,
        }).then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
    const handleInputFormChange = (e) => {
        const {value, name} = e.target; // 우선 e.target 에서 name 과 value 를 추출{
        setLoginInfo({
            ...loginInfo, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };
    return (
        <div>
            <LoginForm onClickFunction={onLogin} onChangeFunction={handleInputFormChange}/>
        </div>
    );
}

export default LoginTemplate;