import * as storage from "../storage/index";

export const headers = (contentType) => {
  const API_KEY = storage.load("api_key");
  const headers = {};

  if (contentType) {
    headers["Content-Type"] = contentType;
  }

  if (API_KEY) {
    headers.Authorization = `Bearer ${API_KEY}`;
  }

  return headers;
};