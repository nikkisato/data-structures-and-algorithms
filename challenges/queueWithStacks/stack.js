class Node {
  constructor(value, next = null) {
    this.next = next;
    this.value = value;
  }
}
  
class Stack {
  constructor() {
    this.top = null;
  }
  
  push(value) {
    this.top = new Node(value, this.top);
  }
  
  pop(){
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  
    //if (!this.top) return null;
    // const top = this.top;
    // this.top = top.next;
    // return top;
  }
  
  peek() {
    return this.top.value;
    // if (!this.top) return null
    // return this.top.value
  }
  
  isEmpty() {
    if(this.top.value === null) {
      return true;
    } return false;
    //return !this.top
  }
}

module.exports = { Node, Stack };
