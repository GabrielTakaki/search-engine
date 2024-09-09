import React, { useCallback, useEffect, useRef } from "react";
import { styled } from "styled-components";
import TextField from "../../../components/inputs/TextField";
import Button from "../../../components/inputs/Button";
import Select from "../../../components/inputs/Select";
import { useComplaints } from "../context/ComplaintsContext";

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
  const { fetchComplaints } = useComplaints();
  const formRef = useRef(null);
  const searchParams = new URLSearchParams(window.location.search);

  const handleSubmitFilter = useCallback((event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());

    Object.keys(fieldValues).forEach((key) => {
      if (fieldValues[key]) {
        searchParams.set(key, fieldValues[key]);
      } else {
        searchParams.delete(key);
      }
    });
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState({}, "", newUrl);

    fetchComplaints(fieldValues);
  }, []);

  const handleClearFilters = useCallback(() => {
    if (formRef.current) {
      formRef.current.reset();
      window.history.pushState({}, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
    window.history.pushState({}, "", window.location.pathname);
  }, []);

  return (
    <form ref={formRef} onSubmit={handleSubmitFilter}>
      <Container>
        <Row>
          <TextField name="title" />
          <Button type="submit" onClick={console.log} label="Search" size="lg" />
        </Row>
        <Row>
          <Select
            name="category"
            options={[
              { label: "teste", value: "teste" },
              { label: "teste2", value: "teste2" },
              { label: "teste3", value: "teste3" },
              { label: "teste4", value: "teste4" }
            ]}
            placeholder="Category"
          />
          <Select placeholder="Decision" />
          <Select placeholder="Company" />
        </Row>
        <Row>
          <Button onClick={handleClearFilters} variant="ghost" label="Clear Filters" />
        </Row>
      </Container>
    </form>
  );
}

export default ComplaintsFilters;
