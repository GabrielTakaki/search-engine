import React from "react";
import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import PropTypes from "prop-types";

const StyledButton = styled(MuiButton)(({ size }) => ({
  padding: size === "lg" ? "16px 24px 16px 24px" : "4px 8px 4px 8px",
  border: "none",
  borderRadius: 4,
  cursor: "pointer",
  boxShadow: "none",
  textTransform: "none",
  "&:hover": {
    boxShadow: "none"
  }
}));

function Button({ size = "sm", variant = "contained", label, onClick }) {
  return (
    <StyledButton variant={variant} size={size} onClick={onClick}>
      {label}
    </StyledButton>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "lg"]),
  variant: PropTypes.oneOf(["ghost", "contained"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
