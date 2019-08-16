import { extendObject } from "./utils.js";
import { HtmlElement } from "./HtmlElement.js";

export function HtmlImageElement(src = "") {
  this.src = src;

  this.render = function() {
    console.log(`<img src="${this.src}" />`);
  };
}

extendObject(HtmlImageElement, HtmlElement);
HtmlElement.call(HtmlImageElement.prototype);
