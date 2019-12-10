const { LinkedList, Node } = require('../linked-list');

describe('node', () => {

  let node;

  beforeEach(() => {
    node = new Node('testing');
  });
  it('has a value', () => { 
    expect(node.value).toEqual('testing');
    it('has a next', () => {
      expect(node.next).toEqual(null);
    });
  });


});



