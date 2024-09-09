export default class ApiError extends Error {
  constructor(error) {
    super();

    this.message = error.response.data.message || "Unexpected Error";
    this.name = error.response.data.error || "unexpected_error";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
