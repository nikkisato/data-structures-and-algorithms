const { LinkedList, Node } = require('../linked-list');

describe('node', () => {
  let node;

  beforeEach(() => {
    node = new Node('testing');
  });
  it('has a value', () => { 
    expect(node.value).toEqual('testing');
  });
  it('has a next', () => {
    expect(node.next).toEqual(null);
  });
});


describe('linked List', () => {
  let list;
  
  beforeEach(() => {
    list = new LinkedList();
  });

  const checkMeOut = () => {
    list.insert('check');
    list.insert('me');
    list.insert('out');
  };

  it('has a head', () => { 
    expect(list.head).toEqual(null);
  });
  it('can insert a node to the beginning with insert', () => {
    list.insert('first insert');
    expect(list.head.value).toEqual('first insert');
    list.insert('second insert');
    expect(list.head.value).toEqual('second insert');
  });

  it('can check if list includes a value with includes', () => {
    checkMeOut();

    expect(list.includes('me')).toEqual(true);
    expect(list.includes('out')).toEqual(true);
    expect(list.includes('check')).toEqual(true);
    expect(list.includes('corgi')).toEqual(false);
  });

  it('returns a string of values within the list with toString', () => {
    checkMeOut();
    expect(list.toString()).toEqual('out->me->check');
  });


});









