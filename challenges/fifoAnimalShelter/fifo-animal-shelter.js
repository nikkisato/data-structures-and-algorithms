
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
  
class Queue {
  constructor(){
    this.front = null;
    this.back = null;
  }
  
  enqueue(val){
    const node = new Node(val);
    if(!this.front) this.front = node;
    else this.back.next = node;
    this.back = node;
  }
  
  dequeue(pref){
    if(!pref){
      const popped = this.front.value;
      this.front = this.front.next;
      return popped;
    } else {
      let current = this.front;
      while(current.next.value !== pref){
        current = current.next;
        if(!current.next) return 'Preference not available';
      }
      const found = current.next.value;
      current.next = found.next;
      return found;
    }
  }
}
  
module.exports = { Queue };
