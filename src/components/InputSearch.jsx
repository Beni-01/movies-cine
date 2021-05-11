import React from "react";

export const InputSearch = ({ children, placeholder }) => (
  <div className="container-fluid bg-color-cardList">
    <div className="col-12">
      <form className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-12  my-5 ">
            <div className="input-group input-group-addon border">
              <label className="sr-only">{children}</label>
              <input
                type="text"
                className="form-control form-control-lg p-2 radius-none"
                placeholder={placeholder}
              />
              <button className="btn btn-danger radius-none btn-lg p-2">
                <i className="fa fa-search fa-2x"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
);
