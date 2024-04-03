import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar">
      <div className="kaudeta">
        <Link className="navLink" to="/">
          <h1 className="title">K@U DET@</h1>
        </Link>
      </div>
      <Link className="navLink" to="/favorites">
        <h4 className="favorites">Favorites</h4>
      </Link>

      <h4>Connect</h4>
    </nav>
  );
}

export default NavBar;
