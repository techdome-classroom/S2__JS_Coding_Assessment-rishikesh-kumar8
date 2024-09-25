/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char in map) {
      let topElement = stack.length === 0 ? "#" : stack.pop();
      if (map[char] !== topElement) {
        return false;
      } else {
        stack.push(char);
      }
    }
  }
  return stack.length===0;
};
console.log(isValid("()"));
console.log(isValid("()()"));
console.log(isValid("(]"));
console.log(isValid("()"));

module.exports = { isValid };
