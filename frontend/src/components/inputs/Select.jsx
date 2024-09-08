import React from "react";
import PropTypes from "prop-types";
import MuiSelect from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "styled-components";
import { COLORS } from "../../consts/colors";

const StyledSelect = styled(MuiSelect)`
  width: 100% !important;
  border-radius: 8px !important;
  .MuiSelect-select {
    border-radius: 8px;
    padding: 12px 24px 12px 16px;
    border: 1px solid ${COLORS.neutral.lightGray};

    &:focus {
      border-radius: 8px;
    }
    .notranslate {
      &:after {
        content: "${(props) => props.placeholder}";
        opacity: 0.42;
      }
    }
  }
`;

function Select({ options, ...props }) {
  return (
    <StyledSelect {...props}>
      {options?.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </StyledSelect>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string
};

export default Select;
