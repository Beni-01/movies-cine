import React from "react";
import { Footer } from "./footer";
import { Actors } from "./Actors";
import { InputSearch } from "./InputSearch";

export const ActorPage = (props) => {
  return (
    <>
      <InputSearch placeholder="Search the acteur here">
        Search the acteur here
      </InputSearch>
      <Actors page={1} />
      <Footer />
    </>
  );
};
