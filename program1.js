/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  for (let char of s) {
  
    if (char in map) {
      
      if (stack.pop()!==map[char]) 
        return false;
      } else {
        stack.push(char);
      }
    
  }
  return stack.length===0;
};
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));

module.exports = { isValid };
