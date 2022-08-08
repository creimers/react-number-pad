import * as React from "react";
import styled from "styled-components";
import "./App.css";
import NumberPad from "./NumberPad";

const Wrapper = styled.div`
  margin: 10px;
`;

const Value = styled.div`
  text-align: right;
  font-size: 100px;
`;

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <Wrapper>
      <Value>{value}</Value>
      <NumberPad onChange={setValue} />
    </Wrapper>
  );
}

export default App;
