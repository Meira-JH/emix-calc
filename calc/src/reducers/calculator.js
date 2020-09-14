const initialState = {
  currentNumber: "",
  lastNumber: "",
  operator: null,
  currentOperation: " ",
  result: null,
  zeroDivision: false,
};

const calculator = (state = initialState, action) => {
  console.log("reducer", action.payload);
  switch (action.type) {
    case "SET_CURRENT_NUMBER": {
      return {
        ...state,
        currentNumber: action.payload.currentNumber,
        zeroDivision: false
      };
    }
    case "SET_CURRENT_OPERATION": {
      return {
        ...state,
        currentOperation: action.payload.currentOperation,
      };
    }
    case "SET_OPERATOR": {
      return {
        ...state,
        operator: action.payload.operator,
      };
    }
    case "SET_LAST_NUMBER": {
      return {
        ...state,
        lastNumber: action.payload.lastNumber,
      };
    }
    case "SET_RESULT": {
      return {
        ...state,
        result: action.payload.result,
        currentNumber: action.payload.result,
        lastNumber: "",
        operator: "",
        currentOperation: "",
      };
    }
    case "OPERATION": {
      return {
        ...state,
        result: action.payload.result,
        lastNumber: action.payload.lastNumber,
        operator: action.payload.operator,
        currentNumber: action.payload.currentNumber,
      };
    }
    case "BACKSPACE": {
      return {
        ...state,
        result: action.payload.input,
      };
    }
    case "ZERO_DIVISION": {
      return {
        ...state,
        zeroDivision: action.payload.zeroDivision,
        currentNumber: action.payload.currentNumber
      };
    }
    default:
      return state;
  }
};

export default calculator;
