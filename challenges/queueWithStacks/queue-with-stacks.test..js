const { PseudoQueue } = require('../queueWithStacks/queue-with-stacks');

describe('queue', () => {
    it('should add items to the queue with enqueue', () => {
        const queue = new queue();
        queue.enqueue(1);
        expect(queue.stack1.peek()).toEqual(1);
    });

    it('should remove the first item', () => {
        const queue = new queue();
    
    });



}