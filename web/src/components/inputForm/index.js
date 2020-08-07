import React, { useState } from "react";
import { StyledInputForm } from "./style";

export function InputForm(props) {
  const [inputValue, setInputValue] = useState("");

  const handleChangeValue = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(inputValue);
    setInputValue("");
  };

  return (
    <StyledInputForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="text"
        onChange={handleChangeValue}
        value={inputValue}
      />
      <input type="submit" placeholder="text" />
    </StyledInputForm>
  );
}
