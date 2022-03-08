import React from 'react';
import styled from "styled-components";

function OfficeSearch(props) {
    const {currentTab, handleClose} = props;
    const tmp = [
        {id: "1234567", name: "서울 강남구", exist: "0"},
        {id: "4720000", name: "전라북도 완주군", exist: "0"},
        {id: "4720001", name: "전라북도 완주군 공보담당관", exist: "1"},
        {id: "4720002", name: "전라북도 완주군 기획실", exist: "1"},
        {id: "4720003", name: "전라북도 완주군 내무과", exist: "1"},
    ];

    const handleDoubleClick = (e) => {
        console.log(e.target.getAttribute('name'));
        handleClose();
    }

    return (
        <div>
            <ListHeader columns={'1fr 2fr 1fr'} fontSize={'20pt'} weight={'700'} mb={'20px'}>
                <div>기관코드</div>
                <div>기관명</div>
                <div>존폐</div>
            </ListHeader>
            {tmp.map((item) => {
                return (
                    <ListContainer key={item.id} name={item.id} onDoubleClick={handleDoubleClick} columns={'1fr 2fr 1fr'} fontSize={'15pt'} weight={'400'} mb={'10px'}>
                        <div name={item.id}>{item.id}</div>
                        <div name={item.id}>{item.name}</div>
                        <div name={item.id}>{item.exist}</div>
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

export default OfficeSearch;