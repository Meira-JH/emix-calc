export function verifyExistence(currentOperation, input) {
  for (let element of currentOperation) {
    if (input.toString() === "." && element === ".") {
      return "";
    }
    if(input.toString() === "0" && currentOperation === " "){
        return "";
    }
  }
  console.log(currentOperation);
  return input.toString();
}

export function add(currentOperation){
    
}

export function compute(currentNumber, operator){

    if(operator === "plus"){

    }
}

