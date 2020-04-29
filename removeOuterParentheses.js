// A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

// A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

// Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

// Input: "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

/**
 * @param {string} S
 * @return {string}
 */
 
var removeOuterParentheses = function(S) {
  var result = [];
  var left = 0;
  var right = 0;
  for(var i=0;i<S.length;i++){
    S[i] === '(' ? left++ : right++;
    if(left === right) left = right = 0;
    if(left > 1) result.push(S[i]);
  }
  return result.join("");
};
console.log(removeOuterParentheses("((()())())"));

// Output >> "(()())()"
