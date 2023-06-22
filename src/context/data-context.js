import React, { useState, useEffect } from "react";

import axios from "axios";

const DataContext = React.createContext({
  tasks: [],
  setTasks: () => {},
  completed: [],
  setCompleted: () => {},
  deleteTask: () => {},
  updateTask: () => {},
  deleteCompletedTask: () => {},
  todayTask: [],
  overDue: [],
  isLoggedIn: "false",
  setIsLoggedIn: () => {},
});

export const DataContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState("true");

  useEffect(() => {
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

      setTasks(incomplete);

      setCompleted(completed);
    };
    getData();
  }, []);

  const deleteTask = async (id) => {
    const index = tasks.indexOf(id);
    tasks.splice(index, 1);
    setTasks((prevState) => {
      return [...prevState];
    });
    console.log(id);
    await axios.delete(
      `https://task-manger-vpz2.onrender.com/task/delete/${id._id}`
    );
  };

  const deleteCompletedTask = async (id) => {
    const index = completed.indexOf(id);
    completed.splice(index, 1);
    setCompleted((prevState) => {
      return [...prevState];
    });

    await axios.delete(
      `https://task-manger-vpz2.onrender.com/task/delete/${id._id}`
    );
  };

  const updateTask = async (id) => {
    const index = tasks.indexOf(id);
    let obj = { ...tasks.splice(index, 1) };

    setCompleted(() => {
      return [...completed, { ...obj[0], status: "complete" }];
    });
    setTasks((prevState) => {
      return [...prevState];
    });
    await axios.put(
      `https://task-manger-vpz2.onrender.com/task/update/${id._id}`,
      {
        status: "complete",
      }
    );
  };

  return (
    <DataContext.Provider
      value={{
        tasks: tasks,
        setTasks: setTasks,
        completed: completed,
        setCompleted: setCompleted,
        deleteTask: deleteTask,
        deleteCompletedTask: deleteCompletedTask,
        updateTask: updateTask,

        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
