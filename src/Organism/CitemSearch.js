import React, {useState} from 'react';
import styled from "styled-components";

function CitemSearch(props) {
    const {currentTab, handleClose} = props;

    const tmp = [
        {id: "4720000", num:"001", name: "문화홍보실 인처관리1", make: '2000', end: '20', reserve: '20', acode: '4360000', makename: 'ggg', look: '1', method: '1', place: '1', manager: '미확인'},
        {id: "4720001", num:"002", name: "문화홍보실 인처관리2", make: '2000', end: '20', reserve: '20', acode: '4360000', makename: 'ggg', look: '1', method: '1', place: '1', manager: '미확인'},
        {id: "4720002", num:"003", name: "문화홍보실 인처관리3", make: '2000', end: '20', reserve: '20', acode: '4360000', makename: 'ggg', look: '1', method: '1', place: '1', manager: '미확인'},
        {id: "4720003", num:"004", name: "문화홍보실 인처관리4", make: '2000', end: '20', reserve: '20', acode: '4360000', makename: 'ggg', look: '1', method: '1', place: '1', manager: '미확인'},
    ];

    const handleDoubleClick = (e) => {
        console.log(e.target.getAttribute('name'));
        handleClose();
    }

    return (
        <div>
            <h1>철 항목 검색결과</h1>
            <ListHeader columns={'1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'} fontSize={'20pt'} weight={'700'} mb={'20px'}>
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
                    <ListContainer key={item.id} name={item.id} onDoubleClick={handleDoubleClick} columns={'1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'} fontSize={'15pt'} weight={'400'} mb={'10px'}>
                        {Object.values(item).map((x) => {
                            return (<div name={item.id}>{x}</div>)
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