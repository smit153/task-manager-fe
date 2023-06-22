import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import Container from "../Container/Container";
import DataContext from "../../context/data-context";
export default function Completed() {
  const ctx = useContext(DataContext);
  return (
    <div>
      <NavBar />
      {ctx.isLoggedIn === "true" ? (
        <Container title="Completed" tasks={ctx.completed} />
      ) : (
        <h1 className="text-center">Error: check auth token</h1>
      )}
    </div>
  );
}
