import React from "react";
import styled from "styled-components";

const Input = ({ name, value, onChange }) => {
  return <InputWrapper name={name} value={value} onChange={onChange} />;
};

const InputWrapper = styled.input`
  border: 1px solid red;
`;

export default Input;
