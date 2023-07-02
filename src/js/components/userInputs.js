import { createHtmlElement } from "../html/createHtml";

/**
 * Checks if a placeholder is empty
 * @param {htmlNode} element The input element you want to check if its empty
 * @param {string} data data attribute you want to set to the element;
 * @param {string} dataContent data attribute content you want to set if empty
 * @example
 * ```js
 * checkPlaceholderEmpty(htmlElement, "content to set if empty")
 * ```  
 */
export function checkPlaceholderEmpty(element, attribute, placeholder) {
  if (element.innerHTML.trim() === "<br>") {
    element.innerHTML = "";
  }

  if (element.innerHTML.trim() === "") {
    element.setAttribute(attribute, placeholder);
  }
}