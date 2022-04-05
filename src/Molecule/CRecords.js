import React, {useEffect} from 'react';
import Box from "../Atom/Box";
import Title from "../Atom/Title";
import Table from "../Atom/Table";
import {columns, rows} from "../Page/DocumentExportPage";
import {Style} from "../Style";
import axios from "axios";

function CRecords(props) {

    const onFile = () => {
        axios.get("http://3.38.19.119:8080/workList/file", {withCredentials: true})
            .then((res) => {
                console.log(res.data.data);
            })
    }

    useEffect(() => {
        onFile();
    }, [])

    return (
        <Box mt='0' width='2200px' height='1140px' backgroundColor={'#ffffff'}>
            <div style={{position: 'absolute', margin: '30px'}}>
                <div>
                    <Title>철별 이력</Title>
                    <Box mt='10px' width='2120px' height='1070px' backgroundColor={Style.color3}>
                        <div style={{margin: '20px', top: '50px', position: 'absolute'}}>
                            <Table width='2080px' height='530px' headerBG='#50586C' cellBG='#DCE2F0' rows={rows} columns={columns} />
                        </div>
                    </Box>
                </div>
            </div>
        </Box>
    );
}

export default CRecords;