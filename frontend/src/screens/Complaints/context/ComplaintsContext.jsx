import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import useService from "../../../hooks/useService";
import { getComplaints } from "../services/getComplaints";
import PropTypes from "prop-types";

const ComplaintsContext = createContext(null);

function ComplaintsProvider({ children }) {
  const [complaints, setComplaints] = useState();
  const searchParams = new URLSearchParams(window.location.search);
  const [pagination, setPagination] = useState({ page: 1, perPage: 5, total: 0, totalPages: 0 });

  const [isFetchingComplaints, fetchComplaints] = useService(getComplaints, {
    autoStart: false,
    onData: ({ data, total }) => {
      if (total !== pagination.total) {
        setPagination((prev) => ({ ...prev, total, totalPages: Math.ceil(total / prev.perPage) }));
      }
      setComplaints(data);
    }
  });

  const handleFetchComplaints = useCallback((props) => {
    fetchComplaints(props);
  }, []);

  const handlePaginationChange = useCallback(
    (page) => {
      setPagination((prev) => ({ ...prev, page }));
    },
    [pagination.total]
  );

  const handlePerPageChange = useCallback(
    (perPage) => {
      setPagination((prev) => ({ ...prev, perPage }));
    },
    [pagination.total]
  );

  useEffect(() => {
    const title = searchParams.get("title");
    const category = searchParams.get("category");
    const company = searchParams.get("company");
    const decision = searchParams.get("decision");

    fetchComplaints({
      page: pagination.page,
      perPage: pagination.perPage,
      ...(title && { title }),
      ...(company && { company }),
      ...(category && { category }),
      ...(decision && { decision })
    });
  }, [pagination.page, pagination.perPage]);

  const value = useMemo(() => {
    return {
      complaints,
      loading: isFetchingComplaints,
      fetchComplaints: handleFetchComplaints,
      pagination,
      handlePaginationChange,
      handlePerPageChange
    };
  }, [complaints]);

  return <ComplaintsContext.Provider value={value}>{children}</ComplaintsContext.Provider>;
}

ComplaintsProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ComplaintsProvider;

export const useComplaints = () => {
  return useContext(ComplaintsContext);
};
