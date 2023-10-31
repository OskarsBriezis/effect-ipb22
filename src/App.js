import { useEffect, useState } from "react";
import ToDo from "./ToDo";

function App() {
  const [toDo, setToDo] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/4"
        );
  const data = await response.json();
  setToDo(data);
    }
    getData();
  }, []);
  // const toDo = {
  //   userId : 1,
  //   id: 1,
  //   title: "delectus aut autem",
  //   completed: false,
  // };

  return (
    <>
      <ToDo {...toDo} />
    </>
  );
}

export default App;
