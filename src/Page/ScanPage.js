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
import {Style} from "../Style";
import axios from "axios";
import NetworkConfig from "../configures/NetworkConfig";
import { Autocomplete } from '@mui/material';
import {TextField} from "@mui/material";
import {fid_maxnum} from "../store/dummy/fid_maxnum";


const ScanPage = () => {
    const [selectedImg, setSelectedImg] = useState({});
    const [croppedImgSrc, setCroppedImgSrc] = useState(null);
    const [croppedImgList, setCroppedImgList] = useState([]);
    const [isPreview, setIsPreview] = useState(false);
    const [previewText,setPreviewText]= useState("미리보기");
    const [fidMaxnum,setFidMaxnum] = useState({fid:0,maxNum:0});
    const [selectedIdx,setSelectedIdx]= useState();
    const cropperJS = useRef();

    // 이미지 리스트에서 사진을 선택했을 경우
    const handleClick = (e) => {
        const source = e.target.src;
        const i = parseInt(e.target.id);
        // console.log('id: '+i);
        setSelectedIdx(i);
        if(source) {
             // 몇 번째 사진인지 구한다
            setSelectedImg({src:source,idx:i});
            setCroppedImgSrc({img:source,idx:i}); // crop 이미지 초기값 설정
        }
    };

    //이미지를 변경했을 경우
    const handleCropChange = () => {
        const croppedData = cropperJS.current.cropper.getCroppedCanvas().toDataURL();
        setCroppedImgSrc({img:croppedData, idx: null} );
    }

    useEffect(() => {
        // console.log(croppedImgSrc)
    }, [croppedImgSrc]);


    // 수정완료 버튼을 눌렀을 경우
    const handleCropDone = () => {
            let tmp = croppedImgList.filter(el => el.idx !== selectedIdx);
            tmp.push({img:croppedImgSrc.img, idx: selectedIdx});
            setCroppedImgList(tmp);
    };

    // useEffect(()=>{
    //     console.log(croppedImgList);
    // },[croppedImgList])

    //좌로 90도 회전
    const RotateLeft = () => {
        cropperJS.current.cropper.rotate(-90);
        handleCropChange();
    }
    //우로 90도 회전
    const RotateRight = () => {
        cropperJS.current.cropper.rotate(90);
        handleCropChange();
    }
    // 미리보기 수정하기 버튼 변경하기
    const togglePreview = () => {
        console.log("toggled");
        setIsPreview((!isPreview));
        if(isPreview){
            setPreviewText("미리보기")
        }
        else{
            setPreviewText("다시수정")
        }
    }

    const handleSave = async () =>{ // 보정검수완료를 했을 경우
        console.log("검수완료");
        console.log(croppedImgList);
        // let formData = new FormData();
        // for(let i=1;i<=fidMaxnum.maxNum;i++) {
        //     formData.append(croppedImgList.)
        // }
        // await axios.post(`http://${NetworkConfig.networkAddress}:8080/images/modify?fileId=${fidMaxnum.fid}`)
        //     .then((res)=>{
        //         console.log(res);})
        //     .catch((err)=>{
        //         console.log(err);
        //     })
    }

    // image to Base64 string
    const toDataURL = (url) => fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.onerror = reject
            reader.readAsDataURL(blob)
        }));

    // 철번호를 선택할 때마다 이미지 리스트의 src를 변경
    useEffect(async () => {
        let srcs=[]
        for(let i=1; i<=fidMaxnum.maxNum;i++){
            await toDataURL(`http://${NetworkConfig.networkAddress}:8080/images/origin/${fidMaxnum.fid}/${i}`)
                .then(dataUrl => {
                    if(dataUrl) {
                    srcs.push(dataUrl);
                    setCroppedImgList((old)=>[...old,{img:dataUrl,idx:i}]); // 처음 받아올 때 croppedImgList에 dataurl추가
                    }
                });
        }
    }, [fidMaxnum]);

    return (
        <Container>
            <Navigation/>
            <MainBox height={"1220px"}>
                <Title>스캔 및 보정</Title>
                <BoxContainer>
                    <Box width='2200px' height='190px' backgroundColor={Style.color3}>
                        <Content>
                            <div>
                                <label htmlFor={"combo-box-demo"}>철번호</label>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={fid_maxnum}
                                    style={{backgroundColor: "#fff", marginLeft:"10px"}}
                                    sx={{width: 300}}
                                    placeholder={"철번호"}
                                    renderInput={(params) => < TextField {...params} label="철번호"/>}
                                    onChange={(event, value) => {
                                        setCroppedImgList([]);
                                        value&&setFidMaxnum({fid:value.label, maxNum:value.maxnum});
                                    }}
                                />

                                {/*
                                <label htmlFor={"uploadImg"} className="uploadImg">파일선택</label>
                                <input type="file"
                                       id="uploadImg"
                                       accept="image/*"
                                       multiple={"multiple"}
                                       onChange={uploadImg}
                                       onClick={getPicture}
                                       style={{display:"none"}}
                                />*/}
                            </div>
                            <div>
                                <label htmlFor={"box"}>박스</label>
                                <select id={"box"} style={{width: "65px", height: "30px", textAlign: "center", border:"1px solid #b5b5b5",borderRadius:"5px",fontSize:"20px"}}>
                                    <option value={"1"}>1</option>
                                    <option value={"2"}>2</option>
                                    <option value={"3"}>3</option>
                                    <option value={"4"}>4</option>
                                    <option value={"5"}>5</option>
                                </select>
                                <label htmlFor={"box"}>레이블</label>
                                <select id={"box"} style={{width: "65px", height: "30px", textAlign: "center", border:"1px solid #b5b5b5",borderRadius:"5px",fontSize:"20px"}}>
                                    <option value={"1"}>1</option>
                                    <option value={"2"}>2</option>
                                    <option value={"3"}>3</option>
                                    <option value={"4"}>4</option>
                                    <option value={"5"}>5</option>
                                </select>
                            </div>
                            <CustomButton type={"normal"} name={"완료"} width={"310px"} height={"85px"} fontSize={"32px"}
                                          borderRadius={"25px"} content={"보정 검수 완료"} onClick={handleSave}
                                          backgroundColor={Style.color2}
                            />

                        </Content>
                    </Box>
                    <Bottom>
                        <Box width='700px' height='940px' backgroundColor={Style.color3}>
                            <h3>이미지 리스트</h3>
                            <ImageContainer onClick={handleClick}>
                                {croppedImgList.map((el, idx) => {
                                    return (
                                        <img src={el.img} alt={"img"} id={el.idx} key={el.idx}/>
                                    )
                                })}
                            </ImageContainer>
                        </Box>
                        <Box width='1400px' height='940px' backgroundColor={Style.color3} id={"selectedImg"}>
                            {selectedImg ?
                                <div>
                                    {isPreview ?
                                        <img src={croppedImgSrc.img} className={"preview"}/> :
                                        <Cropper
                                            ref={cropperJS}
                                            style={{
                                                maxWidth: "1100px",
                                                maxHeight: "900px",
                                                marginTop: "20px",
                                                marginLeft: "50px"
                                            }}
                                            src={selectedImg.src}
                                            initialAspectRatio={1}
                                            viewMode={2}
                                            autoCropArea={0.8}
                                            minCropBoxHeight={10}
                                            minCropBoxWidth={10}
                                            background={false}
                                            cropend={handleCropChange}
                                        />}
                                    {isPreview ?
                                        <BtnContainer>
                                            <CustomButton type={"normal"} name={"완료"} width={"150px"}
                                                          height={"50px"}
                                                          fontSize={"24px"}
                                                          borderRadius={"5px"} content={"수정완료"} id={"cropDone"}
                                                          backgroundColor={Style.color2}
                                                          onClick={handleCropDone}
                                            />
                                            <CustomButton type={"normal"} name={"미리보기"} width={"150px"} height={"50px"}
                                                          fontSize={"24px"}
                                                          borderRadius={"5px"} content={`${previewText}`} id={"preview"}
                                                          onClick={togglePreview} backgroundColor={Style.color2}/>
                                        </BtnContainer>
                                        :
                                        <>
                                            <div className={"rotate"}>
                                                <img src={rotate_left} onClick={RotateLeft}/>
                                                <img src={rotate_right} onClick={RotateRight}/>
                                            </div>
                                            <BtnContainer>
                                                <CustomButton type={"normal"} name={"완료"} width={"150px"}
                                                              height={"50px"}
                                                              fontSize={"24px"}
                                                              borderRadius={"5px"} content={"수정완료"} id={"cropDone"}
                                                              backgroundColor={Style.color2}
                                                              onClick={handleCropDone}
                                                />
                                                <CustomButton type={"normal"} name={"미리보기"} width={"150px"}
                                                              height={"50px"}
                                                              fontSize={"24px"}
                                                              borderRadius={"5px"} content={`${previewText}`}
                                                              id={"preview"}
                                                              onClick={togglePreview} backgroundColor={Style.color2}/>
                                            </BtnContainer>
                                        </>
                                    }
                                </div>
                                : null}
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
  
  & .uploadImg {
    background: ${Style.color2};
    color: #fff;
    padding: 3px 5px;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 650px;
  justify-items: center;
  height: 920px;
  overflow: auto;

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
      max-width: 1100px;
      max-height: 900px;
    }

    & .preview { //미리보기
      margin-left: 50px;
    }
  }

  & .rotate { //회전버튼
    position: absolute;
    top: 25px;
    right: 38px;

    & > img {
      width: 50px;
      height: 50px;
      margin-right: 25px;
      cursor: pointer;
    }
  }

`;

const BtnContainer = styled.div` /*수정완료, 미리보기 버튼*/
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 42.5%;
  right: 3.3%;

  & > button:nth-child(1) {
    margin-bottom: 25px;
  }
`;
export default ScanPage;
