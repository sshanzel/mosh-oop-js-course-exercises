export function HtmlElement() {
  this.click = function() {
    console.log("clicked");
  };

  this.render = function() {};
}

HtmlElement.prototype.focus = function() {
  console.log("focused");
};
