import { extendObject } from "./utils.js";
import { HtmlElement } from "./HtmlElement.js";

export function HtmlSelectElement(items) {
  if (items && !Array.isArray(items))
    throw new Error("Argument needs to be an array!");

  this.items = items || [];

  this.addItem = function(item) {
    this.items.push(item);
  };

  this.remoteItem = function(item) {
    const i = this.items.indexOf(item);
    delete this.items[i];
  };

  this.render = function() {
    let select = `
<select>
  ${this.items.map(i => `<option>${i}</option>`).join(`
  `)}
</select>
`;
    console.log(select);
  };
}

extendObject(HtmlSelectElement, HtmlElement);
HtmlElement.call(HtmlSelectElement.prototype);
