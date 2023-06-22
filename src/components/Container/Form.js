import React, { useContext, useState } from "react";
import axios from "axios";
import DataContext from "../../context/data-context";

export default function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const ctx = useContext(DataContext);

  const getData = async () => {
    const response = await axios.get(
      `https://task-manger-vpz2.onrender.com/task/all`
    );
    console.log(response.data);
    const completed = response.data.filter(
      (task) => task.status === "complete"
    );
    const incomplete = response.data.filter(
      (task) => task.status === "incomplete"
    );
    // setTasks(response.data);

    ctx.setTasks(incomplete);

    ctx.setCompleted(completed);
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    if (title === "" || description === "") {
      alert("Please fill all the fields");
      return;
    }

    await axios.post("https://task-manger-vpz2.onrender.com/task/create", {
      title: title,
      description: description,
    });
    await getData();
    setTitle("");
    setDescription("");
  };

  return (
    <form
      className="shadow-lg p-3 mb-5 bg-body rounded mt-3"
      onSubmit={submitHandler}
    >
      <div className="input-group mb-3 d-flex align-items-center">
        <label className="fw-bold">Task Name</label>
        <input
          type="text"
          className="form-control ms-4"
          placeholder="Task Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-between">
        <div className="input-group mb-3">
          <label className="fw-bold d-flex align-items-center">
            Task Description
          </label>
          <input
            type="text  "
            className="form-control ms-1"
            placeholder="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div>
        <input className="btn btn-primary " type="submit" value="Add Task" />
      </div>
    </form>
  );
}
