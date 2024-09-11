import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import useService from "../../../hooks/useService";
import { getComplaints } from "../services/getComplaints";
import PropTypes from "prop-types";
import dayjs from "dayjs";

function getSearchParams() {
  const searchParams = new URLSearchParams(window.location.search);
  return {
    title: searchParams.get("title"),
    category: searchParams.get("category"),
    company: searchParams.get("company"),
    decision: searchParams.get("decision"),
    date: searchParams.get("date") ? dayjs.utc(searchParams.get("date")).format("YYYY-MM-DD") : ""
  };
}

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
  const [complaints, setComplaints] = useState({ ids: [], entities: {} });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    perPage: 5,
    total: 0,
    totalPages: 0,
    sortBy: ""
  });

  const [isFetchingComplaints, fetchComplaints] = useService(getComplaints, {
    autoStart: false,
    onData: ({ data, total }) => {
      setPagination((prev) => ({ ...prev, total, totalPages: Math.ceil(total / prev.perPage) }));
      setComplaints(normalizeData(data));
    }
  });

  const { title, category, company, decision, date } = useMemo(getSearchParams, [
    window.location.search
  ]);

  const handleFetchComplaints = useCallback(
    (props) => {
      fetchComplaints({
        title,
        company,
        category,
        decision,
        date,
        ...props,
        sortBy: pagination.sortBy
      });
    },
    [title, category, decision, date, pagination.sortBy]
  );

  const updatePagination = useCallback((path, data) => {
    setPagination((prev) => ({ ...prev, currentPage: 1, [path]: data }));
  }, []);

  useEffect(() => {
    handleFetchComplaints({
      page: pagination.currentPage,
      perPage: pagination.perPage,
      sortBy: pagination.sortBy
    });
  }, [pagination.currentPage, pagination.perPage, pagination.sortBy]);

  const value = useMemo(() => {
    return {
      complaints,
      loading: isFetchingComplaints,
      pagination,
      updatePagination,
      handleFetchComplaints
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
