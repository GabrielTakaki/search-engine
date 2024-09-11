import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { COLORS } from "../../consts/colors";

const StyledDatePicker = styled(MuiDatePicker)`
  width: 100% !important;

  .MuiInputBase-root {
    border-radius: 8px !important;
    height: 48px !important;
    border: 1px solid ${COLORS.neutral[300]};
    padding: 12px 24px 12px 16px;
  }
  .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }
`;

function DatePicker({ clear, onClearHandled, value, onChange, ...props }) {
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    if (clear) {
      setSelectedValue(null);
      if (onClearHandled) {
        onClearHandled();
      }
    }
  }, [clear, onClearHandled]);

  const handleChange = (value) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <StyledDatePicker
      value={selectedValue}
      onChange={handleChange}
      slotProps={{ textField: { placeholder: "Date" } }}
      {...props}
    />
  );
}

DatePicker.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  clear: PropTypes.bool,
  onClearHandled: PropTypes.func
};

export default DatePicker;
