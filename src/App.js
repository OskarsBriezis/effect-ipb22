import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import Comment from "./Comment";

function App() {
  const [toDo, setToDo] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment,setComment] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/4"
        );
  const data = await response.json();
  setToDo(data);
  setLoading(false);
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
      {loading ? <p>Loading...</p> : <ToDo {...toDo} />}
      <Comment />
    </>
  );
}

export default App;
