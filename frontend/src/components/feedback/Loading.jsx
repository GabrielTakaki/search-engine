import React from "react";
import { CircularProgress } from "@mui/material";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

function Loading() {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
}

export default Loading;
