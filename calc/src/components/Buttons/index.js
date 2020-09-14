import React, { useState } from "react";
import { Button, ButtonContainer, EqualButton, OperatorButton } from "./style";
import { buttons } from "../../logic/buttonsArray";
import { verifyExistence, squareRoot } from "../../logic/calculator";
import { connect } from "react-redux";
import {
  setCurrentNumber,
  setCurrentOperation,
  setOperator,
  setLastNumber,
  setResult,
  setOperation,
  backspace,
  setZeroDivision,
} from "../../actions/calculator";

const Buttons = (props) => {
  function handleOnClick(event) {
    switch (event.type) {
      case "number": {
        return handleInputNumber(event);
      }
      case "operator": {
        return handleInputOperation(event);
      }
      case "equal": {
        return handleEqual(event);
      }
      default:
        return "";
    }
  }

  function handleInputNumber(input) {
    handleCurrentNumber(input);
  }

  function handleCurrentNumber(button) {
    if (!props.operator) {
      props.toSetResult("");
      const newCurrentNumber =
        props.currentNumber +
        verifyExistence(props.currentNumber, button.content);
      console.log("valor do botão clicado", button.content, newCurrentNumber);
      props.toSetCurrentNumber(newCurrentNumber);
    } else {
      props.toSetCurrentNumber("");
      console.log("else bem proximo do set", props.currentNumber);
      const newCurrentNumber =
        props.currentNumber +
        verifyExistence(props.currentNumber, button.content);
      console.log(
        "dentro do else",
        button.content,
        newCurrentNumber,
        props.operator
      );
      props.toSetCurrentNumber(newCurrentNumber);
    }
  }

  function handleInputOperation(input) {
    console.log(props.currentNumber.length);
    if (props.operator === "divided" && props.currentNumber === "0") {
      props.toSetZeroDivision(true);
    }

    if (!props.operator && input.value !== "squareRoot") {
      props.toSetOperator(input.value);
      props.toSetLastNumber(props.currentNumber);
      props.toSetCurrentNumber("");
    }
    if (input.value === "squareRoot") {
      const operation = {
        lastNumber: input.logic(Number(props.currentNumber)).toString(),
        operator: "",
        currentNumber: input.logic(Number(props.currentNumber)).toString(),
      };
      console.log("no square", operation.lastNumber);
      return props.toSetOperation(operation);
    }
    if (props.currentNumber.length > 0) {
      console.log("no operation", input);
      props.toSetCurrentOperation(
        props.currentOperation + props.currentNumber + input.content
      );

      if (props.operator) {
        switch (props.operator) {
          case "plus": {
            const operation = {
              lastNumber: (
                Number(props.lastNumber) + Number(props.currentNumber)
              ).toString(),
              operator: input.value,
              currentNumber: "",
            };
            props.toSetOperation(operation);
            break;
          }
          case "minus": {
            const operation = {
              lastNumber: (
                Number(props.lastNumber) - Number(props.currentNumber)
              ).toString(),
              operator: input.value,
              currentNumber: "",
            };
            props.toSetOperation(operation);
            break;
          }
          case "times": {
            const operation = {
              lastNumber: (
                Number(props.lastNumber) * Number(props.currentNumber)
              ).toString(),
              operator: input.value,
              currentNumber: "",
            };
            props.toSetOperation(operation);
            break;
          }
          case "divided": {
            const operation = {
              lastNumber: (
                Number(props.lastNumber) / Number(props.currentNumber)
              ).toString(),
              operator: input.value,
              currentNumber: "",
            };
            props.toSetOperation(operation);
            break;
          }

          default:
            return "";
        }
      }
    } else if (props.currentNumber.length === 0 && input.value === "minus") {
      console.log(input.content, input.value);
      props.toSetCurrentOperation(input.content);
      props.toSetOperator(input.value);
    }
  }

  function handleEqual() {
    if (props.operator === "divided" && props.currentNumber === "0") {
      return props.toSetZeroDivision(true);
    }
    if (!props.currentNumber) {
      console.log("dentro equal", props.currentNumber, props.lastNumber);

      props.toSetResult(props.lastNumber);
    } else {
      switch (props.operator) {
        case "plus": {
          return props.toSetResult(
            (Number(props.currentNumber) + Number(props.lastNumber)).toString()
          );
        }
        case "minus": {
          return props.toSetResult(
            (Number(props.lastNumber) - Number(props.currentNumber)).toString()
          );
        }
        case "times": {
          return props.toSetResult(
            (Number(props.lastNumber) * Number(props.currentNumber)).toString()
          );
        }
        case "divided": {
          return props.toSetResult(
            (Number(props.lastNumber) / Number(props.currentNumber)).toString()
          );
        }
        default:
          return "";
      }
    }
  }

  const buttonsRender = buttons.map((button, index) => {
    switch (button.type) {
      case "number": {
        return (
          <Button
            type={button.type === "number" ? 700 : 100}
            key={index}
            onClick={() => handleOnClick(button)}
          >
            {" "}
            <span>{button.content}</span>{" "}
          </Button>
        );
      }
      case "aux": {
        return (
          <Button
            type={button.type === "number" ? 700 : 100}
            key={index}
            //   onClick={() => handleOnClick(button)}
          >
            {" "}
            <span>{button.content}</span>{" "}
          </Button>
        );
      }
      case "operator": {
        return (
          <OperatorButton key={index} onClick={() => handleOnClick(button)}>
            {" "}
            <span>{button.content}</span>{" "}
          </OperatorButton>
        );
      }
      case "clear": {
        return (
          <OperatorButton
            key={index}
            onClick={() =>
              props.toSetCurrentNumber("") &
              props.toSetCurrentOperation("") &
              props.toSetLastNumber("") &
              props.toSetOperator("") &
              props.toSetResult("")
            }
          >
            {" "}
            <span>{button.content}</span>{" "}
          </OperatorButton>
        );
      }
      case "erase": {
        return (
          <OperatorButton
            key={index}
            onClick={() =>
              props.backspace(
                props.result && !props.currentNumber
                  ? props.result.substr(0, props.currentNumber.length - 1)
                  : props.currentNumber.substr(
                      0,
                      props.currentNumber.length - 1
                    )
              )
            }
          >
            {" "}
            <span>{button.content}</span>{" "}
          </OperatorButton>
        );
      }
      case "equal": {
        return (
          <EqualButton key={index} onClick={() => handleOnClick(button)}>
            {" "}
            <span>{button.content}</span>{" "}
          </EqualButton>
        );
      }
      default:
        return "";
    }
  });

  return <ButtonContainer>{buttonsRender}</ButtonContainer>;
};

const mapStateToProps = (state) => ({
  currentNumber: state.calculator.currentNumber,
  currentOperation: state.calculator.currentOperation,
  lastNumber: state.calculator.lastNumber,
  operator: state.calculator.operator,
  zeroDivision: state.calculator.zeroDivision,
});

const mapDispatchToProps = (dispatch) => ({
  toSetCurrentNumber: (newCurrentNumber) =>
    dispatch(setCurrentNumber(newCurrentNumber)),
  toSetLastNumber: (lastNumber) => dispatch(setLastNumber(lastNumber)),
  toSetCurrentOperation: (newOperation) =>
    dispatch(setCurrentOperation(newOperation)),
  toSetOperator: (newOperator) => dispatch(setOperator(newOperator)),
  toSetResult: (result) => dispatch(setResult(result)),
  toSetOperation: (operation) => dispatch(setOperation(operation)),
  backspace: (input) => dispatch(backspace(input)),
  toSetZeroDivision: (status) => dispatch(setZeroDivision(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
