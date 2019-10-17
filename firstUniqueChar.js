// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

var firstUniqChar = function(s) {
 for(var i=0;i<s.length;i++){
   if(s.match(new RegExp(s[i],"g")).length == 1)
     return i;
 }
  return -1;
}
console.log('ajax');

// Output >> 1
