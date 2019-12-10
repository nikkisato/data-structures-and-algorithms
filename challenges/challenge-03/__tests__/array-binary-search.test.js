const arraySearch = require('../array-binary-search');

describe('array search function', () => {
  it('should search for the array', () => {
    expect(arraySearch([4, 8, 15, 16, 23, 42], 15)).toEqual([2]);
  });
});
