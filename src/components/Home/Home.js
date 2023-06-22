import React, { useContext } from "react";
import Container from "../Container/Container";
import NavBar from "../NavBar/NavBar";
import DataContext from "../../context/data-context";
export default function Home() {
  const ctx = useContext(DataContext);
  return (
    <div>
      <NavBar />
      {ctx.isLoggedIn === "true" ? (
        <Container title="Home" tasks={ctx.tasks} />
      ) : (
        <h1 className="text-center">Error: check auth token</h1>
      )}
    </div>
  );
}
