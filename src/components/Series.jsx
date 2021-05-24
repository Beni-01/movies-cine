import React, { useState } from "react";
import { Footer } from "./footer";
import { Categories } from "./Categories";
import { Layout } from "./CardList";
import { InputSearch } from "./InputSearch";
import { Pagination } from "./Pagination";

export const Serie = (props) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handleClickNext = () => {
    setPageNumber((p) => p + 1);
  };
  const handleClickPrev = () => {
    setPageNumber((p) => p - 1);
  };

  let isdisabledNext = pageNumber <= 500 ? false : true;
  let isdisabledPrev = pageNumber == 1 ? true : false;
  return (
    <>
      <Categories />
      <InputSearch placeholder="Search your serial here">
        Search your seial
      </InputSearch>
      <div className="bg-color-cardList">
        <Layout section="ALL SERIALS" type="tv" pageSerie={pageNumber} />
        <Pagination
          pageNumber={pageNumber}
          handleOnClickNext={handleClickNext}
          handleOnClickPrev={handleClickPrev}
          isdisabledNext={isdisabledNext}
          isdisabledPrev={isdisabledPrev}
        />
      </div>

      <Footer />
    </>
  );
};
