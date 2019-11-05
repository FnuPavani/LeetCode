// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

var toLowerCase = function(s) {
   let result = "";
  for(let i=0;i<s.length;i++){
    let code =s.charCodeAt(i)
    if(code>64 && code<91){
      result += String.fromCharCode(code+32)
    } else {
      result += s[i];
    }
  }
    return result; 
};

console.log(convertToLowerCase("Be KIND and spread HAPPINESS!"))

// Output >> "be kind and spread happiness!"
