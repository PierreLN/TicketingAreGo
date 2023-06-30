import React, { Fragment } from "react";
import styles from "./Headers.module.css";
import Button from "../UI/Button";

const Headers = ({ onMove }) => {
  const homePageHandler = () => {
    onMove("home");
  };
  const ContactPageHandler = () => {
    onMove("contact");
  };
  return (
      <div className={styles.header}>
        <div className={styles.elements}>
          <ul>
            <li>
              <Button onClick={homePageHandler}>HOME</Button>
            </li>
            <li>
              <Button onClick={ContactPageHandler}>CONTACT</Button>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Headers;
