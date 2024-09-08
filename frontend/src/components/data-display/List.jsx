import React from "react";
import PropTypes from "prop-types";
import MuiList from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MuiListItemButton from "@mui/material/ListItemButton";
import { styled } from "@mui/material/styles";
import { COLORS } from "../../consts/colors";
import { ListItemIcon } from "@mui/material";

function List({ datasource, keyExtractor, renderItems, renderAction }) {
  return (
    <MuiList>
      {datasource.map((data) => (
        <ListItem
          secondaryAction={renderAction?.(data)}
          key={keyExtractor(data)}
          disablePadding
          sx={{ display: "block" }}>
          {renderItems(data)}
        </ListItem>
      ))}
    </MuiList>
  );
}

const StyledListItemButton = styled(MuiListItemButton)({
  borderRadius: 8,
  padding: 4,
  width: 38,
  height: 38,

  "> .MuiListItemIcon-root": {
    color: COLORS.primary.lighter
  },

  "&.Mui-selected": {
    backgroundColor: COLORS.primary.lighter,
    color: COLORS.primary.darkest,

    "> .MuiListItemIcon-root": {
      color: COLORS.primary.darkest
    }
  }
});

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: "unset",
  justifyContent: "center",
  margin: "auto"
});

function ListItemIconButton({ icon, selected }) {
  return (
    <StyledListItemButton selected={selected}>
      <StyledListItemIcon>{icon}</StyledListItemIcon>
    </StyledListItemButton>
  );
}

List.propTypes = {
  datasource: PropTypes.array.isRequired,
  renderItems: PropTypes.func.isRequired,
  renderAction: PropTypes.func,
  keyExtractor: PropTypes.func.isRequired
};

ListItemIconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  selected: PropTypes.bool
};

List.ListItemIconButton = ListItemIconButton;

export default List;
