import React, {useState} from 'react';
import {DataGrid, koKR, nlNL} from "@mui/x-data-grid";
import {makeStyles, ThemeProvider} from "@mui/styles";
import {createTheme} from "@mui/material";

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


function Table(props) {
    const {headerBG, cellBG, rows, columns} = props; // 헤더, 셀 색깔
    const theme = {headerBG, cellBG};
    const classes = useStyles(theme);
    const [selectionModel, setSelectionModel] = useState([]); // 체크박스 State
    const [pageSize, setPageSize] = useState(5);

    console.log(selectionModel);
    return (
        <div style={{height: '95%', width: '100%', position: 'absolute', zIndex: 3, }}>
            <DataGrid
                classes={{
                    root: classes.root,
                    columnHeader: classes.header,
                    cell: classes.cell,
                    row: classes.cell,
                }}
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPage) => setPageSize(newPage)}
                rowsPerPageOptions={[5, 10, 20]}
                checkboxSelection
                disableSelectionOnClick
                selectionModel={selectionModel}
                onSelectionModelChange={setSelectionModel}
                getRowId={(row) => row.id}
            />
        </div>
    );
}

export default Table;