import React, {useState} from 'react';
import LoginForm from "../Molecule/LoginForm";

function LoginTemplate(props) {
    const [loginInfo, setLoginInfo] = useState({
        u_nickname: "",
        u_pwd: ""
    });

    const handleInputFormChange = (e) => {
        const {value, name} = e.target; // 우선 e.target 에서 name 과 value 를 추출{
        setLoginInfo({
            ...loginInfo, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    /*
        날짜: 2022/01/19 3:43 오후
        작성자: 한명수
        작성내용: login 버튼을 눌렀을 때 작동하는 함수
    */

    return (
        <div>
            <LoginForm onChangeFunction={handleInputFormChange}/>
        </div>
    );
}

export default LoginTemplate;