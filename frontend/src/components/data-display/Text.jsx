import React from "react";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import { COLORS } from "../../consts/colors";

const StyledText = styled.span.attrs((props) => ({
  "data-text-transform": props.textTransform
}))`
  font-size: ${(props) => `${{ sm: "12px", md: "14px", lg: "16px" }[props.size]}`};
  font-weight: ${(props) => (props.weight === "bold" ? 600 : 400)};
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
  text-transform: ${(props) => props["data-text-transform"]};
`;

function Text({
  label,
  size = "md",
  weight = "regular",
  color = COLORS.neutral[900],
  align = "left",
  ...props
}) {
  return (
    <StyledText color={color} align={align} weight={weight} size={size} {...props}>
      {label}
    </StyledText>
  );
}

Text.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  weight: PropTypes.oneOf(["bold", "regular"]),
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  textTransform: PropTypes.oneOf(["uppercase", "lowercase"]),
  align: PropTypes.oneOf(["left", "center", "right"])
};

export default Text;
