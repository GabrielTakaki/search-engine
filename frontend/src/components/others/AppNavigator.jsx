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

const MENUS = [
  {
    icon: <HomeIcon fontSize="small" />
  },
  {
    icon: <BusinessCenterOutlinedIcon fontSize="small" />
  },
  {
    icon: <PermContactCalendarOutlinedIcon fontSize="small" />
  },
  {
    icon: <TextSnippetOutlinedIcon fontSize="small" />
  },
  {
    active: true,
    icon: <SearchOutlinedIcon fontSize="small" />
  },
  {
    icon: <SettingsOutlinedIcon fontSize="small" />
  },
  {
    icon: <HelpOutlineOutlinedIcon fontSize="small" />
  }
];

function AppNavigator() {
  return (
    <Drawer isOpen header={<img src={BadgeLogo} alt="Court correct badge" />}>
      <List
        datasource={MENUS}
        keyExtractor={(data) => data.icon}
        renderItems={(data) => (
          <ListItemContainer>
            <List.ListItemIconButton selected={data.active} icon={data.icon} />
          </ListItemContainer>
        )}
      />
    </Drawer>
  );
}

export default AppNavigator;
