import { createHtmlElement } from "../html/createHtml";
import { headers } from "./headers";
import { apiPath } from "../constants/urls";
import * as constant from "../constants/index";

export async function fetchData(body, method) {
  try {
    const container = createHtmlElement("div", "bot-response", "", botResponseContainer);
    constant.loaderContainer.style.display = "flex";

    const res = await fetch(`${apiPath}`, {
      method: method,
      body: JSON.stringify(body),
      headers: headers("application/json"),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error.message);
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder("utf-8");

    while (true) {
      const chunk = await reader.read();
      const { done, value } = chunk;

      if (done) {
        break;
      }

      const decodedChunk = decoder.decode(value);
      const lines = decodedChunk.split("\n");
      const parsedLines = lines
        .map((line) => line.replace(/^data: /, "").trim())
        .filter((line) => line !== "" && line !== "[DONE]")
        .map((line) => JSON.parse(line));

      for (const parsedLine of parsedLines) {
        const { choices } = parsedLine;
        const { delta } = choices[0];
        const { content } = delta;

        if (content) {
          container.textContent += content;
        }
      }
    }
  } catch (error) {
    return await error;
  } finally {
    constant.loaderContainer.style.display = "none";
  }
}
