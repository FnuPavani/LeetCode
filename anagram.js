// Given two strings s and t , write a function to determine if t is an anagram of s.

function isAnagram(s,t){
  var s1 = s.toLowerCase().split("").sort().join("").trim();
  var s2 = t.toLowerCase().split("").sort().join("").trim();
  if(s1 === s2){
    return true;
  }
  return false;
}
console.log(isAnagram('anaGram','nagaram '));

// Output >> true
