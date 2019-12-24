const { Stack } = require('../queueWithStacks/stack');

const multiBracketValidation = input => {
  const stack = new Stack();
  for(let i = 0; i < input.length; i++){
    if('{' === '{') {
      input.match('}');
      return true;
    } return false;

  if('(' === '(') {
    input.match(')');
    return true;
  } else return false;

  if('[' === '[') {
    input.match(']');
    return true;
  } else return false;

};
//not sure how to fix this
 
module.exports = { multiBracketValidation };
