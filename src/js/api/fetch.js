import { apiPath } from "../constants/urls"

export async function fetchData(body) {

const res = await fetch(`${apiPath}`, {
method: "post",
body: JSON.stringify(),
headers: headers("application/json")
});

if (Response.ok) {
  return await res.json();
}

throw new Error(response.status);
}