import React from "react";
import { StyledTodoList } from "./style";
import { Todo } from "../todo";

export function TodoList(props) {
  return (
    <StyledTodoList>
      {props.todoList &&
        props.todoList.map((todo, i) => (
          <Todo key={i} todo={{ name: todo, index: i }} />
        ))}
    </StyledTodoList>
  );
}
