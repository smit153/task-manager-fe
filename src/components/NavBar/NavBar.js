import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container d-flex">
          <Link className="nav-link text-light" to="/">
            Home
          </Link>

          <Link className="nav-link  text-light" to="/completed">
            Completed
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
