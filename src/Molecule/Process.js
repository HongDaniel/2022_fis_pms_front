import React from 'react';
import Box from "../Atom/Box";
import Title from "../Atom/Title";
import CustomInput from "../Atom/CustomInput";
import CustomButton from "../Atom/CustomButton";
import Table from "../Atom/Table";
import {columns, rows} from "../Page/DocumentExportPage";

function Process(props) {
    return (
        <Box mt='0' width='2200px' height='1140px' backgroundColor={'#ffffff'}>
            <div style={{position: 'absolute', margin: '30px'}}>
                <Box mt='10px' width='2120px' height='120px' backgroundColor={'#ffffff'}>
                    <Title>일일 작업 조회</Title>
                    <div style={{margin: 25, display:"flex", flexDirection: "row", position: 'absolute'}}>
                        <div style={{margin:15, fontSize: '18pt'}}>
                            날짜 선택
                        </div>
                        <div style={{margin:10}}>
                            <input style={{height: '33px'}} type={'date'} />
                        </div>
                        <div style={{marginTop:10, fontSize: 30, fontWeight: 200}}>
                            ~
                        </div>
                        <div style={{margin:10}}>
                            <input style={{height: '33px'}} type={'date'} />
                        </div>
                        <div style={{marginTop:10}}>
                            <CustomButton type='normal' color='#ffffff' backgroundColor='#50586C' content='조회'/>
                        </div>
                    </div>
                </Box>
                <Box mt='100px' width='2120px' height='850px' backgroundColor={'#ffffff'}>
                    <Title>등록 내역</Title>
                    <div style={{margin: '25px', right: '10px', position: 'absolute'}}>
                        <CustomButton type='normal' color='#ffffff' backgroundColor='#50586C' content='엑셀로 저장'/>
                    </div>
                    <div style={{margin: '20px', top: '50px', position: 'absolute'}}>
                        <Table width='2080px' height='330px' headerBG='#50586C' cellBG='#DCE2F0' rows={rows} columns={columns} />
                    </div>
                </Box>
            </div>
        </Box>
    );
}

export default Process;