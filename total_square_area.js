function totalArea(recArrays) {
  return recArrays.reduce(function(total, recArray) {
    return total + recArray[0] * recArray[1];
  }, 0);
}

function totalSquareArea(recArrays) {
  return recArrays.reduce(function(total, recArray) {
    var area = 0;
    if (recArray[0] === recArray[1]) {
      area = recArray[0] * recArray[1];
    }
    return total + area;
  }, 0);
}