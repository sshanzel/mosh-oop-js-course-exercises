function extendObject(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function HtmlElement() {
  this.click = function() {
    console.log("clicked");
  };

  this.render = function() {};
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

  this.render = function() {
    let select = `<select>`;

    for (let item of this.items)
      select = `${select}
        <option>${item}</option>`;

    select = `
    ${select}</select>`;

    console.log(select);
  };
}

extendObject(HtmlSelectElement, HtmlElement);
HtmlElement.call(HtmlSelectElement.prototype);

function HtmlImageElement(src = "") {
  this.src = src;

  this.render = function() {
    console.log(`<img src="${this.src}" />`);
  };
}

extendObject(HtmlImageElement, HtmlElement);
HtmlElement.call(HtmlImageElement.prototype);
