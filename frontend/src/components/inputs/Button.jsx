import React from "react";
import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import PropTypes from "prop-types";

const StyledButton = styled(MuiButton)(({ size }) => ({
  padding: size === "lg" ? "12px 50px" : "4px 8px",
  border: "none",
  borderRadius: 4,
  cursor: "pointer",
  boxShadow: "none",
  textTransform: "none",
  "&:hover": {
    boxShadow: "none"
  }
}));

function Button({ size, type, variant, label, onClick }) {
  return (
    <StyledButton type={type} variant={variant} size={size} onClick={onClick}>
      {label}
    </StyledButton>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "lg"]),
  variant: PropTypes.oneOf(["ghost", "contained"]),
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  size: "sm",
  type: "button",
  variant: "contained"
};

export default Button;
