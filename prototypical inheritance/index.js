function extendsObject(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function HtmlElement() {
  this.click = function() {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function() {
  console.log("focused");
};

function HtmlSelectElement(items) {
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
}

extendsObject(HtmlSelectElement, HtmlElement);
HtmlElement.call(HtmlSelectElement.prototype);
