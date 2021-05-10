import React from "react";
import { Footer } from "./footer";
import { Categories } from "./Categories";
import { InputSearch } from "./InputSearch";

export const Acteurs = (props) => {
  return (
    <>
      <Categories />
      <InputSearch placeholder="Search the acteurs">
        Search the acteurs here
      </InputSearch>

      <Footer />
    </>
  );
};
