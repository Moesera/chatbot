import { createHtmlElement } from "../html/createHtml";

var div = document.querySelector(".contenteditable-div");

/**
 * Checks if a placeholder is empty
 * @param {htmlNode} element The input element you want to check if its empty
 * @param {string} content Message you want to replace with if empty or pass empty string;
 * @example
 * ```js
 * checkIfEmpty(htmlElement, "content to set if empty")
 * ```  
 */
export function checkPlaceholderEmpty(element, content) {
  if (element.innerHTML.trim() === "") {
    element.innerHTML = "";
    element.appendChild(createHtmlElement("span", "placeholder", content, div ));
  }
}