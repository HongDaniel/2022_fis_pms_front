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

    useEffect(() => {
        onSearch();
    }, [])
    const onSearch = () => {
        axios.get('http://${NetworkConfig.networkAddress}:8080/index/label', {params: params})
            .then((res) => setTmp(res.data))
    }

    const handleDoubleClick = (e) => {
        console.log(e.target.getAttribute('name'));
        handleClose();
    }

    const getValue = (x) => {
        let v = x[1];
        if (x[0] === 'f_kperiod') {
            if (v === 'YEAR1') {
                return '1년';
            } else if (v === 'YEAR3') {
                return '3년';
            } else if (v === 'YEAR5') {
                return '5년';
            } else if (v === 'YEAR10') {
                return '10년';
            } else if (v === 'YEAR20') {
                return '20년';
            } else if (v === 'YEAR30') {
                return '30년';
            } else if (v === 'SEMI') {
                return '준영구';
            } else {
                return '영구';
            }
        } else if (x[0] === 'f_type') {
            if (v === 'GENERAL') {
                return '일반문서';
            } else if (v === 'DRAWING') {
                return '도면류';
            } else if (v === 'PHOTO') {
                return '사진-필름류';
            } else if (v === 'VIDEO') {
                return '녹음-동영상류';
            } else if (v === 'CARD') {
                return '카드류';
            }
        } else if (x[0] === 'f_kmethod') {
            if (v === 'ALL') {
                return "원본과 보존매체를 함께 보존";
            } else if (v === 'MEDIA') {
                return "보존매체만 보존";
            } else {
                return '원본만 보존';
            }
        } else if (x[0] === 'f_kplace') {
            if (v === 'ARCHIVIST') {
                return '기록관';
            } else if (v === 'PROFESSION'){
                return '전문관리기관';
            }
        }
        return x[1];
    }

    return (
        <div>
            <h1>철 항목 검색결과</h1>
            <ListHeader columns={'1fr 1fr 1fr 2fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr 1fr 1fr'} fontSize={'20pt'} weight={'700'} mb={'20px'}>
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
                    <ListContainer key={item.f_id} name={item.f_id} onDoubleClick={handleDoubleClick} columns={'1fr 1fr 1fr 2fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr 1fr 1fr'} fontSize={'15pt'} weight={'400'} mb={'10px'}>
                        {Object.entries(item).map((x) => {
                            return (<div key={x[0]} name={x[0]}>{getValue(x)}</div>)
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