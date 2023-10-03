import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin: 1.2rem 0;
  border: none;
  border-bottom: 1px solid #000;
  padding: 4px;
  outline: none;
  font-size: 1.8rem;
  width: ${(props) => props.width || "100%"};
  font-family: "Roboto Mono", serif;

  &:focus {
    border-bottom-color: #2c5282;
  }
`;

function Input({ width, title, placeholder, onChange, initialValue, value }) {
  const [inputValue, setInputValue] = useState(value || "");

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      value={inputValue}
      key={title}
      onChange={handleInputChange}
      width={width}
    />
  );
}

export default Input;
