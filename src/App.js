import "./App.css";
import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="App">
      <SearchBar />
      My App
    </div>
  );
};

export default App;
