import React from "react";
import { InputConponent } from "./InputConponent";

export const Banner = () => {
  return (
    <>
      <div className="img-banner">
        <div className="dark-background">
          <h1 className="text-white text-banner">
            Welcome to <span className="text-danger">MoviesCine</span> <br /> A
            plateform of free streaming whitout inscription
          </h1>
          <InputConponent
            placeholder="Search the movies up here"
            icon="fa fa-search fa-2x"
          >
            Search Bar
          </InputConponent>
        </div>
      </div>
    </>
  );
};
