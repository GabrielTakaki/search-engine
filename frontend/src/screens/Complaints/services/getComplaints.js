import { request } from "../../../helpers/request";

export function getComplaints({ page, perPage, ...filters }) {
  return request({
    method: "GET",
    url: "complaints",
    params: {
      page,
      per_page: perPage,
      ...filters
    }
  });
}
