
/**
 * Create a html element component
 * @param {string} elementProp the element you want to create
 * @param {string} classProp class you want to set to you elements
 * @param {string} contentProp Content you want inside your element
 * @param {htmlNode} htmlParent HtmlNode you want to append the html element to a container
 * @param {string} data Use this to set a data attribute to your html element
 * @param {string} dataContent sets the content for the data attribute
 * @return HTML element.
 * @example
 * ```js
 * createHtmlElement("div", "myClass", "content", HtmlElement, "data-status", "show")
 * ```
 */
export function createHtmlElement(elementProp, classProp, contentProp, htmlParent, data, dataContent) {

  var htmlElement = document.createElement(`${elementProp}`);
  htmlElement.innerHTML = contentProp;
  htmlElement.setAttribute(data, dataContent);
  htmlElement.classList.add(`${classProp}`);
  htmlParent.append(htmlElement);
}