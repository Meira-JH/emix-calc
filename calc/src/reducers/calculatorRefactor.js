import {
  operation,
  handleCurrentNumber,
  handleEqual,
  handleDelete,
} from "../logic/calculator";

const initialState = {
  currentNumber: "",
  lastNumber: "",
  operator: null,
  lastOperator: null,
  currentOperation: " ",
  result: null,
  zeroDivision: false,
};

const calculatorRefactor = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CURRENT_NUMBER": {
      if (state.operator === "equal") {
        state = initialState;
      }
      const currentNumber = handleCurrentNumber(
        action.payload.currentNumber,
        state.currentNumber
      );
      return {
        ...state,
        currentNumber: currentNumber,
        zeroDivision: false,
        result: currentNumber,
      };
    }
    case "HANDLE_CURRENT_OPERATION": {
      if (state.operator === "divided" && state.currentNumber === "0") {
        return { ...initialState, zeroDivision: true };
      }

      if (state.currentNumber.length > 0) {
        state.currentOperation =
          state.currentOperation +
          state.currentNumber +
          action.payload.input.content;
      }

      if (
        state.operator === "equal" &&
        action.payload.input.value !== "squareRoot"
      ) {
        return {
          ...state,
          currentNumber: "",
          lastNumber: state.result,
          result: "",
          operator: action.payload.input.value,
        };
      }

      if (
        (!state.operator || state.operator === "equal") &&
        action.payload.input.value !== "squareRoot"
      ) {
        return {
          ...state,
          operator: action.payload.input.value,
          lastNumber: state.currentNumber,
          currentNumber: "",
          result: "",
        };
      }

      if (state.currentOperation === " ") {
        return initialState;
      }

      if (action.payload.input.value === "squareRoot") {
        const square = action.payload.input
          .logic(Number(state.result))
          .toString();

        return {
          ...state,
          lastNumber: square,
          operator: "",
          currentNumber: square,
          result: square,
        };
      }

      if (state.operator) {
        return operation(state, action.payload.input.value);
      }
      return state;
    }
    case "HANDLE_EQUAL": {
      if (state.currentOperation === " ") {
        return initialState;
      }

      if (state.operator === "divided" && state.currentNumber === "0") {
        return { ...initialState, zeroDivision: true };
      }

      if (!state.currentNumber) {
        return (state.result = state.lastNumber);
      }

      if (state.operator === "equal") {
        const doubleEqual = {
          ...state,
          currentNumber: state.lastNumber,
          lastNumber: state.result,
          operator: state.lastOperator,
        };
        const repeatOperation = operation(doubleEqual, state.lastOperator);
        return {
          ...state,
          currentOperation: repeatOperation.currentOperation,
          operator: "equal",
          result: repeatOperation.result,
        };
      }
      const equalResult = handleEqual(
        state.operator,
        state.currentNumber,
        state.lastNumber
      );

      return {
        ...state,
        lastNumber: equalResult,
        lastOperator: state.operator,
        operator: "equal",
        result: equalResult,
      };
    }
    case "HANDLE_DELETE": {
      return handleDelete(action.payload.input.value, state);
    }
    case "HANDLE_AUX": {
      const changeNumber = (Number(state.currentNumber) * -1).toString();
      if (state.operator === "equal") {
        return state;
      }
      if (state.currentNumber) {
        return {
          ...state,
          currentNumber: changeNumber,
          result: changeNumber,
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export default calculatorRefactor;
