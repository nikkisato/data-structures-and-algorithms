class Node {
  constructor(value, next = null){
    //adds a value 
    this.value = value;
    //points to the next node
    this.next = next;
  }
}
  
class LinkedList {
  constructor(){
    this.head = null;
    this.tail =
  }

  
  insert(value){
    const node = new Node(value, this.head);
    this.head = node;
  }
  
  includes(val){
    let searchNode = this.head;
    while(searchNode){
      if(val === searchNode.value) return true;
      searchNode = searchNode.next;
    } 
    return false;
  }

  toString(){
    if(!this.head) return '';
    const nodes = [];
    let node = this.head;
    while(node){
      nodes.push(node.value);
      node = node.next;
    }
    return nodes.join('->');
  }

  append(value) {
    const node = new Node(value);
    let current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  insertBefore(value, newValue) {
    const node = new Node(newValue);
    let current = this.head;
    while(current.next.value !== value) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }

  insertAfter(value, newValue) {
    const node = new Node(newValue);
    let current = this.head;
    while(current.value !== value) {
      current = current.next;    
    }
    node.next = current.next;
    current.next = node;
  }

  kthFromEnd(number) {
    let counter = 0;
    let current = this.head;
    while(current.next !== null){
      current = current.next;
      counter++;
    }
    current = this.head;
    for(let i = 0; i < counter - number; i++) {
      current = current.head;
    }
    return current.value;
  }

}

module.exports = { LinkedList, Node };
  
  

