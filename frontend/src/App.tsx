import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const { data } = useQuery(["user"], async () => {
    // using axios
    const { data } = await axios.get(
      "/api/users"
    );
    return data;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
}

export default App;
