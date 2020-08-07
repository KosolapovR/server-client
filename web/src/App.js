import React from "react";
import { InputForm } from "./components/inputForm";
import { TodoList } from "./components/todoList";
import useGetTodoList from "./hooks/useGetTodoList";

export default function App() {
  const todoList = useGetTodoList();
  const addToDo = val => {
    if (val) console.log(val);
  };

  console.log("render");

  return (
    <div className="App">
      <InputForm handleSubmit={addToDo} />
      <TodoList todoList={todoList} />
    </div>
  );
}
