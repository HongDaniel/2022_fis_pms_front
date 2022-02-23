import React from 'react';
import Box from "../Atom/Box";
import Title from "../Atom/Title";
import Table from "../Atom/Table";
import {columns, rows} from "../Page/DocumentExportPage";
import {Style} from "../Style";

function CRecords(props) {
    return (
        <Box mt='0' width='2200px' height='1140px' backgroundColor={'#ffffff'}>
            <div style={{position: 'absolute', margin: '30px'}}>
                <Box mt='10px' width='2120px' height='1070px' backgroundColor={Style.color3}>
                    <Title>철별 이력</Title>
                    <div style={{margin: '20px', top: '50px', position: 'absolute'}}>
                        <Table width='2080px' height='530px' headerBG='#50586C' cellBG='#DCE2F0' rows={rows} columns={columns} />
                    </div>
                </Box>
            </div>
        </Box>
    );
}

export default CRecords;