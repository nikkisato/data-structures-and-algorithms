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

zip(l1, l2) {
   //declare a count called l1NodesUsed for l1 and l2NodesUsed for l2
  //if l1's length is 0, return l2
  //l2's length is 0, return l1
  //otherwise, set l1s head as the head of the zip list.
  //compare count to l2's length. If l2's length is exhausted, slice the remaining nodes off of it and add to zip list.
  //iterate l1NodesUsed count
  //set l2's head to the next node in the zip list
  //compare count to l1's length. If l1's length is exhausted, slice the remaining nodes off of it and add to zip list. 
  //repeat.

  let l1NodesUsed = 0;
  let l2NodesUsed = 0;
  if (l1.length === 0) return l2;
  if (l2.length === 0) return l1;
  let l1.head = new Node();
  l1.head.next = l2.head;
}
console.log(zip());
}

module.exports = { LinkedList, Node };
  
  
