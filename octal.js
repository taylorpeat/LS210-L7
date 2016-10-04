function octalToDecimal(number) {
  var numbers = number.split("");
  
  return numbers.reduce(function(total, num) {
    return total * 8 + (+num);
  }, 0); 
}