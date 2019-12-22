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
    this.tail = null;
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

  MergeList(list1, list2) {
    if(list1 == null) return list2;
    if(list2 == null) return list1;

    if(list1.data < list2.data) {
      list1.next = MergeList(list1.next, list2);
      return list1;
    } else {
      if(list1.data < list2.data) {
        list1.next = MergeList(list1.next, list2);
        return list1;
      }
    }
  }

}

module.exports = { LinkedList, Node };
  
  


// mergeTwoLists(l1, l2) {
//   var res = new Node();
//   var curr = res;
//   while(l1 !== null && l2 !== null) {
//     if(l1.val <= l2.val) {
//       // Set current node to l1 if less than or equal
//       curr.next = l1;
//       // Move l1's head to next
//       l1 = l1.next;
//     } else {
//       // Else same case for l2
//       curr.next = l2;
//       l2 = l2.next;
//     }
//     // Move current to next
//     curr = curr.next;
//   }

//   if(l1 !== null) {
//     curr.next = l1;
//   } else if(l2 !== null) {
//     curr.next = l2;
//   }

//   return res.next;
// }
