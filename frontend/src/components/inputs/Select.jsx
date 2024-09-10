import React, { useEffect, useState } from "react";
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
    border: 1px solid ${COLORS.neutral[300]};

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

function Select({ options, onClearHandled, onChange, value, clear, defaultValue, ...props }) {
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || "");

  useEffect(() => {
    if (clear) {
      setSelectedValue(defaultValue || "");
      if (onClearHandled) {
        onClearHandled();
      }
    }
  }, [clear, onClearHandled]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <StyledSelect value={selectedValue} onChange={handleChange} {...props}>
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
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ).isRequired,
  defaultValue: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  clear: PropTypes.bool,
  onClearHandled: PropTypes.func
};

export default Select;
