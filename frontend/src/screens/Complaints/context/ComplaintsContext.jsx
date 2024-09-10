import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import useService from "../../../hooks/useService";
import { getComplaints } from "../services/getComplaints";
import PropTypes from "prop-types";
import dayjs from "dayjs";

function normalizeData(data) {
  return data.reduce(
    (acc, item) => {
      acc.ids.push(item.id);
      acc.entities[item.id] = item;
      return acc;
    },
    { ids: [], entities: {} }
  );
}

const ComplaintsContext = createContext(null);

function ComplaintsProvider({ children }) {
  const searchParams = new URLSearchParams(window.location.search);

  const [complaints, setComplaints] = useState({ ids: [], entities: {} });
  const [pagination, setPagination] = useState({ page: 1, perPage: 5, total: 0, totalPages: 0 });

  const [isFetchingComplaints, fetchComplaints] = useService(getComplaints, {
    autoStart: false,
    onData: ({ data, total }) => {
      setPagination((prev) => ({ ...prev, total, totalPages: Math.ceil(total / prev.perPage) }));
      setComplaints(normalizeData(data));
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
    const date = searchParams.get("date")
      ? dayjs.utc(searchParams.get("date")).format("YYYY-MM-DD")
      : "";

    handleFetchComplaints({
      page: pagination.page,
      perPage: pagination.perPage,
      ...(title && { title }),
      ...(company && { company }),
      ...(category && { category }),
      ...(decision && { decision }),
      ...(date && { date })
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
  }, [complaints, pagination, isFetchingComplaints]);

  return <ComplaintsContext.Provider value={value}>{children}</ComplaintsContext.Provider>;
}

ComplaintsProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ComplaintsProvider;

export const useComplaints = () => {
  return useContext(ComplaintsContext);
};
