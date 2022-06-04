import "./menu.component.css";
import React from "react";
import { Link } from "react-router-dom";

function SharedNavMenu() {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>
          <i className="fab fa-angular"></i>ASU
        </h3>
      </div>

      <ul className="list-unstyled components">
        <li>
          <Link to="/">
            <i className="fas fa-home"></i>Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fas fa-home"></i>About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SharedNavMenu;
