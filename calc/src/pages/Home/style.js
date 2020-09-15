import styled from "styled-components";

export const CalcWrapper = styled.div`
  background-color: #efefef;
  height: 700px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Calculator = styled.div`
  height: 540px;
  width: 320px;
  background-color: #006a6a;
  color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2px;
  box-shadow: 5px 5px 20px grey;
  border-radius: 2px;
`;

export const Header = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLogo = styled.img`
  height: 30px;
  color: #ffff;
`;

export const CalcScreen = styled.div`
  height: 150px;
  width: 100%;
  background-color: #070706;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  text-align: right;
  padding: 20px 20px 0 0;
  overflow: auto;
`;

export const Result = styled.span`
  font-size: 35px;
  font-weight: 700;
  width: 100%;
  overflow-x: auto;
`;

export const Operation = styled.span`
  font-size: 20px;
  width: 100%;
  overflow-x: auto;
`;
