import React, { useEffect, useState } from "react";
import {
  CalcWrapper,
  Calculator,
  CalcScreen,
  HeaderLogo,
  Header,
  Operation,
  Result,
} from "./style";
import logo from "../../img/e.Mix - Logo.svg";
import Buttons from "../../components/Buttons";
import { connect } from "react-redux";

const Calc = (props) => {

  const [showResult, setShowResult] = useState('')

  useEffect(() => {
    console.log("useeffect home", props.operator)
    if(props.result && !props.currentNumber){
      return setShowResult(props.result)
    }
    if(props.operator === "squareRoot"){
      return setShowResult(props.lastNumber)
    }
      return  setShowResult(props.currentNumber)


  }, [props.result, props.currentNumber, props.lastNumber, props.operator])

  // props.result ? setShowResult(props.result) : setShowResult(props.currentNumber)

  
  return (
    <CalcWrapper>
      <Calculator>
        <Header>
          <HeaderLogo src={logo} />
        </Header>
        <CalcScreen>
          {props.zeroDivision? <span>Não é possível realizar divisão por zero</span> : ""}
          <Operation> {props.currentOperation} </Operation>
          <Result> {showResult} </Result>
        </CalcScreen>
        <Buttons />
      </Calculator>
    </CalcWrapper>
  );
};


const mapStateToProps = (state) => ({
  currentNumber: state.calculator.currentNumber,
  result: state.calculator.result,
  currentOperation: state.calculator.currentOperation,
  zeroDivision: state.calculator.zeroDivision
});


export default connect(mapStateToProps, null)(Calc);