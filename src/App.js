import React from "react";
import Login from "./components/Login";
import { getTokenFromResponse } from "./spotify";
import Dashboard from "./components/Dashboard";

export default function App() {
  const redirect = () => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (!_token) {
      return <Login />;
    } else {
      return <Dashboard token={_token} />;
    }
  };

  return <div>{redirect()}</div>;
}
