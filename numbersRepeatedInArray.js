// Altimatrik(client - Intuit) interview
// Return an object with array element as property and number of times the element repeated as value


var numbersRepeated = function(arr){
  return arr.reduce((data, index)=>{data[index]=(data[index]||0)+1;return data;},{});
  // Another method - return arr.reduce((data, index)=>{data[index]++?0:data[index]=1;return data},{});
}
console.log(numbersRepeated([1,2,3,4,5,1,2]));

// Output >> {
  1: 2,
  2: 2,
  3: 1,
  4: 1,
  5: 1
}
