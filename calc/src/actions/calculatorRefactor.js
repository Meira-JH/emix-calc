export function handleCurrentNumber(currentNumber) {
  return {
    type: "HANDLE_CURRENT_NUMBER",
    payload: {
      currentNumber,
    },
  };
}

export function handleCurrentOperation(input) {
  return {
    type: "HANDLE_CURRENT_OPERATION",
    payload: {
      input,
    },
  };
}

export function handleDelete(input) {
  return {
    type: "HANDLE_DELETE",
    payload: {
      input,
    },
  };
}

export function handleEqual() {
  return {
    type: "HANDLE_EQUAL",
    payload: {},
  };
}

export function handleAux(input) {
  return {
    type: "HANDLE_AUX",
    payload: {
      input,
    },
  };
}
