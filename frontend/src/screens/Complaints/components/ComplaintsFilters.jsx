import React, { useCallback, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import TextField from "../../../components/inputs/TextField";
import Button from "../../../components/inputs/Button";
import Select from "../../../components/inputs/Select";
import { useComplaints } from "../context/ComplaintsContext";
import DatePicker from "../../../components/inputs/DatePicker";
import Form from "../../../components/general/Form";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex: 1;
`;

function ComplaintsFilters() {
  const { handleFetchComplaints, pagination } = useComplaints();
  const formRef = useRef(null);
  const searchParams = new URLSearchParams(window.location.search);

  const [clearFilters, setClearFilters] = useState(false);

  const handleSubmitFilter = useCallback(
    (values) => {
      Object.keys(values).forEach((key) => {
        if (values[key]) {
          searchParams.set(key, values[key]);
        } else {
          searchParams.delete(key);
        }
      });
      const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
      window.history.pushState({}, "", newUrl);

      handleFetchComplaints(values);
    },
    [pagination.sortBy]
  );

  const handleClearFilters = useCallback(() => {
    if (formRef.current) {
      formRef.current.reset();
      setClearFilters(true);
      window.history.pushState({}, "", window.location.pathname);
    }
  }, []);

  const handleClearComplete = () => {
    setClearFilters(false);
  };

  useEffect(() => {
    window.history.pushState({}, "", window.location.pathname);
  }, []);

  return (
    <Form ref={formRef} onSubmit={handleSubmitFilter}>
      <Container>
        <Row>
          <TextField name="title" />
          <Button type="submit" label="Search" size="lg" />
        </Row>
        <Row>
          <Select
            name="category"
            options={[
              { label: "-", value: "" },
              { label: "Banking", value: "Banking" },
              { label: "Insurance", value: "Insurance" },
              { label: "Telecommunications", value: "Telecommunications" },
              { label: "Retail", value: "Retail" }
            ]}
            placeholder="Category"
            onClearHandled={handleClearComplete}
            clear={clearFilters}
          />
          <Select
            placeholder="Decision"
            name="decision"
            clear={clearFilters}
            options={[
              { label: "-", value: "" },
              { label: "Upheld", value: "Upheld" },
              { label: "Dismissed", value: "Dismissed" }
            ]}
            onClearHandled={handleClearComplete}
          />
          <Select
            placeholder="Company"
            name="company"
            clear={clearFilters}
            options={[
              { label: "-", value: "" },
              { label: "Walmart", value: "Walmart" },
              { label: "Apple", value: "Apple" },
              { label: "Mastercard", value: "Mastercard" },
              { label: "Uber", value: "Uber" }
            ]}
            onClearHandled={handleClearComplete}
          />
          <DatePicker name="date" clear={clearFilters} onClearHandled={handleClearComplete} />
        </Row>
        <Row>
          <Button onClick={handleClearFilters} variant="ghost" label="Clear Filters" />
        </Row>
      </Container>
    </Form>
  );
}

export default ComplaintsFilters;
