import React from "react";
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

  return (
    <CalcWrapper>
      <Calculator>
        <Header>
          <HeaderLogo src={logo} />
        </Header>
        <CalcScreen>
          {props.zeroDivision ? (
            <span>Não é possível realizar divisão por zero</span>
          ) : (
            ""
          )}
          <Operation> {props.currentOperation} </Operation>
          <Result> {props.result} </Result>
        </CalcScreen>
        <Buttons />
      </Calculator>
    </CalcWrapper>
  );
};

const mapStateToProps = (state) => ({
  result: state.calculatorRefactor.result,
  currentOperation: state.calculatorRefactor.currentOperation,
  zeroDivision: state.calculatorRefactor.zeroDivision,
});

export default connect(mapStateToProps, null)(Calc);
