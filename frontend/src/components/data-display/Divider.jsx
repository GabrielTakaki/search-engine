import React from "react";
import MuiDivider from "@mui/material/Divider";
import { COLORS } from "../../consts/colors";
import PropTypes from "prop-types";
import { styled } from "styled-components";

const StyledDivider = styled(MuiDivider)`
  margin: ${({ size }) => ({ sm: "10px 0", md: "20px 0", lg: "30px 0" })[size]} !important;
`;

function Divider({ size }) {
  return <StyledDivider size={size} color={COLORS.neutral.gray} />;
}

Divider.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"])
};

Divider.defaultProps = {
  size: "md"
};

export default Divider;
