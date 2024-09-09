import axios from "axios";
import ApiError from "./api-error";

export const request = async ({ url, method, params }) => {
  try {
    const response = await axios.request({
      url: `http://localhost:3101/${url}`,
      method,
      params
    });
    return response.data;
  } catch (e) {
    throw new ApiError(e);
  }
};
