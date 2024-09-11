import React from "react";
import PropTypes from "prop-types";
import MuiPagination from "@mui/material/Pagination";
import { styled } from "styled-components";
import { COLORS } from "../../consts/colors";

const StyledPagination = styled(MuiPagination)`
  .MuiButtonBase-root {
    width: 36px;
    height: 36px;
    margin: 0 !important;
  }
  .MuiPagination-ul li:first-child button {
    border-radius: 4px 0 0 4px;
    border: 1px solid ${COLORS.neutral[300]};
  }
  .MuiPagination-ul li:last-child button {
    border-radius: 0 4px 4px 0;
    border: 1px solid ${COLORS.neutral[300]};
  }

  .Mui-selected,
  .MuiButtonBase-root:hover {
    background-color: transparent !important;
    color: ${COLORS.primary[500]};
  }
`;

function Pagination({ count, onChange, page }) {
  return (
    <StyledPagination
      page={page}
      onChange={(_, page) => onChange(page)}
      shape="rounded"
      count={count}
    />
  );
}

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default Pagination;
