import React from "react";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import { COLORS } from "../../consts/colors";

const StyledText = styled.span`
  font-size: ${(props) => `${{ sm: "12px", md: "14px", lg: "16px" }[props.size]}`};
  font-weight: ${(props) => (props.weight === "bold" ? 700 : 400)};
  color: ${(props) => props.color};
`;

function Text({ label, color = COLORS.neutral.black, ...props }) {
  return (
    <StyledText {...props} color={color}>
      {label}
    </StyledText>
  );
}

Text.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  weight: PropTypes.oneOf(["bold", "regular"]),
  label: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Text;
