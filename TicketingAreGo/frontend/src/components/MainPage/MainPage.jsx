import React, { Fragment } from "react";
import HomePage from "../HomePage/HomePage";
import styles from "./MainPage.module.css";

const MainPage = (props) => {
  return (
    <div className={styles.MainPage}>
        <HomePage></HomePage>
    </div>
  );
};

export default MainPage;
