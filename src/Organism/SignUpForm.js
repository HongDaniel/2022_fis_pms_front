import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import InputContainer from "../Molecule/InputContainer";
import {Style} from "../Style";
import CustomButton from "../Atom/CustomButton";
import axios from "axios";

const SignUpForm = ({handleClose}) => {
    const [signUpInfo, setSignUpInfo] = useState(
        {
            "nickname": "",
            "password": "",
            "w_address": "",
            "w_authority": "",
            "w_name": "",
            "w_tel": ""
        });
    const [isSame, setIsSame] = useState();
    const signUpForm = useRef(null);

    const handleChange = (e) =>{ // 입력창에 인풋이 되었을 때
        const type = e.target.id;
        const text = e.target.value;
        switch (type) {
            case '아이디':
                setSignUpInfo({...signUpInfo, "nickname": text});
                break
            case '비밀번호':
                setSignUpInfo({...signUpInfo, "password": text});
                break
            case '비밀번호확인':
                if(signUpInfo.password===text) {setIsSame(true)}
                else {setIsSame(false)}
                break
            case '주소':
                setSignUpInfo({...signUpInfo, "w_address": text});
                break
            case '권한' && undefined: // e.target이 다르기 때문에 처리
                text==='관리자'?setSignUpInfo({...signUpInfo, "w_authority": 'ADMIN'}):setSignUpInfo({...signUpInfo, w_authority: 'WORKER'})
                break
            case '이름':
                setSignUpInfo({...signUpInfo, "w_name": text});
                break
            case '전화번호':
                setSignUpInfo({...signUpInfo, "w_tel": text});
                break
        }
    }

    useEffect(() => {
        console.log(signUpInfo);
    }, [signUpInfo]);

    const handleSignUp = async () => {
        const values = Object.values(signUpInfo);
        if(values.includes("")) { // 정보가 모두 입력되지 않았을 때
            window.alert("모든 정보를 입력해주세요!");
        }
        else if(isSame===false) { // 비밀번호가 일치하지 않을 때
            window.alert("비밀번호가 일치하지 않습니다!");
        }
        else { // 정상적으로 처리되었을 때
            await axios.post('http://localhost:8080/worker/signup', signUpInfo) // 회원가입
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        }
    }

    const handleCancel= () =>{
        handleClose();
    };

    return (
        <Container>
            <Modal>
                <div className={"signupFont"}>회원가입</div>
                <Inputs>
                    <InputContainer id={"아이디"} width={"320px"} height={"30px"} type={"text"}
                                    handleChange={handleChange}/>
                    <InputContainer id={"비밀번호"} width={"320px"} type={"password"} handleChange={handleChange}/>
                    <InputContainer id={"비밀번호확인"} width={"320px"} type={"password"} handleChange={handleChange}
                                    isSame={isSame}/>
                    <InputContainer id={"주소"} width={"320px"} type={"text"} handleChange={handleChange}/>
                    <InputContainer id={"권한"} width={"320px"} type={"select"} contents={["관리자", "일반직원"]}
                                    handleChange={handleChange}/>
                    <InputContainer id={"이름"} width={"320px"} type={"text"} handleChange={handleChange}/>
                    <InputContainer id={"전화번호"} width={"320px"} type={"text"} handleChange={handleChange}/>
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
  width: 700px;
  height: 800px;
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
  width: 75%;
  display: flex;
  justify-content: space-between;
`;
export default SignUpForm;