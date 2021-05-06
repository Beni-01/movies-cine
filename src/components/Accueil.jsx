import React from "react";
import { Banner } from "./Banner";

export const Home = (props) => {
  return (
    <>
      <Banner />

      <div className="container-fluid bg-color-category py-2">
        <div className="row justify-content-center ">
          <div className="col-12">
            <div className="container mt-2">
              <div className="row  text-center justify-content-center">
                <div className="col-3 col-sm-2 outline-btn-danger p-2">
                  Action
                </div>
                <div className="col-3 col-sm-2 outline-btn-danger p-2">
                  Fiction
                </div>
                <div className="col-3 col-sm-2 outline-btn-danger p-2">
                  Romance
                </div>
                <div className="col-3 col-sm-2 outline-btn-danger p-2">
                  Worship
                </div>
                <div className="col-3 col-sm-2 outline-btn-danger p-2">
                  Commedy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
