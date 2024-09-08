import React from "react";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import { COLORS } from "../../consts/colors";

const StyledDisplay = styled.span`
  font-size: ${(props) => `${{ sm: "20px", md: "26px", lg: "28px", xl: "42px" }[props.size]}`};
  font-weight: ${(props) => (props.weight === "bold" ? 600 : 400)};
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
`;

function Display({ label, color = COLORS.neutral.black, ...props }) {
  return (
    <StyledDisplay {...props} color={color}>
      {label}
    </StyledDisplay>
  );
}

Display.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  weight: PropTypes.oneOf(["bold", "regular"]),
  label: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["left", "center", "right"]),
  color: PropTypes.string
};

export default Display;
