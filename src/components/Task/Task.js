import React, { useContext } from "react";
import DataContext from "../../context/data-context";
export default function Task(props) {
  const ctx = useContext(DataContext);
  return (
    <div className="container mt-3 bg-light p-0">
      <div className="border border-secondary border border-3 rounded">
        <div className="d-flex justify-content-between ">
          <div className="fw-bold fs-4 m-1 ">{props.task.title}</div>
          {props.task.status === "complete" ? (
            <div></div>
          ) : (
            <button
              className="btn btn-success m-1 ps-3 pe-3 text-center"
              onClick={() => ctx.updateTask(props.task)}
            >
              Done
            </button>
          )}
        </div>
        <div className="d-flex justify-content-between ">
          <div className="fw-bold fs-4 m-1 ">
            <div className="text-secondary d-inline me-2 fs-6">
              Description: {props.task.description}
            </div>
          </div>
          {props.task.status === "complete" ? (
            <button
              className="btn btn-danger m-1"
              onClick={() => ctx.deleteCompletedTask(props.task)}
            >
              Delete
            </button>
          ) : (
            <button
              className="btn btn-danger m-1"
              onClick={() => ctx.deleteTask(props.task)}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
