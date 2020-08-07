import React from "react";
import { StyledTodo } from "./style";
import { Icon } from "../icon";

export function Todo({ todo }) {
  const handleDeleteTodo = () => {
    console.log(todo.index);
  };

  return (
    <StyledTodo>
      {todo.name}
      <Icon type="delete" handleClick={handleDeleteTodo} />
    </StyledTodo>
  );
}
