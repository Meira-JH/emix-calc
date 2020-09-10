import React, { useState } from "react";
import {
  CalcWrapper,
  Calculator,
  CalcScreen,
  HeaderLogo,
  Header,
  ButtonContainer,
  Button,
  OperatorButton,
  EqualButton,
  Operation,
  Result,
} from "./style";
import { buttons } from "../../logic/buttonsArray";
import logo from "../../img/e.Mix - Logo.svg";
import { verifyExistence, compute } from "../../logic/calculator";

//setCurrentOperation(data.substr(0, data.length -1))

const Calc = (props) => {
  const [currentOperation, setCurrentOperation] = useState(" ");
  const [lastNumber, setLastNumber] = useState(null)
  const [currentNumber, setCurrentNumber] = useState(null)

  const buttonsRender = buttons.map((button, index) => {
    if (button.type === "number" || button.type === "aux") {
      return (
        <Button
          type={button.type === "number" ? 700 : 100}
          key={index}
          onClick={() =>
            setCurrentNumber(
              currentNumber + verifyExistence(currentNumber, button.value)
            )
          }
        >
          {" "}
          <span>{button.content}</span>{" "}
        </Button>
      );
    }
    if (button.type === "operator") {
      return (
        <OperatorButton
          key={index}
          onClick={() => setCurrentOperation(compute(currentNumber, button.value))}
        >
          {" "}
          <span>{button.content}</span>{" "}
        </OperatorButton>
      ); 
    }
    if (button.type === "clear") {
      return (
        <OperatorButton
          key={index}
          onClick={() => setCurrentOperation("") & setCurrentNumber("")}
        >
          {" "}
          <span>{button.content}</span>{" "}
        </OperatorButton>
      );
    }
    return (
      <EqualButton
        key={index}
        onClick={() => setCurrentOperation(button.content)}
      >
        {" "}
        <span>{button.content}</span>{" "}
      </EqualButton>
    );
  });

  return (
    <CalcWrapper>
      <Calculator>
        <Header>
          <HeaderLogo src={logo} />
        </Header>
        <CalcScreen>
          <Operation> {currentOperation} </Operation>
          <Result> {currentNumber} </Result>
        </CalcScreen>
        <ButtonContainer>{buttonsRender}</ButtonContainer>
      </Calculator>
    </CalcWrapper>
  );
};

export default Calc;
