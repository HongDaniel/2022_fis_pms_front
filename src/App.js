import React, {useEffect} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import PreInspectPage from "./Page/PreInspectPage";
import DocumentExportPage from "./Page/DocumentExportPage";
import IndexingPage from "./Page/IndexingPage";
import UploadPage from "./Page/UploadPage";
import ManagePage from "./Page/ManagePage";
import ImageCorrectionPage from "./Page/ImageCorrectionPage";
import LoginPage from "./Page/LoginPage";
import ScanPage from "./Page/ScanPage";
import {isLogedIn} from "./store/LoginInfo";
import {useRecoilValue} from "recoil";
import axios from "axios";
import NetworkConfig from "./configures/NetworkConfig";

function App() {
    const loginStatus = useRecoilValue(isLogedIn);
    console.log(loginStatus);

    useEffect(async () => {
        await axios.get(`http://${NetworkConfig.networkAddress}:8080/userInfo`, {withCredentials: true})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }, []);


    if(loginStatus) {
        return (
            <div className="App">
                <Routes>
                    <Route exact path={"/"} element={<LoginPage/>}/>
                    <Route exact path={"/preinspect"} element={<PreInspectPage/>}/>
                    <Route exact path={"/export"} element={<DocumentExportPage/>}/>
                    <Route exact path={"/scan"} element={<ScanPage/>}/>
                    <Route exact path={"/imageCorrect"} element={<ImageCorrectionPage/>}/>
                    <Route exact path={"/index"} element={<IndexingPage/>}/>
                    <Route exact path={"/upload"} element={<UploadPage/>}/>
                    <Route exact path={"/manage/workplace"} element={<ManagePage/>}/>
                </Routes>
            </div>
        );
    }
    else {
        return <LoginPage/>;
    }
}

export default App;
