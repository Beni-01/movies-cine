import React from "react";

export const Pagination = ({
  pageNumber,
  handleOnClickNext,
  handleOnClickPrev,
  isdisabledPrev,
  isdisabledNext,
}) => {
  return (
    <>
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-5 text-end align-self-center">
            <button
              className="w-25 btn outline-btn-danger p-2"
              onClick={handleOnClickPrev}
              disabled={isdisabledPrev}
            >
              &lt;&lt;
            </button>
          </div>
          <div className="col-1  pt-3 text-center text-white">
            <p style={{ fontSize: "22px" }}>{pageNumber} / 500</p>
          </div>
          <div className="col-5 text-start align-self-center">
            <button
              className="w-25 btn outline-btn-danger p-2"
              onClick={handleOnClickNext}
              disabled={isdisabledNext}
            >
              &gt;&gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
