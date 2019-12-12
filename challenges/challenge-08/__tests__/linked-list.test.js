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
    expect(list.includes('legolas')).toEqual(false);
  });

  it('returns a string of values within the list with toString', () => {
    checkMeOut();
    expect(list.toString()).toEqual('out->me->check');
  });

  it('adds a node to the end of the list with append', () => {
    checkMeOut(); 
    // expect(list.toString()).toEqual('out->me->check');
    list.append('corgi');
    expect(list.toString()).toEqual('out->me->check->corgi');
  });

  it('inserts a node before a specified node value with insertBefore', () => {
    checkMeOut();
    list.insertBefore('me', 'corgi');
    expect(list.toString()).toEqual('out->corgi->me->check');
  });

  it('inserts a node after a specified node value with insertAfter()', () => {
    checkMeOut();
    list.insertAfter('me', 'corgi');
    expect(list.toString()).toEqual('out->me->corgi->check');
  });

  it('kthFromEnd takes the value of k and returns a value', () => {
    list.kthFromEnd('head -> [1] -> [3] -> [8] -> [2] -> X');
    expect(list.toString()).toEqual('2');
  });

  it('zipped arrays', () => {
    list1 = [1,3,5,7,9];
    list2 = [2,4,6,8,10];

    list.
  }

});









