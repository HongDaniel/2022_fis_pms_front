import React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Citems from "../Molecule/Citems";
import Ginput from "../Molecule/Ginput";
import Gitems from "../Molecule/Gitems";
import Performance from "../Molecule/Performance";
import Process from "../Molecule/Process";
import DailyWork from "../Molecule/DailyWork";
import CRecords from "../Molecule/CRecords";

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #64687e;
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid white;
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #DCE2F0;
    color: black;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  width: 500px;
  background-color: #50586C;
  border-radius: 8px 8px 0 0;
  margin: 15px 15px 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function ManageTabs(props) {
    const {setCurrentTab} = props;
    return (
        <TabsUnstyled onChange={(event) => setCurrentTab(event.target.id)} defaultValue={0}>
            <TabsList>
                <Tab id={'0'}>계획대비 실적</Tab>
                <Tab id={'1'}>기간별 공장</Tab>
                <Tab id={'2'}>일일 작업</Tab>
                <Tab id={'3'}>철별 이력</Tab>
            </TabsList>
            <TabPanel value={0}>
                <Performance />
            </TabPanel>
            <TabPanel value={1}>
                <Process />
            </TabPanel>
            <TabPanel value={2}>
                <DailyWork />
            </TabPanel>
            <TabPanel value={3}>
                <CRecords />
            </TabPanel>
        </TabsUnstyled>
    );
}
