import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import InputContainer from "../Molecule/InputContainer";
import {Style} from "../Style";
import CustomButton from "../Atom/CustomButton";

const SignUpForm = ({handleClose}) => {
    const [signUpInfo, setSignUpInfo] = useState(
        {
            nickname: "",
            password: "",
            w_address: "",
            w_authority: "",
            w_name: "",
            w_tel: ""
        });
    const handleChange = (e) =>{
        const type = e.target.id;
        const text = e.target.value;
        console.log(e.target);
        console.log(text);
        switch (type) {
            case '아이디':
                setSignUpInfo({...signUpInfo,nickname: text});
                break
            case '비밀번호':
                setSignUpInfo({...signUpInfo,password: text});
                break
            case '주소':
                setSignUpInfo({...signUpInfo,w_address: text});
                break
            case '권한':
                setSignUpInfo({...signUpInfo,w_authority: text});
                break
            case '이름':
                setSignUpInfo({...signUpInfo,w_name: text});
                break
            case '전화번호':
                setSignUpInfo({...signUpInfo,w_tel: text});
                break
        }
    }

    // useEffect(() => {
    //     console.log(signUpInfo);
    // }, [signUpInfo]);

    const handleSignUp = () => {
        console.log("회원가입");
    }

    const handleCancel= () =>{
        handleClose();
    };

    return (
        <Container>
            <Modal>
                <div className={"signupFont"}>회원가입</div>
                <Inputs>
                    <InputContainer id={"아이디"} width={"290px"} height={"30px"} type={"text"} handleChange={handleChange}/>
                    <InputContainer id={"비밀번호"} width={"290px"} type={"text"} handleChange={handleChange}/>
                    <InputContainer id={"주소"} width={"290px"} type={"text"} handleChange={handleChange}/>
                    <InputContainer id={"권한"} width={"290px"} type={"select"} contents={["관리자","일반직원"]} handleChange={handleChange}/>
                    <InputContainer id={"이름"} width={"290px"} type={"text"} handleChange={handleChange}/>
                    <InputContainer id={"전화번호"} width={"290px"} type={"text"} handleChange={handleChange}/>
                    <BtnContainer>
                    <CustomButton type={"normal"} name={"회원가입"} width={"180px"} height={"55px"} fontSize={"22px"}
                                  borderRadius={"25px"} content={"회원가입"} backgroundColor={Style.color2}
                                  onClick={handleSignUp}/>
                    <CustomButton type={"normal"} name={"취소"} width={"180px"} height={"55px"} fontSize={"22px"}
                                  borderRadius={"25px"} content={"취소"} backgroundColor={Style.color2}
                                  onClick={handleCancel}/>
                    </BtnContainer>
                </Inputs>
            </Modal>
        </Container>
    );
};

//style
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 600px;
  height: 700px;
  background-color: #fff;
  border-radius: 10px;
  
  & .signupFont {
    font-size: 40px;
    font-weight: 550;
    margin: 30px 0;
    text-align: center;
  }
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
& div {
  margin-bottom: 5px;
}
& button {
  margin: 20px 20px;
}
`;

const BtnContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;
export default SignUpForm;