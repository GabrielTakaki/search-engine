import React from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import Text from "../../../components/data-display/Text";
import Display from "../../../components/data-display/Display";
import { COLORS } from "../../../consts/colors";
import Divider from "../../../components/data-display/Divider";
import { styled } from "styled-components";
import { useComplaints } from "../context/ComplaintsContext";
import { getComplaintById } from "../selectors";

const Column = styled.div`
  display: flex;
  gap: ${(props) => props.gap || "10px"};
  width: ${(props) => props.width};
  flex-direction: column;
`;
const SpaceBetween = styled.div`
  display: flex;
  max-width: 900px;
  justify-content: space-between;
`;

function ComplaintsListItem({ complaintId }) {
  const { complaints } = useComplaints();
  const data = getComplaintById(complaints.entities)(complaintId);
  return (
    <>
      <Column gap="20px">
        <Text
          textTransform="uppercase"
          label={dayjs(data.date).format("MMM DD YYYY")}
          weight="bold"
        />
        <Display label={data.title} color={COLORS.primary[500]} size="md" />
        <Text label={data.description} color={COLORS.neutral[500]} />
        <SpaceBetween>
          <Column width="120px">
            <Text label="Category" size="sm" />
            <Text label={data.category} size="sm" weight="bold" />
          </Column>
          <Column width="120px">
            <Text label="Decision" size="sm" />
            <Text label={data.decision} size="sm" weight="bold" />
          </Column>
          <Column width="120px">
            <Text label="Company" size="sm" />
            <Text label={data.company} size="sm" weight="bold" />
          </Column>
        </SpaceBetween>
      </Column>
      <Divider size="lg" />
    </>
  );
}

ComplaintsListItem.propTypes = {
  complaintId: PropTypes.string.isRequired
};

export default ComplaintsListItem;
