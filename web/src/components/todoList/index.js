import React from "react";
import { StyledTodoList } from "./style";
import { Todo } from "../todo";

export function TodoList(props) {
  return (
    <StyledTodoList>
      {props.todoList.length &&
        props.todoList.map((todo, i) => (
          <Todo key={i} todo={ todo } />
        ))}
    </StyledTodoList>
  );
}
