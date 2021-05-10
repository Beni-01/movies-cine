import React from "react";
import logo from "../Logo.png";
import { NavLink, Link } from "react-router-dom";
export const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger p-2">
        <div className="container">
          <Link to="/">
            <img
              className="navbar-brand img-fluid"
              src={logo}
              alt="MoviesCine platform of free streaming"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseButton"
            aria-controls="collapseButton"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="collapseButton">
            <ul className="nav navbar-nav ms-auto">
              <NavLink
                to="/Movies/film.html"
                activeClassName="active"
                className="text-deco-none"
              >
                <li className="nav-item   p-2 btn-lg outline-btn">FILMS</li>
              </NavLink>
              <NavLink to="/Movies/serie.html" className="text-deco-none">
                <li className="nav-item  p-2 btn-lg margin-left outline-btn">
                  SERIES
                </li>
              </NavLink>
              <NavLink to="/Auteurs/auteurs.html" className="text-deco-none">
                <li className="nav-item  p-2 btn-lg margin-left outline-btn">
                  AUTEURS
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
