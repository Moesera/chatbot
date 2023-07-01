export const headers = (contentType) => {
  const API_KEY = storage.load("api_key");
  const headers = {};

  if (contentType) {
    headers["Content-Type"] = contentType;
  }

  if (token) {
    headers.Authorization = `Bearer ${API_KEY}`;
  }

  return headers;
};