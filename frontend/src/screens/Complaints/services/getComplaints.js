import { request } from "../../../helpers/request";

export function getComplaints({ page, perPage, sortBy, ...filters }) {
  return request({
    method: "GET",
    url: "complaints",
    params: {
      page,
      per_page: perPage,
      ...(sortBy ? { sort_by: sortBy } : {}),
      ...filters
    }
  });
}
