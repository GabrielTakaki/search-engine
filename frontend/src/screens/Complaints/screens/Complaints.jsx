import React from "react";
import { styled } from "styled-components";
import SectionHeader from "../components/SectionHeader";
import ComplaintsFilters from "../components/ComplaintsFilters";
import ComplaintsProvider from "../context/ComplaintsContext";
import ComplaintsList from "../components/ComplaintsList";
import Separator from "../../../components/general/Separator";

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

function Complaints() {
  return (
    <Container>
      <SectionHeader />
      <Separator size="sm" />
      <ComplaintsProvider>
        <ComplaintsFilters />
        <ComplaintsList />
      </ComplaintsProvider>
    </Container>
  );
}

export default Complaints;
