import { fetchData } from "../fetch";
import { createHtmlElement } from "../../html/createHtml";
import * as constant from "../../constants/index";

const aiModel = "gpt-3.5-turbo";

export async function createFormData(e) {
  e.preventDefault();

  if(e.target.value >= 0) {
    return;
  }

  const form = e.target;
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());

  const prompt = formValues.messages;

  const newFormValues =  {
    messages: [{role: "user", content: prompt}],
    model: aiModel,
    stream: true,
  }

  createHtmlElement("div", "user-input", prompt, constant.botResponseContainer);

  await fetchData(newFormValues, "post");
  constant.userInputForm.reset();
}