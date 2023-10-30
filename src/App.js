import React from "react";
import ToDo from "./ToDo";

function App() {
  const toDo = {
    userId : 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  return (
    <>
      <ToDo {...toDo} />
    </>
  );
}

export default App;
