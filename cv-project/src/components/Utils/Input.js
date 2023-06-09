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
`;

export default Input;
