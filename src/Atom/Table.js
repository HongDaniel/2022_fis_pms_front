import React, {useState} from 'react';
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
    const {headerBG, cellBG, rows, columns,rowID} = props; // 헤더, 셀 색깔
    const theme = {headerBG, cellBG};
    const classes = useStyles(theme);
    const [pageSize, setPageSize] = useState(7);

    // console.log(selectionModel);
    return (
        <div style={{height: `${props.height}`, width: `${props.width}`, position: 'absolute'}}>
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
                rowsPerPageOptions={[7, 10, 20]}
                checkboxSelection
                disableSelectionOnClick
                selectionModel={props.selectionModel}
                onSelectionModelChange={props.setSelectionModel}
                getRowId={(row) => row.f_id}
                localeText={koKR.components.MuiDataGrid.defaultProps.localeText}
            />
        </div>
    );
}

export default Table;