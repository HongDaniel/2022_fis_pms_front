import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import logo from "../Media/logo.png";
import {BiUser} from "react-icons/bi";
import {RiLockPasswordLine} from "react-icons/ri";
import {Style} from "../Style";
import CustomButton from "../Atom/CustomButton";
import {useNavigate} from "react-router-dom";
import SignUpForm from "../Organism/SignUpForm";
import Modal from "@mui/material/Modal";
import axios from "axios";
import {useRecoilState} from "recoil";
import {isLogedIn, u_authority, userInfo} from "../store/LoginInfo";
import NetworkConfig from "../configures/NetworkConfig";

function LoginForm(props) {
    const [isModal, setIsModal] = useState(false);
    const [loginInfo, setLoginInfo] = useRecoilState(userInfo);
    const [loginState, setLoginState] = useRecoilState(isLogedIn);
    const [authoriy, setAuthority] = useRecoilState(u_authority);
    const handleOpen = () => setIsModal(true);
    const handleClose = () => setIsModal(false);
    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();
        await axios.post('http://localhost:8080/login', loginInfo, {withCredentials: true})
            .then(res => { // 로그인에 성공했을 경우
                setLoginState(true);
                setAuthority(res.data.authority);
                navigate('/preinspect');
                // console.log(res.data);
            })
            .catch(() => window.alert("아이디나 비밀번호가 일치하지 않습니다."));
    }

    const handleChange = (e) =>{ // 로그인 입력창 정보
        if(e.target.name==="nickname"){
        setLoginInfo({...loginInfo,"nickname":e.target.value})
        }
        else{
            setLoginInfo({...loginInfo,"password":e.target.value})
        }
    }

    return (
        <Main>
            <Container>
                <img src={logo}/> {/*회사로고*/}
                <div>
                    <form>
                        <InputRow> {/*아이디*/}
                            <div className="icon"><BiUser/></div>
                            <input required name="nickname" id="username" type="text" placeholder="아이디"
                                   onChange={handleChange}/>
                        </InputRow>
                        <InputRow> {/*비밀번호*/}
                            <div className="icon"><RiLockPasswordLine/></div>
                            <input required name="password" id="password" type="password" placeholder="비밀번호"
                                   onChange={handleChange} autoComplete={"on"}/>
                        </InputRow>
                    </form>
                    <BtnContainer>
                        <CustomButton type="normal" width="100%" height="40px" backgroundColor={Style.color2}
                                      color={Style.color1} borderRadius={"10px"} content={"로그인"} onClick={handleLogin}/>
                        <CustomButton type="normal" width="100%" height="40px" backgroundColor={Style.color2}
                                      color={Style.color1} borderRadius={"10px"} content={"회원가입"}
                                      onClick={handleOpen}/>
                    </BtnContainer>
                </div>
            </Container>
            {isModal && // 회원가입 창
                <Background>
                    <SignUpForm handleClose={handleClose}/>
                </Background>}
        </Main>
    );
}
// style
const Main = styled.div`
  width: 100%;
  height: 100%;
  & img { /*fis logo*/
    position: relative;
    width: 200px;
    margin: 50px 0;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 550px;
  border: 1px solid #dadada;
  box-shadow: 1.5px 2px #dadada;
  border-radius: 20px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  font-size: 20px;
  padding: 20px;
  background-color: ${Style.color1};
  & a {
    text-decoration: none;
  }
`;
const InputRow = styled.div` // 입력창
  display: grid;
  grid-template-columns: 1.2fr 9fr;
  border: 1px solid #dadada;
  margin-bottom: 20px;
  width: 280px;
  height: 40px;
  border-radius: 6px;
  background-color: #fff;
  & .icon {
    justify-self: center;
    align-self: center;
    width: 20px;
    height: 20px;
    color: #8a8a8a;
  }
  & input {
    width: 94.5%;
    justify-self: start;
    color: #222;
    box-sizing: content-box;
    border: none;
    border-left: 1px solid #dadada;
    padding-left: 10px;
  }
`;
const BtnContainer = styled.div`
& button {
  margin-bottom: 20px;
}
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 3;
`;

export default LoginForm;