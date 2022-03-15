import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";

function CitemSearch(props) {
    const {currentTab, handleClose, keyword} = props;
    const [tmp, setTmp] = useState([]);
    const params = {};
    const x = Object.entries(keyword)
    if (x[0][1] === '철 제목') {
        params['f_name'] = x[1][1];
    } else if (x[0][1] === '생산년도') {
        params['syear'] = x[1][1];
    } else if (x[0][1] === '종료년도') {
        params['eyear'] = x[1][1];
    }
    console.log(params)

    useEffect(() => {
        onSearch();
    }, [])
    const onSearch = () => {
        axios.get('http://3.38.19.119:8080/index/label', {params: params})
            .then((res) => setTmp(res.data))
    }

    const handleDoubleClick = (e) => {
        console.log(e.target.getAttribute('name'));
        handleClose();
    }

    return (
        <div>
            <h1>철 항목 검색결과</h1>
            <ListHeader columns={'1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'} fontSize={'20pt'} weight={'700'} mb={'20px'}>
                <div>철 번호</div>
                <div>레이블</div>
                <div>권호수</div>
                <div>철 제목</div>
                <div>생산년도</div>
                <div>종료년도</div>
                <div>보존기간</div>
                <div>기관코드</div>
                <div>생산기관명</div>
                <div>기록물형태</div>
                <div>보존방법</div>
                <div>보존장소</div>
                <div>업무담당자</div>
            </ListHeader>
            {tmp.map((item) => {
                return (
                    <ListContainer key={item.f_id} name={item.f_id} onDoubleClick={handleDoubleClick} columns={'1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'} fontSize={'15pt'} weight={'400'} mb={'10px'}>
                        {Object.entries(item).map((x) => {
                            return (<div key={x[0]} name={x[0]}>{x[1]}</div>)
                        }
                        )}
                    </ListContainer>
                )
            })}
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

export default CitemSearch;