import { useState } from "react";

function ToDo(props) {
const [change, setChange] = useState(props.completed);

    return (
    <>
        <p>UserId: {props.userId}</p>
        <p>Id: {props.id}</p>
        <p>{props.title}</p>
        <div key={props.indexx}>
        <input type="checkbox" checked={change} onChange={(event) => {setChange(event.target.checked)}}>
        </input>
        </div>
    </>
    );
}

export default ToDo;