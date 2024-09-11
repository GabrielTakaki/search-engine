import React from "react";
import List from "../../../components/data-display/List";
import { useComplaints } from "../context/ComplaintsContext";
import { styled } from "styled-components";
import Display from "../../../components/data-display/Display";
import Text from "../../../components/data-display/Text";
import { COLORS } from "../../../consts/colors";
import Select from "../../../components/inputs/Select";
import ComplaintsListItem from "./ComplaintsListItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const Column = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  gap: 10px;
`;

function ComplaintsList() {
  const {
    complaints,
    pagination,
    handlePaginationChange,
    handlePerPageChange,
    handleSortingChange
  } = useComplaints();

  return (
    <Container>
      <ListHeaderContainer>
        <Column>
          <Display label="Results" weight="bold" size="lg" />
          <Text
            color={COLORS.neutral[500]}
            label={`Showing results of ${pagination.page} of ${pagination.totalPages} of ${pagination.total}`}
          />
        </Column>
        <Row>
          <Select
            onChange={(e) => handlePerPageChange(e.target.value)}
            options={[
              { value: 5, label: "5 per page" },
              { value: 10, label: "10 per page" },
              { value: 15, label: "15 per page" },
              { value: 20, label: "20 per page" }
            ]}
          />
          <Select
            onChange={(e) => handleSortingChange(e.target.value)}
            options={[
              { value: "title", label: "Title" },
              { value: "date", label: "Date" },
              { value: "category", label: "Category" },
              { value: "decision", label: "Decision" },
              { value: "company", label: "Company" }
            ]}
            placeholder="Sort by"
          />
        </Row>
      </ListHeaderContainer>
      <List
        pagination={pagination}
        datasource={complaints.ids || []}
        onChange={handlePaginationChange}
        renderItems={(id) => <ComplaintsListItem complaintId={id} />}
        keyExtractor={(id) => id}
      />
    </Container>
  );
}

export default ComplaintsList;
