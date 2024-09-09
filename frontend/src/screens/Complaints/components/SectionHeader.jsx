import React from "react";
import Display from "../../../components/data-display/Display";
import { COLORS } from "../../../consts/colors";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function SectionHeader() {
  return (
    <Container>
      <Display
        label="AI-Powered Regulatory Search"
        size="xl"
        align="center"
        color={COLORS.neutral.black}
        weight="bold"
      />
      <Display
        size="sm"
        align="center"
        color={COLORS.neutral.gray}
        label="Use the search engine to search for publications from courts and regulators."
      />
    </Container>
  );
}

export default SectionHeader;
