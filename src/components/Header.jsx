import React from "react";
import logo from "../Logo.png";
export const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger p-2">
        <div className="container">
          <img className="navbar-brand img-fluid" src={logo} />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseButton"
            aria-controls="collapseButton"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="collapseButton">
            <ul className="nav navbar-nav ms-auto">
              <li className="nav-item   p-2 btn-lg outline-btn">FILM</li>
              <li className="nav-item  p-2 btn-lg margin-left outline-btn">
                SERIES
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
