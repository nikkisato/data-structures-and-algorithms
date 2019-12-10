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

  append(node) {
    let current = this.head;
    while(current.next != null) {
      current = current.next;}
    current.next = node;
  }

  insertBefore(node, newNode) {
    let current = this.head;
    while(current.next !== node) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  insertAfter(node, newNode) {
    let current = this.head;
    while(current.value != node) {
      current = current.next;    }
    newNode.next = current.next;
    current.next = newNode;
  }




}

module.exports = { LinkedList, Node };
  
  
