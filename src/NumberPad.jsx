import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 12px;
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  cursor: pointer;
  background: ${(props) => (props.negative ? "red" : "gray")};
  border-radius: 10px;
  color: white;
`;

const NUMBERS = [9, 8, 7, 6, 5, 4, 3, 2, 1];

export default function NumberPad({ onChange }) {
  const [value, setValue] = React.useState([]);
  const [negative, setNegative] = React.useState(false);

  React.useEffect(() => {
    console.log({ negative });
    const val = value.reduce((prev, curr) => prev + `${curr}`, "");
    if (val) {
      const factor = negative ? -1 : 1;
      onChange(val * factor);
    } else {
      onChange(0);
    }
  }, [value, onChange, negative]);

  return (
    <div>
      <Wrapper>
        {NUMBERS.map((number) => (
          <Number
            key={`n-${number}`}
            onClick={() => setValue((v) => [...v, number])}
          >
            {number}
          </Number>
        ))}
        <Number negative={negative} onClick={() => setNegative((n) => !n)}>
          -
        </Number>
        <Number onClick={() => setValue((v) => [...v, 0])}>0</Number>
        <Number
          onClick={() =>
            setValue((v) => {
              return v.slice(0, v.length - 1);
            })
          }
        >
          &larr;
        </Number>
      </Wrapper>
    </div>
  );
}
