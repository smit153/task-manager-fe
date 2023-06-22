import React from "react";
import Form from "./Form";
import Task from "../Task/Task";
export default function Container(props) {
  let tasks = props.tasks;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="fs-1 fw-bold">{props.title}</div>

          {props.title === "Completed" ? (
            <div className="fs-3 fw-bold  text-dark">Completed Tasks</div>
          ) : (
            <>
              <Form />
              <div className="fs-3 fw-bold text-dark">In Progress</div>
            </>
          )}

          {tasks.map((task) => (
            <Task key={task.title} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}
