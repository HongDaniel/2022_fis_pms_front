import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import Container from "../Atom/Container";
import Navigation from "../Organism/Navigation";
import MainBox from "../Atom/MainBox";
import Title from "../Atom/Title";
import Box from "../Atom/Box";
import CustomButton from "../Atom/CustomButton";
import {Cropper} from "react-cropper";
import "cropperjs/dist/cropper.css";
import rotate_left from "../Media/rotate_left.png"
import rotate_right from "../Media/rotate_right.png"
import {Route} from "react-router-dom";

const ScanPage = () => {
    const [imgSrc, setImgSrc] = useState([]);
    const [selectedImg, setSelectedImg] = useState('');

    const uploadImg = (e) => {
        const images = e.target.files;
        let urls = []
        for (let i = 0; i < images.length; i++) {
            let reader = new FileReader();
            reader.readAsDataURL(images[i]);
            reader.onload = () => {
                const data = (reader.result.toString());
                urls.push(data);
                setImgSrc([...urls]);
            }
        }
    }
    const handleClick = (e) => {
        setSelectedImg(e.target.src);
    }
    const handleCropChange = () =>{
        console.log("crop done");
    }
    const RotateLeft = () =>{
        console.log("Rotate left")
    }
    const RotateRight = () =>{
        console.log("Rotate right")
    }
    return (
        <Container>
            <Navigation/>
            <MainBox height={"1220px"}>
                <Title>스캔 및 보정</Title>
                <BoxContainer>
                    <Box width='2200px' height='190px' backgroundColor='#ecf0f1'>
                        <Content>
                            <div>
                                <label for={"route"}>경로</label>
                                <input type={"text"} style={{width: "320px"}} id={"route"}/>
                                <input type="file"
                                       id="uploadImg" name="uploadImg"
                                       accept="image/*"
                                       multiple={"multiple"}
                                       onChange={uploadImg}
                                />
                            </div>
                            <div>
                                <label htmlFor={"box"}>박스</label>
                                <select id={"box"} style={{width: "65px", textAlign: "center"}}>
                                    <option value={"1"}>1</option>
                                    <option value={"2"}>2</option>
                                    <option value={"3"}>3</option>
                                    <option value={"4"}>4</option>
                                    <option value={"5"}>5</option>
                                </select>
                                <label htmlFor={"box"}>레이블</label>
                                <select id={"box"} style={{width: "65px", textAlign: "center"}}>
                                    <option value={"1"}>1</option>
                                    <option value={"2"}>2</option>
                                    <option value={"3"}>3</option>
                                    <option value={"4"}>4</option>
                                    <option value={"5"}>5</option>
                                </select>
                            </div>
                            <CustomButton type={"normal"} name={"완료"} width={"310px"} height={"85px"} fontSize={"32px"}
                                          borderRadius={"25px"} content={"보정 검수 완료"}/>

                        </Content>
                    </Box>
                    <Bottom>
                        <Box width='700px' height='940px' backgroundColor='#ecf0f1'>
                            <h3>이미지 리스트</h3>
                            <ImageContainer onClick={handleClick}>
                                {imgSrc.map((src, idx) => {
                                    return (
                                        <img src={src} alt={"img"} key={idx}/>
                                    )
                                })}
                            </ImageContainer>
                        </Box>
                        <Box width='1400px' height='940px' backgroundColor='#ecf0f1' id={"selectedImg"}>
                            {selectedImg?
                                <div>
                                <Cropper
                                style={{maxWidth: "1100px", maxHeight: "900px",marginTop:"20px",marginLeft:"50px"}}
                                src={selectedImg}
                                aspectRatio={16/9}
                                guides={true}
                                background={false}
                                responsive={true}
                                cropend={handleCropChange}
                                />
                                    <div className={"rotate"}>
                                    <img src={rotate_left} onClick={RotateLeft}/>
                                    <img src={rotate_right} onClick={RotateRight}/>
                                    </div>
                                    <CustomButton type={"normal"} name={"완료"} width={"150px"} height={"50px"} fontSize={"24px"}
                                                  borderRadius={"5px"} content={"수정완료"} id={"cropDone"}/>
                                </div>
                                :null}

                        </Box>
                    </Bottom>
                </BoxContainer>
            </MainBox>
        </Container>
    );
};
//style
const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;

  & > div {
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 650px;
  justify-items: center;

  & img {
    object-fit: cover;
    width: 280px;
    height: 300px;
    margin-bottom: 50px;
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 190px;
  font-size: 25px;

  & > div {
    display: flex;
    height: 80px;
    margin-left: 50px;
    align-items: center;
  }

  & label {
    margin-right: 15px;
  }

  & input {
    margin-right: 10px;
    box-sizing: border-box;
    height: 27px;
  }

  & select {
    margin-right: 50px;
  }

  & > button {
    position: absolute;
    right: 155px;
    bottom: 50px;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  width: 2200px;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;

    & h3 {
      font-size: 35px;
      font-weight: 500;
    }
  }
  
 
  
  & #selectedImg {
    display: unset;
    position: relative;
    
    & img {
      margin-top: 20px;
      width: 1100px;
      height: 900px;
    }
    
    & .rotate { //회전버튼
      position: absolute;
      top: 25px;
      right: 38px;
      
      &>img{
        width: 50px;
        height: 50px;
        margin-right: 25px;
        cursor: pointer;
      }
    }
    
    & button { //수정완료 버튼
      position: absolute;
      top:47.5%;
      right: 3.3%;
    }
  }
`;
export default ScanPage;
