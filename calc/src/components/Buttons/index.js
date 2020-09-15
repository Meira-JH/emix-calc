import React from "react";
import { Button, ButtonContainer, EqualButton, OperatorButton } from "./style";
import { buttons } from "../../logic/buttonsArray";
import { connect } from "react-redux";
import {
  handleCurrentNumber,
  handleCurrentOperation,
  handleEqual,
  handleDelete,
  handleAux,
} from "../../actions/calculatorRefactor";

const Buttons = (props) => {
  function handleOnClick(event) {
    switch (event.type) {
      case "number": {
        return props.toHandleCurrentNumber(event);
      }
      case "operator": {
        return props.toHandleCurrentOperation(event);
      }
      case "equal": {
        return props.toHandleEqual();
      }
      case "delete": {
        return props.toHandleDelete(event);
      }
      case "aux": {
        return props.toHandleAux(event);
      }
      default:
        return "";
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
            <span>{button.content}</span>
            {" "}
          </Button>
        );
      }
      case "aux": {
        return (
          <Button
            type={button.type === "number" ? 700 : 100}
            key={index}
            onClick={() => handleOnClick(button)}
          >
            {" "}
            <span>{button.content}</span>
            {" "}
          </Button>
        );
      }
      case "operator": {
        return (
          <OperatorButton key={index} onClick={() => handleOnClick(button)}>
            {" "}
            <span>{button.content}</span>
            {" "}
          </OperatorButton>
        );
      }
      case "delete": {
        return (
          <OperatorButton key={index} onClick={() => handleOnClick(button)}>
            {" "}
            <span>{button.content}</span>
            {" "}
          </OperatorButton>
        );
      }
      case "equal": {
        return (
          <EqualButton key={index} onClick={() => handleOnClick(button)}>
            {" "}
            <span>{button.content}</span>
            {" "}
          </EqualButton>
        );
      }
      default:
        return "";
    }
  });

  return <ButtonContainer>{buttonsRender}</ButtonContainer>;
};

const mapDispatchToProps = (dispatch) => ({
  toHandleCurrentNumber: (button) => dispatch(handleCurrentNumber(button)),
  toHandleCurrentOperation: (input) => dispatch(handleCurrentOperation(input)),
  toHandleDelete: (input) => dispatch(handleDelete(input)),
  toHandleEqual: () => dispatch(handleEqual()),
  toHandleAux: (input) => dispatch(handleAux(input)),
});

export default connect(null, mapDispatchToProps)(Buttons);
