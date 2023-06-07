import React from "react";
import styled from "styled-components";

const Input = ({ name, value, onChange, type, placeholder }) => {
  return (
    <InputWrapper
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

const InputWrapper = styled.input`
  border: 1px solid red;
`;

export default Input;
