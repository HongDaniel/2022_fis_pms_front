import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";

function GitemSearch(props) {
    const {currentTab, handleClose, keyword} = props;
    const [tmp, setTmp] = useState([]);
    const params = {};
    const x = Object.entries(keyword)
    if (x[0][1] === '문서 번호') {
        params['docnum'] = x[1][1];
    } else if (x[0][1] === '건 제목') {
        params['c_name'] = x[1][1];
    } else if (x[0][1] === '수(발)신자') {
        params['c_receiver'] = x[1][1];
    }
    console.log(params)

    useEffect(() => {
        onSearch();
    }, [])
    const onSearch = () => {
        axios.get('http://3.38.19.119:8080/index/case', {params: params})
            .then((res) => setTmp(res.data))
    }

    const handleDoubleClick = (e) => {
        console.log(e.target.getAttribute('name'));
        handleClose();
    }
    const getValue = (x) => {
        console.log(x)
        return x[1];
    }

    return (
        <div>
            <h1>건 항목 검색결과</h1>
            <ListHeader columns={'1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'} fontSize={'20pt'} weight={'700'} mb={'20px'}>
                <div>레이블</div>
                <div>권호수</div>
                <div>생산등록일자</div>
                <div>시행일자</div>
                <div>건 제목</div>
                <div>첫 페이지</div>
                <div>끝 페이지</div>
                <div>쪽수</div>
                <div>oldnum</div>
                <div>보존기간</div>
                <div>기관코드</div>
                <div>부서명</div>
                <div>type</div>
                <div>등록구분</div>
            </ListHeader>
            {tmp.length === 0
                ?
                <h1 style={{textAlign: 'center'}}>검색 결과가 없습니다.</h1>
                :
                tmp.map((item) => {
                    return (
                        <ListContainer key={item.c_class} name={item.c_class} onDoubleClick={handleDoubleClick} columns={'1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'} fontSize={'15pt'} weight={'400'} mb={'10px'}>
                            {Object.entries(item).map((x) => {
                                    return (<div key={x[0]} name={x[0]}>{getValue(x)}</div>)
                                }
                            )}
                        </ListContainer>
                    )
                })
            }
        </div>
    );
}

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  font-size: 18pt;
  font-weight: 700;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 15px;
  background-color: #50586C;
  color: #ffffff;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  font-size: 15pt;
  font-weight: 400;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 15px;
  background-color: #DCE2F0;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;
export default GitemSearch;