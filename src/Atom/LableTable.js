import React, {useEffect, useState} from 'react';
import {DataGrid, koKR} from "@mui/x-data-grid";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        margin: '10px',
        backgroundColor: ({cellBG}) => cellBG,
        "& .MuiDataGrid-columnsContainer": {
            backgroundColor: 'black',
        },
        "& .MuiDataGrid-iconSeparator": {
            width: 0,
            height: 0,
        },
        "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer": {
            display: ({headerCheckBox}) => headerCheckBox,
        }
    },
    header: {
        backgroundColor: ({headerBG}) => headerBG,
        border: '0.1px solid white',
        color: 'white',
        height: '100vh',
        padding: '0 30px',
        width: 1000,
    },
    cell: {
        border: "0.1px solid white",
    },
}));


function LableTable(props) {
    const {headerBG, cellBG, rows, columns} = props; // 헤더, 셀 색깔, rows, columns
    let headerCheckBox = '';
    if (props.isRowSelectable) { // True로 넘겨주면 전체 선택 X 하나만 선택 가능한 기능
        headerCheckBox = 'none';
    }
    const theme = {headerBG, cellBG, headerCheckBox};
    const classes = useStyles(theme);
    const [pageSize, setPageSize] = useState(7); // Default로 한 페이지에 보이는 row 개수
    const handleRowSelectable = (params) => { // 그냥 전체 선택 X 하나만 선택 가능한 기능
        if (props.selectionModel.length > 0) {
            return params.row[props.id] === props.selectionModel[0];
        } else {
            return true;
        }
    }


    return (
        <div style={{height: `${props.height}`, width: `${props.width}`, position: 'absolute'}}>
            <DataGrid
                classes={{
                    root: classes.root,
                    columnHeader: classes.header,
                    cell: classes.cell,
                    row: classes.cell,
                }}
                loading={props.loading}
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPage) => setPageSize(newPage)}
                rowsPerPageOptions={[7, 10, 20]}
                checkboxSelection={true}
                isRowSelectable={props.isRowSelectable && handleRowSelectable}
                // disableSelectionOnClick
                selectionModel={props.selectionModel}
                onSelectionModelChange={props.setSelectionModel}
                // props로 체크박스 상태 넘겨줘야함.
                getRowId={(row) => row[props.id]}
                // 데이터에서 쓸 id로 변경하세요 여기서는 f_id 썼는데 받아온 데이터에 맞는 id 값 써줘야함.
                localeText={koKR.components.MuiDataGrid.defaultProps.localeText}
            />
        </div>
    );
}

export default LableTable;