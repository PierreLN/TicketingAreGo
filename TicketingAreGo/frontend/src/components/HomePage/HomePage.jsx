import React from "react";
import TicketList from "../TicketList/TicketList";
import styles from './HomePage.module.css'

const HomePage = (props) => {
  return (
    <div className={styles.homePage}>
      <TicketList></TicketList>
    </div>
  );
};

export default HomePage;
