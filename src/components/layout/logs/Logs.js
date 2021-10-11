import React, { useState, useEffect } from "react";
import LogItem from "./LogItem";
import PreLaoder from "../../PreLoader";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();
    setLogs(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    getLogs();
  }, []);
  if (loading) {
    return <PreLaoder />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No log to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} />)
      )}
    </ul>
  );
};

export default Logs;
