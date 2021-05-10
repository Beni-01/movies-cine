import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Logo.png";

export const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-color-footer ">
        <div className="row">
          <div className="col-12 my-4 p-3">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div>
                    <img src={logo} className="" alt="logo de moviescine" />
                    <hr className="bg-danger" />
                    <p>
                      MoviesCine is a plateform of free streaming without
                      inscription. We bring you trendy movies and series and
                      show you a short trailer and details about the movies.
                      Here we take you informed about upcoming movies so you
                      have tendacy and having what good movies that you can
                      watch in other to take a rest a bit after a greather work
                      or others. see and like the show.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 mt-sm-5">
                  <p className="mt-sm-5">
                    Subscribe to the newsletter for being infomed about upcoming
                    movies and series
                  </p>

                  <div className="col-12 mt-5">
                    <div className="input-group input-group-addon mt-5 border">
                      <label className="sr-only">Newsletter</label>
                      <input
                        type="text"
                        className="form-control form-control-lg p-2 radius-none"
                        placeholder="Write your e-mail here"
                      />
                      <button className="btn btn-danger radius-none btn-lg p-2">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-requirement">
        <div className="container px-4">
          <p className="navbar-brand img-fluid mt-3 ">
            Copyright@2021- All rights reserved
          </p>

          <ul className="nav navbar-nav ms-auto">
            <NavLink to="" activeClassName="active" className="text-deco-none">
              <li className="nav-item  text-white">Privacy</li>
            </NavLink>
            <NavLink to="" className="text-deco-none">
              <li className="nav-item  text-white margin-left">GCU</li>
            </NavLink>
          </ul>
        </div>
      </nav>

      <div className="text-center bg-danger text-white p-3">
        this product uses the TMDb API is not approved or certified by TMDb
      </div>
    </>
  );
};
