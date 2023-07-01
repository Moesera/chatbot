
/**
 * 
 * @param {string} elementProp the element you want to create
 * @param {string} contentProp Content you want inside your element
 * @param {string} classProp class you want to set to you elements
 * @param {htmlNode} htmlParent HtmlNode you want to append the html element to
 * @return HTML element.
 * @example
 * ```js
 * createHtmlElement("div", "myClass", "content", HtmlElement)
 * ```
 */
export function createHtmlElement(elementProp, contentProp, classProp, htmlParent) {
  var htmlElement = document.createElement(`${elementProp}`);
  htmlElement.innerHTML = contentProp;
  htmlElement.classList.add(`${classProp}`);
  htmlParent.appendChild(htmlElement);
}