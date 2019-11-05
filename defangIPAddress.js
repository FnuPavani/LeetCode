// Defanging an IP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]"

var defangIPaddr = function(address) {
  return address.split("").map(data => data.replace(".","[.]")).join("");
};
console.log(defangIPaddr("255.100.50.0"))

// Output >> "255[.]100[.]50[.]0"
