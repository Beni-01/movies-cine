import React from "react";

export const InputConponent = ({ children, placeholder, icon }) => {
  return (
    <>
      <form className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-sm-7  col-12 mt-5 ">
            <div className="input-group input-group-addon">
              <label className="sr-only">{children}</label>
              <input
                type="text"
                className="form-control form-control-lg p-2 radius-none"
                placeholder={placeholder}
              />
              <button className="btn btn-danger radius-none btn-lg p-2">
                <i className={icon}></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
