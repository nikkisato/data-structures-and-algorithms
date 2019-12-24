const { PseudoQueue } = require('./queue-with-stacks');


describe('PseudoQueue', () => {
  it('should add items to the PseudoQueue with enqueue', () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    expect(pseudoQueue.stack1.peek()).toEqual(1);
    pseudoQueue.enqueue(2);
    expect(pseudoQueue.stack1.peek()).toEqual(2);
  });
  
  it('should remove the first in item with dequeue', () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);
    expect(pseudoQueue.dequeue().value).toEqual(1);
    expect(pseudoQueue.dequeue().value).toEqual(2);
    expect(pseudoQueue.dequeue().value).toEqual(3);
  });
});
