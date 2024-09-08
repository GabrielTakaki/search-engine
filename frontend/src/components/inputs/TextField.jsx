import React from "react";
import MuiTextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import PropTypes from "prop-types";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { styled } from "styled-components";
import { COLORS } from "../../consts/colors";

const StyledTextField = styled(MuiTextField)`
  .MuiOutlinedInput-root {
    border-radius: 8px;
    padding: 12px 24px 12px 16px;
    border: 1px solid ${COLORS.neutral.lightGray};

    > input {
      padding: 0;
    }
  }
`;

function TextField({ icon = <SearchOutlinedIcon />, placeholder = "Search", onChange, value }) {
  const coloredIcon = React.cloneElement(icon, { style: { color: COLORS.neutral.gray } });

  return (
    <StyledTextField
      type="text"
      fullWidth
      InputProps={
        icon
          ? {
              startAdornment: <InputAdornment position="start">{coloredIcon}</InputAdornment>
            }
          : {}
      }
      variant="outlined"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

TextField.propTypes = {
  icon: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextField;
