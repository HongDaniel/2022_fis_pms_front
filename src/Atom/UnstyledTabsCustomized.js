import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Citems from "../Molecule/Citems";
import Ginput from "../Molecule/Ginput";
import Gitems from "../Molecule/Gitems";

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

export default function UnstyledTabsCustomized(props) {
    const {currentTab, setCurrentTab} = props;
    console.log(currentTab);
    return (
        <TabsUnstyled onChange={(event) => setCurrentTab(parseInt(event.target.id))} value={currentTab}>
            <TabsList>
                <Tab id={0}>철항목</Tab>
                <Tab id={1}>건수입력</Tab>
                <Tab id={2}>건항목</Tab>
            </TabsList>
            <TabPanel value={0}>
                <div>
                    <Citems value={props.value} handleSave={props.handleSave} handleChange={props.handleChange} handleCDelete={props.handleCDelete} setCurrentTab={setCurrentTab} />
                </div>
            </TabPanel>
            <TabPanel value={1}>
                <Ginput f_id={props.f_id} v_id={props.v_id} volumeAmount={props.volumeAmount} setCurrentTab={setCurrentTab} caseSearch={props.caseSearch}/>
            </TabPanel>
            <TabPanel value={2}>
                <Gitems handleGSave={props.handleGSave} handleCaseChange={props.handleCaseChange} caseSearch={props.caseSearch}/>
            </TabPanel>
        </TabsUnstyled>
    );
}
