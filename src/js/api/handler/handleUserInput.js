import { fetchData } from "../fetch";

export function createFormData(e) {
  if(e.target.value <= 0) {
    return
  }

  e.preventDefault();

  const form = e.target;

  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());

  const body = fetchData(formValues, "post");

  console.log(body);
}