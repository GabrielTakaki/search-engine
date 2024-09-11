import React from "react";
import { styled } from "styled-components";
import Drawer from "../navigation/Drawer";
import BadgeLogo from "../../assets/badge-logo.svg";
import List from "../data-display/List";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const ListItemContainer = styled.div`
  margin-bottom: 16px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MENUS = [
  {
    key: 1,
    icon: <HomeIcon fontSize="small" />
  },
  {
    key: 2,
    icon: <BusinessCenterOutlinedIcon fontSize="small" />
  },
  {
    key: 3,
    icon: <PermContactCalendarOutlinedIcon fontSize="small" />
  },
  {
    key: 4,
    icon: <TextSnippetOutlinedIcon fontSize="small" />
  },
  {
    key: 5,
    active: true,
    icon: <SearchOutlinedIcon fontSize="small" />
  },
  {
    key: 6,
    icon: <SettingsOutlinedIcon fontSize="small" />
  },
  {
    key: 7,
    icon: <HelpOutlineOutlinedIcon fontSize="small" />
  }
];

function AppNavigator() {
  return (
    <Drawer isOpen header={<img src={BadgeLogo} alt="Court correct badge" />}>
      <Container>
        <List
          datasource={MENUS}
          keyExtractor={(data) => data.key}
          renderItems={(data) => (
            <ListItemContainer>
              <List.ListItemIconButton selected={data.active} icon={data.icon} />
            </ListItemContainer>
          )}
        />
      </Container>
    </Drawer>
  );
}

export default AppNavigator;
