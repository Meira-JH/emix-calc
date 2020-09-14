export function verifyExistence(currentNumber, input) {
  for (let element of currentNumber) {
    if (input === "." && element === ".") {
      return "";
    }
    if(input === "0" && currentNumber === " "){
        return "";
    }
  }
  return input;
}

export function squareRoot(a) {
  var x,
      x1 = a / 2;
      
  do {
      x = x1;
      x1 = (x + (a / x)) / 2;
  } while (x !== x1);
  return x;
}