import React from "react";
import { Footer } from "./footer";
import { Categories } from "./Categories";
//import { Layout } from "./CardList";
import { InputSearch } from "./InputSearch";

export const Serie = (props) => {
  return (
    <>
      <Categories />
      <InputSearch placeholder="Search your serial here">
        Search your seial
      </InputSearch>

      <Footer />
    </>
  );
};
