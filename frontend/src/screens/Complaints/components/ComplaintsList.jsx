import React from "react";
import List from "../../../components/data-display/List";
import { useComplaints } from "../context/ComplaintsContext";
import { styled } from "styled-components";
import Display from "../../../components/data-display/Display";
import Text from "../../../components/data-display/Text";
import { COLORS } from "../../../consts/colors";
import Select from "../../../components/inputs/Select";
import Divider from "../../../components/data-display/Divider";

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
  gap: ${(props) => props.gap || "10px"};
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  gap: ${(props) => props.gap || "10px"};
`;
const SpaceBetween = styled.div`
  display: flex;
  max-width: 900px;
  justify-content: space-between;
`;

function ComplaintsList() {
  const { complaints, pagination, handlePaginationChange, handlePerPageChange } = useComplaints();

  return (
    <Container>
      <ListHeaderContainer>
        <Column>
          <Display label="Results" weight="bold" size="lg" />
          <Text
            color={COLORS.neutral.gray}
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
            defaultValue={pagination.perPage}
          />
        </Row>
      </ListHeaderContainer>
      <List
        pagination={pagination}
        datasource={complaints || []}
        onChange={handlePaginationChange}
        renderItems={(data) => (
          <>
            <Column gap="20px">
              <Display label={data.title} color={COLORS.primary.default} size="md" />
              <Text label={data.description} color={COLORS.neutral.gray} />
              <SpaceBetween>
                <Column>
                  <Text label="Category" size="sm" />
                  <Text label={data.category} size="sm" weight="bold" />
                </Column>
                <Column>
                  <Text label="Decision" size="sm" />
                  <Text label={data.decision} size="sm" weight="bold" />
                </Column>
                <Column>
                  <Text label="Company" size="sm" />
                  <Text label={data.company} size="sm" weight="bold" />
                </Column>
              </SpaceBetween>
            </Column>
            <Divider size="lg" />
          </>
        )}
        keyExtractor={(data) => data.id}
      />
    </Container>
  );
}

export default ComplaintsList;
