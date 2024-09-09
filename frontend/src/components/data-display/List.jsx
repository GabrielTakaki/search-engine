import React, { useCallback } from "react";
import PropTypes from "prop-types";
import MuiList from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import MuiListItemButton from "@mui/material/ListItemButton";
import { styled } from "styled-components";
import { COLORS } from "../../consts/colors";
import Pagination from "../navigation/Pagination";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

const PaginationWrapper = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;
`;

function List({ datasource, keyExtractor, renderItems, renderAction, pagination, onChange }) {
  const handlePageChange = useCallback(
    (page) => {
      onChange?.(page);
    },
    [onChange]
  );

  return (
    <Container>
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
      {pagination && (
        <PaginationWrapper>
          <Pagination onChange={handlePageChange} count={pagination.totalPages} />
        </PaginationWrapper>
      )}
    </Container>
  );
}

const StyledListItemButton = styled(MuiListItemButton)`
  border-radius: 8px !important;
  padding: 4px !important;
  width: 38px !important;
  height: 38px !important;

  > .MuiListItemIcon-root {
    color: ${COLORS.primary.light};
  }

  &.Mui-selected {
    background-color: ${COLORS.primary.light};
    color: ${COLORS.primary.darkest};

    > .MuiListItemIcon-root {
      color: ${COLORS.primary.darkest};
    }
  }
`;

const StyledListItemIcon = styled(ListItemIcon)`
  min-width: unset !important;
  justify-content: center !important;
  margin: auto !important;
`;

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
  onChange: PropTypes.func,
  pagination: PropTypes.shape({
    page: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired
  }),
  keyExtractor: PropTypes.func.isRequired
};

ListItemIconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  selected: PropTypes.bool
};

List.ListItemIconButton = ListItemIconButton;

export default List;
