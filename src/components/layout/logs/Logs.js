import React, { useState, useEffect } from "react";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };
  useEffect(() => {
    getLogs();
  }, []);
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <ul className="collection-with-header">
      <li className="collection-header"></li>
    </ul>
  );
};

export default Logs;
