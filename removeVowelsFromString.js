// Remove vowels from a string

function noVowels(s){
  let vowels = ["a","e","i","o","u"];
  let new_s = ""
  for(let i=0;i<s.length;i++){
    if(!vowels.includes(s[i].toLowerCase()))
      new_s += s[i]
  }
  return new_s;
}
console.log(noVowels("My name is JOHN"))

// Output >> "My nm s JHN"
