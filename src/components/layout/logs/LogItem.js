import React from "react";
import Moment from "react-moment";

const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <span className="grey-text">
          <span className="black-text">{log.tech}</span>
        </span>
      </div>
    </li>
  );
};

export default LogItem;
