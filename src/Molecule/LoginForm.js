import React, {useState} from 'react';
import styled from "styled-components";
import logo from "../Media/logo.png";
import {BiUser} from "react-icons/bi";
import {RiLockPasswordLine} from "react-icons/ri";
import {Style} from "../Style";
import CustomButton from "../Atom/CustomButton";
import {useNavigate} from "react-router-dom";
import SignUpForm from "../Organism/SignUpForm";
import Modal from "@mui/material/Modal";

function LoginForm(props) {
    const navigate = useNavigate();
    const [isModal, setIsModal] = useState(false);
    const handleOpen = () => setIsModal(true);
    const handleClose = () => setIsModal(false);

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log("login");

    }
    const handleSignup = (e) =>{
        e.preventDefault();
        console.log("signup");
    }
    return (
        <Main>
            <Container>
                <img src={logo}/> {/*회사로고*/}
                <div>
                    <InputRow> {/*아이디*/}
                        <div className="icon"><BiUser/></div>
                        <input required name="u_nickname" id="username" type="text" placeholder="아이디"
                               onChange={props.onChangeFunction}/>
                    </InputRow>
                    <InputRow> {/*비밀번호*/}
                        <div className="icon"><RiLockPasswordLine/></div>
                        <input required name="u_pwd" id="password" type="password" placeholder="비밀번호"
                               onChange={props.onChangeFunction}/>
                    </InputRow>
                    <BtnContainer>
                        <CustomButton type="normal" width="100%" height="40px" backgroundColor={Style.color2}
                                      color={Style.color1} borderRadius={"10px"} content={"로그인"} onClick={handleLogin}/>
                        <CustomButton type="normal" width="100%" height="40px" backgroundColor={Style.color2}
                                      color={Style.color1} borderRadius={"10px"} content={"회원가입"}
                                      onClick={handleOpen}/>
                        <Modal
                            open={isModal}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <SignUpForm handleClose={handleClose}/>
                        </Modal>
                    </BtnContainer>
                </div>
            </Container>
        </Main>
    );
}
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

const InputRow = styled.div`
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
export default LoginForm;