import React, { useEffect, useState } from "react";
import Todo from "./subComponents/Todo";
import { DATA_URL } from "../utils";

export default function Todos() {
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    fetch(`${DATA_URL}/todos`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed fetching Todos.");
      })
      .then((data) => setAllTodos(data));
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="page-title">Todos</h1>
        <ul>
          {allTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </>
  );
}
