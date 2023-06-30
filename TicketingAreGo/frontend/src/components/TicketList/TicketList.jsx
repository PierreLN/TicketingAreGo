import React, { useState, useEffect, Fragment } from "react";
import styles from "./TicketList.module.css";
import axios from "axios";

const TicketList = (props) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://127.0.0.1:8000/ticket/");
      const data = await response.data;
      setDetails(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.ticketList}>
      {details.map((output, id) => (
        <div key={id} className={styles.ticket}>
          <div className={styles["top-ticket"]}>
            <div className={styles.title}>{output.title}</div>
          </div>
          <div className={styles["bottom-ticket"]}>
            <div className={styles["bottom-category"]}>
              <div className={styles.category}>Category: {output.category}</div>
            </div>
            <div className={styles["bottom-status"]}>
              <div className={styles.status}>Status: {output.status}</div>
            </div>
            <div className={styles["bottom-created_at"]}>
              <div className={styles.created_at}>
                Purchase on: {output.created_at}
              </div>
            </div>
            {/* <div className={styles.purchase_from}>{output.purchase_from}</div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
