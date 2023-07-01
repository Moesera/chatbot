import { headers } from "./headers";
import { apiPath } from "../constants/urls"

export async function fetchData(body, method) {

const res = await fetch(`${apiPath}`, {
method: method,
body: JSON.stringify(body),
headers: headers("application/json")
});

if (Response.ok) {
  return await res.json();
}

throw new Error(response.status);
}