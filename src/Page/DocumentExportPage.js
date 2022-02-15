import React from 'react';
import Box from "../Atom/Box";
import styled from "styled-components";
import Table from "../Atom/Table";
import MainBox, {add} from "../Atom/MainBox";
import MainBox2 from "../Atom/MainBox2";

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
        flex: 1,
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
const H1 = styled.h1`
  text-align: left;
  margin-top: -10px;
  margin-bottom: 10px;
  margin-left: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 25px;
`

const Span = styled.span`
  background-color: white;
`

const DocumentExportPage = () => {
    return (
        <Container>
            DocumentExportPage
            <MainBox>
                <Table headerBG='#50586C' cellBG='#DCE2F0' rows={rows} columns={columns} />
            </MainBox>
        </Container>
    );
};

const Container = styled.div`
`;

export default DocumentExportPage;