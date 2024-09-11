import React from "react";
import { styled } from "styled-components";
import Display from "../data-display/Display";
import Avatar from "../data-display/Avatar";

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 40px;
  margin-top: 20px;
  gap: 15px;
`;

function Header() {
  return (
    <Container>
      <Display label="Name Surname" size="sm" />
      <Avatar />
    </Container>
  );
}

export default Header;
