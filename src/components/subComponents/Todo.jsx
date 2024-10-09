import React from "react";

export default function Todo({ todo }) {
  const { title, completed } = todo;
  return <li className={completed ? "strike-through" : ""}>{title}</li>;
}
