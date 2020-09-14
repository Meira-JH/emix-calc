export function setCurrentNumber(currentNumber) {
  return {
    type: "SET_CURRENT_NUMBER",
    payload: {
      currentNumber,
    },
  };
}

export function setCurrentOperation(currentOperation) {
  return {
    type: "SET_CURRENT_OPERATION",
    payload: {
      currentOperation,
    },
  };
}
export function setOperator(operator) {
  return {
    type: "SET_OPERATOR",
    payload: {
        operator,
    },
  };
}
export function setLastNumber (lastNumber) {
  return {
    type: "SET_LAST_NUMBER",
    payload: {
        lastNumber,
    },
  };
}
export function setResult (result) {
  return {
    type: "SET_RESULT",
    payload: {
        result,
    },
  };
}

export function setOperation(operation){
  return {
    type: "OPERATION",
    payload: {
      lastNumber: operation.lastNumber,
      operator: operation.operator,
      currentNumber: operation.currentNumber,
      result: operation.lastNumber
    }
  }
}

export function setEqual(operation){
  return {
    type: "EQUAL",
    payload: {
      lastNumber: operation.lastNumber,
      operator: operation.operator,
      currentNumber: operation.currentNumber,
      result: operation.lastNumber
    }
  }
}

export function backspace (field, input) {
  return {
    type: "BACKSPACE",
    payload: {
        input,
    },
  };
}

export function setZeroDivision(status) {
  return {
    type: 'ZERO_DIVISION',
    payload: {
      zeroDivision: status,
      currentNumber: ""
    }
  }
}