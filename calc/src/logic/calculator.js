export function verifyExistence(currentNumber, input) {
  for (let element of currentNumber) {
    if (input === "." && element === ".") {
      return "";
    }
    if (input === "0" && currentNumber === " ") {
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
    x1 = (x + a / x) / 2;
  } while (x !== x1);
  return x;
}

export function handleCurrentNumber(button, currentNumber) {
  const newCurrentNumber =
    currentNumber + verifyExistence(currentNumber, button.content);
  return newCurrentNumber;
}

export function operation(state, operator) {
  switch (state.operator) {
    case "plus": {
      const operation = (
        Number(state.lastNumber) + Number(state.currentNumber)
      ).toString();
      return {
        ...state,
        lastNumber: operation,
        operator: operator,
        currentNumber: "",
        result: operation,
      };
    }
    case "minus": {
      const operation = (
        Number(state.lastNumber) - Number(state.currentNumber)
      ).toString();
      return {
        ...state,
        lastNumber: operation,
        operator: operator,
        currentNumber: "",
        result: operation,
      };
    }
    case "times": {
      const operation = (
        Number(state.lastNumber) * Number(state.currentNumber)
      ).toString();
      return {
        ...state,
        lastNumber: operation,
        operator: operator,
        currentNumber: "",
        result: operation,
      };
    }
    case "divided": {
      const operation = (
        Number(state.lastNumber) / Number(state.currentNumber)
      ).toString();
      return {
        ...state,
        lastNumber: operation,
        operator: operator,
        currentNumber: "",
        result: operation,
      };
    }
    default:
      return "";
  }
}

export function handleEqual(operator, currentNumber, lastNumber) {
  switch (operator) {
    case "plus": {
      return (Number(currentNumber) + Number(lastNumber)).toString();
    }
    case "minus": {
      return (Number(lastNumber) - Number(currentNumber)).toString();
    }
    case "times": {
      return (Number(lastNumber) * Number(currentNumber)).toString();
    }
    case "divided": {
      return (Number(lastNumber) / Number(currentNumber)).toString();
    }
    default:
      return "";
  }
}

export function handleDelete(button, state) {
  if (
    state.operator !== "equal" &&
    state.currentNumber === state.result &&
    button === "erase"
  ) {
    return {
      ...state,
      currentNumber: state.result.substr(0, state.currentNumber.length - 1),
      result: state.result.substr(0, state.currentNumber.length - 1),
    };
  }
  if (button === "clear") {
    return {
      currentNumber: "",
      lastNumber: "",
      operator: null,
      lastOperator: null,
      currentOperation: " ",
      result: null,
      zeroDivision: false,
    };
  }
  return state;
}
