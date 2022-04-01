import React from "react";
import {Routes, Route} from "react-router-dom";
import PreInspectPage from "./Page/PreInspectPage";
import DocumentExportPage from "./Page/DocumentExportPage";
import IndexingPage from "./Page/IndexingPage";
import UploadPage from "./Page/UploadPage";
import ManagePage from "./Page/ManagePage";
import ImageCorrectionPage from "./Page/ImageCorrectionPage";
import LoginPage from "./Page/LoginPage";
import ScanPage from "./Page/ScanPage";

function App() {
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

export default App;
