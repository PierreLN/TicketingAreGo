import React, { Fragment } from "react";
import Headers from "../Headers/Headers";
import HomePage from "../HomePage/HomePage";

const MainPage = (props) => {
  return (
    <Fragment>
      <Headers></Headers>
      <HomePage></HomePage>
    </Fragment>
  );
};

export default MainPage;
