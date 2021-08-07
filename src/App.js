import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import request from "request";
//import { getTokenFromResponse } from "./spotify";

export default function App() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    getTokenFromResponse();
  }, []);

  const getTokenFromResponse = async () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization:
          "Basic " +
          new Buffer.from(clientId + ":" + clientSecret).toString("base64"),
      },
      form: {
        grant_type: "client_credentials",
      },
      json: true,
    };
    await request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        let _token = body.access_token;
        setAccessToken(_token);
      }
    });
  };

  return <Dashboard token={accessToken} />;
}

// ====for Implicit Grant use ====

// const redirect = () => {
//   const accessTokenMatch = window.location.hash.match(/access_token=([^&]*)/);
//   if (accessTokenMatch) {
//     let _token = accessTokenMatch[1];
//     console.log(accessTokenMatch[1]);
//     return <Dashboard token={_token} />;
//   } else {
//     return <Login />;
//   }

// if (!_token) {
//   return <Login />;
// } else {
//   return <Dashboard token={_token} />;
// }

// ======      end      ======
// };
