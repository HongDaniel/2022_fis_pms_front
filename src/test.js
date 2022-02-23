const columns = [
    {
        field: 'f_id',
        headerName: 'No.',
        type: 'number',
        width: 90
    },
    {
        field: 'f_labelcode',
        headerName: '레이블',
        width: 120,
        editable: true,
    },
    {생
        field: 'o_name',
        headerName: '생산기관명',
        width: 230,
        editable: true,
    },
    {
        field: 'o_code',
        headerName: '기관코드',
        width: 110,
        editable: true,
    },
    {
        field: 'f_name',
        headerName: '철제목',
        description: 'This column has a value getter and is not sortable.',
        width: 280,
        flex: 1
    },
    {
        field: 'f_pyear',
        headerName: '생산년도',
        width: 110,
        editable: true,
    },
    {
        field: 'f_kperiod',
        headerName: '보존기간',
        width: 90,
        editable: true,
    },
    {
        field: 'f_db',
        headerName: '구축여부',
        width: 90,
        editable: true,
    },
    {
        field: 'f_scan',
        headerName: '스캔여부',
        width: 90,
        editable: true,
    },
    {
        field: 'b_num',
        headerName: '박스번호',
        width: 90,
        editable: true,
    },
    {
        field: 'f_location',
        headerName: '위치',
        width: 110,
        editable: true,
    },
    {
        field: 'f_kplace',
        headerName: '보존장소',
        type: 'number',
        width: 120,
        editable: true,
    },
    {
        field: 'f_type',
        headerName: '문서유형',
        type: 'number',
        width: 120,
        editable: true,
    },
    {
        field: 'f_typenum',
        headerName: '분류번호',
        type: 'number',
        width: 90,
        editable: true,
    },
];