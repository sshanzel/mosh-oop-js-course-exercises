let _stack = new WeakMap();

class Stack {
  constructor() {
    _stack.set(this, []);
  }

  get count() {
    console.log(_stack.get(this).length);
  }

  push(stack) {
    _stack.get(this).push(stack);
  }

  pop() {
    const stack = _stack.get(this);

    if (stack.length === 0) throw new Error("No item in stack!");

    stack.pop();
  }

  peek() {
    const stack = _stack.get(this);

    if (stack.length === 0) throw new Error("No item in stack!");

    console.log(stack[stack.length - 1]);
  }
}
