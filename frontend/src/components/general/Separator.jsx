import { styled } from "styled-components";
import PropTypes from "prop-types";

const StyledSeparator = styled.div`
  margin: ${({ size }) =>
    ({ xs: "5px", sm: "10px", md: "20px", lg: "30px", xl: "40px" })[size]} !important;
`;

function Separator({ size = "sm" }) {
  return <StyledSeparator size={size} />;
}

Separator.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"])
};

export default Separator;
