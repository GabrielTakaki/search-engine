import React from "react";
import MuiAvatar from "@mui/material/Avatar";
import { COLORS } from "../../consts/colors";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import Display from "./Display";

const StyledAvatar = styled(MuiAvatar)`
  background-color: ${COLORS.secondary[900]} !important;
  width: 48px !important;
  height: 48px !important;
`;

function Avatar({ name = "CC" }) {
  return (
    <StyledAvatar>
      <Display label={name} color={COLORS.secondary[500]} size="sm" />
    </StyledAvatar>
  );
}

Avatar.propTypes = {
  name: PropTypes.string
};

export default Avatar;
