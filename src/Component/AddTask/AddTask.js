import React, {useState} from "react";
import "./AddTask.css";
import {useDispatch} from "react-redux";
import {addTask} from "../../Redux/Actions/Task";

const AddTask = () => {
  const dispatch = useDispatch();
  const [Taskvalue, setTaskvalue] = useState("");
  return (
    <div className="ADD">
      <h1> ADD  YOUR TaskS </h1>
      <h2 style={{fontsize:100}} > &#129321;  be productive &#129321; </h2>
      <input onChange={(e) => setTaskvalue(e.target.value)} value={Taskvalue} />
      <button
        onClick={() => {
          if (Taskvalue) {
            dispatch(
              addTask({
                id: Math.random(),
                description: Taskvalue,
                isDone: false,
              })
            );
            setTaskvalue("");
          } else {
            alert("please add a task");
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
