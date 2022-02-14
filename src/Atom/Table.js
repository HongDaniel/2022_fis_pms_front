import React from 'react';
import {DataGrid} from "@mui/x-data-grid";
import {makeStyles, ThemeProvider} from "@mui/styles";
import {createTheme} from "@mui/material";

const useStyles = makeStyles({
    root: {
        margin: '10px',
        backgroundColor: "#DCE2F0",
      "& .MuiDataGrid-columnsContainer": {
          backgroundColor: 'black',
      },
        "& .MuiDataGrid-iconSeparator": {
            width: 0,
            height: 0,
        },
    },
    header: {
        backgroundColor: '#50586C',
        border: '0.1px solid white',
        color: 'white',
        height: '100vh',
        padding: '0 30px',
    },
    cell: {
        border: "0.1px solid white",
    },
});

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 100,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${
                params.getValue(params.id, 'lastName') || ''
            }`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function Table() {
    const classes = useStyles();

    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                classes={{
                    root: classes.root,
                    columnHeader: classes.header,
                    cell: classes.cell,
                    row: classes.cell,
                }}
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}

export default Table;