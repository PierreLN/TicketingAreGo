import React, { useState, useEffect, Fragment } from "react";
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
    <Fragment>
      <div>
        <div>
          {details.map((output, id) => (
            <div key={id}>
              <div>{output.title}</div>
              <div>{}</div>
            </div>
          ))}
        </div>
        <button>button</button>
      </div>
    </Fragment>
  );
};

export default TicketList;
