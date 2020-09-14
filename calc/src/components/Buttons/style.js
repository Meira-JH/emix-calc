import styled from 'styled-components'

export const ButtonContainer = styled.div`
  height: 330px;
  width: 100%;
  background-color: #070706;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 2px;
  padding: 2px;
`;

export const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #373737;
text-align: center;
span {
  font-size: 23px;
  font-weight: ${props => props.type};
}
cursor: pointer;
&:hover {
  background-color: #006a6a;
}
&:active {
  background-color: #070706;
}
`;

export const OperatorButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #262626;
text-align: center;
cursor: pointer;
span {
  font-size: 26px;
  font-weight: 100;
}
&:hover {
  background-color: #006a6a;
}
&:active {
  background-color: #070706;
}
`;

export const EqualButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #df7f00;
text-align: center;
cursor: pointer;
&:hover {
  background-color: #86af55;
}
&:active {
  background-color: #070706;
}
`;
