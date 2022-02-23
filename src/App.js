import React from "react";
import {Routes, Route} from "react-router-dom";
import PreInspectPage from "./Page/PreInspectPage";
import DocumentExportPage from "./Page/DocumentExportPage";
import IndexingPage from "./Page/IndexingPage";
import UploadPage from "./Page/UploadPage";
import ManagePage from "./Page/ManagePage";
import ScanPage from "./Page/ScanPage";
import LoginPage from "./Page/LoginPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path={"/login"} element={<LoginPage/>}/>
                <Route exact path={"/"} element={<PreInspectPage/>}/>
                <Route exact path={"/export"} element={<DocumentExportPage/>}/>
                <Route exact path={"/scan"} element={<ScanPage/>}/>
                <Route exact path={"/index"} element={<IndexingPage/>}/>
                <Route exact path={"/upload"} element={<UploadPage/>}/>
                <Route exact path={"/manage"} element={<ManagePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
