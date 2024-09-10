import React, { forwardRef, useCallback } from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";

const Form = forwardRef(({ children, onSubmit }, ref) => {
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const fieldValues = Object.fromEntries(formData.entries());

      Object.keys(fieldValues).forEach((key) => {
        if (fieldValues[key]) {
          if (key === "date") {
            fieldValues[key] = dayjs.utc(fieldValues[key]).format("YYYY-MM-DD");
          }
        }
      });
      if (onSubmit) {
        onSubmit(fieldValues);
      }
    },
    [onSubmit]
  );

  return (
    <form ref={ref} onSubmit={handleSubmit}>
      {children}
    </form>
  );
});

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
