const { Queue } = require('../fifoAnimalShelter/fifo-animal-shelter');

describe('Animal shelter queue', () => {
  it('can add an animal node to the queue', () => {
    const queue = new Queue();
    queue.enqueue('dog');
    expect(queue.front.value).toEqual('dog');
    expect(queue.last.value).toEqual('dog');
    queue.enqueue('cat');
    expect(queue.front.value).toEqual('dog');
    expect(queue.last.value).toEqual('cat');
    queue.enqueue('dog');
    expect(queue.front.value).toEqual('dog');
    expect(queue.last.value).toEqual('dog');
  });

});
