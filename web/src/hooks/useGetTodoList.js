import { useEffect, useState } from "react";
import { fetchTodoList } from "../api";

export default function() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    fetchTodoList().then(data => {
      setTodoList(data);
    });
  }, []);

  return todoList;
}
