import { squareRoot } from "./calculator";

export const buttons = [
  {
    content: "C",
    value: "C",
    type: "clear",
    logic: "",
  },
  {
    content: "⌫",
    value: "delete",
    type: "erase",
    logic: "",
  },
  {
    content: "√",
    value: "squareRoot",
    type: "operator",
    logic: squareRoot,
  },
  {
    content: "÷",
    value: "divided",
    type: "operator",
    logic: "",
  },
  {
    content: "7",
    value: 7,
    type: "number",
    logic: "",
  },
  {
    content: "8",
    value: 8,
    type: "number",
    logic: "",
  },
  {
    content: "9",
    value: 9,
    type: "number",
    logic: "",
  },
  {
    content: "x",
    value: "times",
    type: "operator",
    logic: "",
  },
  {
    content: "4",
    value: 4,
    type: "number",
    logic: "",
  },
  {
    content: "5",
    value: 5,
    type: "number",
    logic: "",
  },
  {
    content: "6",
    value: 6,
    type: "number",
    logic: "",
  },
  {
    content: "-",
    value: "minus",
    type: "operator",
    logic: "",
  },
  {
    content: "1",
    value: 1,
    type: "number",
    logic: "",
  },
  {
    content: "2",
    value: 2,
    type: "number",
    logic: "",
  },
  {
    content: "3",
    value: 3,
    type: "number",
    logic: "",
  },
  {
    content: "+",
    value: "plus",
    type: "operator",
    logic: "",
  },
  {
    content: "+-",
    value: "+-",
    type: "aux",
    logic: "",
  },
  {
    content: "0",
    value: 0,
    type: "number",
    logic: "",
  },
  {
    content: ".",
    value: ".",
    type: "number",
    logic: "",
  },
  {
    content: "=",
    value: "equal",
    type: "equal",
    logic: "",
  },
];
