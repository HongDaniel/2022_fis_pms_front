import React, {useState} from 'react';
import Box from "../Atom/Box";
import Title from "../Atom/Title";
import CustomInput from "../Atom/CustomInput";
import CustomButton from "../Atom/CustomButton";
import Table from "../Atom/Table";
import {rows} from "../Page/DocumentExportPage";
import {Style} from "../Style";
import axios from "axios";

const columns = [
    {
        field: 'name',
        headerName: '공정',
        sortable: true,
        width: 150,
    },
    {
        field: 'plan',
        headerName: '완료(건)',
        sortable: true,
        width: 150,
        flex: 1,
    },
];

function Process(props) {
    const [date, setDate] = useState({startDate: '', endDate: ''});

    const handleChange = (e) => {
        const id = e.target.id;
        if (id === 'startDate') {
            setDate({...date, startDate: e.target.value})
        } else if (id === 'endDate') {
            setDate({...date, endDate: e.target.value})
        }
    }

    const handleRefer = () => {
        console.log(date)
        axios.get("http://${NetworkConfig.networkAddress}:8080/workList/date", {params: date})
            .then((res) => {
                console.log(res.data);
            })
    }

    return (
        <Box mt='0' width='2200px' height='1100px' backgroundColor={'#ffffff'}>
            <div style={{position: 'absolute', margin: '30px'}}>
                <div>
                    <Title>일일 작업 조회</Title>
                    <Box mt='10px' width='2120px' height='120px' backgroundColor={Style.color3}>
                        <div style={{margin: 25, display:"flex", flexDirection: "row", position: 'absolute'}}>
                            <div style={{margin:15, fontSize: '18pt'}}>
                                날짜 선택
                            </div>
                            <div style={{margin:10}}>
                                <input onChange={handleChange} id={'startDate'} style={{height: '33px'}} type={'date'} />
                            </div>
                            <div style={{marginTop:10, fontSize: 30, fontWeight: 200}}>
                                ~
                            </div>
                            <div style={{margin:10}}>
                                <input onChange={handleChange} id={'endDate'} style={{height: '33px'}} type={'date'} />
                            </div>
                            <div style={{marginTop:10}}>
                                <CustomButton onClick={handleRefer} type='normal' color='#ffffff' backgroundColor='#50586C' content='조회'/>
                            </div>
                        </div>
                    </Box>
                </div>
                <div>
                    <Title>등록 내역</Title>
                    <Box mt='50px' width='2120px' height='850px' backgroundColor={Style.color3}>
                        <div style={{margin: '25px', right: '10px', position: 'absolute'}}>
                            <CustomButton type='normal' color='#ffffff' backgroundColor='#50586C' content='엑셀로 저장'/>
                        </div>
                        <div style={{margin: '20px', top: '50px', position: 'absolute'}}>
                            <Table width='2080px' height='330px' headerBG='#50586C' cellBG='#DCE2F0' rows={rows} columns={columns} />
                        </div>
                    </Box>
                </div>
            </div>
        </Box>
    );
}

export default Process;