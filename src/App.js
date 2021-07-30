import React from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
//import { getTokenFromResponse } from "./spotify";

export default function App() {
  const redirect = () => {
    const accessTokenMatch = window.location.hash.match(/access_token=([^&]*)/);
    if (accessTokenMatch) {
      let _token = accessTokenMatch[1];
      console.log(accessTokenMatch[1]);
      return <Dashboard token={_token} />;
    } else {
      return <Login />;
    }

    // ====for Implicit Grant use ====

    // if (!_token) {
    //   return <Login />;
    // } else {
    //   return <Dashboard token={_token} />;
    // }

    // ======      end      ======
  };

  return <div>{redirect()}</div>;
}
