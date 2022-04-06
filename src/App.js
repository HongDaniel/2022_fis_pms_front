import React, {useEffect, useLayoutEffect, useState} from "react";
import {Routes, Route, Navigate, Redirect, useNavigate} from "react-router-dom";
import PreInspectPage from "./Page/PreInspectPage";
import DocumentExportPage from "./Page/DocumentExportPage";
import IndexingPage from "./Page/IndexingPage";
import UploadPage from "./Page/UploadPage";
import ManagePage from "./Page/ManagePage";
import ImageCorrectionPage from "./Page/ImageCorrectionPage";
import LoginPage from "./Page/LoginPage";
import InspectionPage from "./Page/InspectionPage";
import ScanPage from "./Page/ScanPage";
import {isLogedIn} from "./store/LoginInfo";
import {useRecoilState, useRecoilValue} from "recoil";
import axios from "axios";
import NetworkConfig from "./configures/NetworkConfig";

function App() {
    const [logInStatus, setLogInStatus] = useRecoilState(isLogedIn);
    const navigate = useNavigate();

    const logInCheck = async () => {
        await axios.get(`http://${NetworkConfig.networkAddress}:8080/userInfo`, {withCredentials: true})
            .then(res => { // 로그인이 되어 있을 때
                console.log(res);
                setLogInStatus(true);
            })
            .catch(err => { // 로그인이 만료되었을 때
                console.log(err);
                navigate('/'); // 로그인 페이지로 이동
                setLogInStatus(false);
                window.alert("로그아웃되었습니다.");
            });
    }

    useLayoutEffect( () => { // 렌더링이 될 때마다 로그인 정보 확인
        logInCheck();
    }, []);

        return (
            <div className="App">
                <Routes>
                    <Route exact path={"/"} element={<LoginPage/>}/>
                    <Route exact path={"/preinspect"} element={<PreInspectPage/>}/>
                    <Route exact path={"/export"} element={<DocumentExportPage/>}/>
                    <Route exact path={"/scan"} element={<ScanPage/>}/>
                    <Route exact path={"/imageCorrect"} element={<ImageCorrectionPage/>}/>
                    <Route exact path={"/index"} element={<IndexingPage/>}/>
                    <Route exact path={"/inspection"} element={<InspectionPage/>}/>
                    <Route exact path={"/upload"} element={<UploadPage/>}/>
                    <Route exact path={"/manage/workplace"} element={<ManagePage/>}/>
                </Routes>
            </div>
        );
}

export default App;
