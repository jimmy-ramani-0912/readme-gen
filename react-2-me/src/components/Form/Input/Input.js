import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin: 1.2rem 0;
  border: none;
  border-bottom: 1px solid #000;
  padding: 4px;
  outline: none;
  font-size: 1.8rem;
  width: ${(props) => props.width || "100%"};

  &:focus {
    border-bottom-color: #2c5282;
  }
`;

function Input(props) {
  const { width, title, placeholder } = props;
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
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
