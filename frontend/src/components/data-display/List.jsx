import React from "react";
import PropTypes from "prop-types";
import MuiList from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

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

List.propTypes = {
  datasource: PropTypes.array.isRequired,
  renderItems: PropTypes.func.isRequired,
  renderAction: PropTypes.func,
  keyExtractor: PropTypes.func.isRequired
};

export default List;
