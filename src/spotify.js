import request from "request";

const clientId = "4a2aa082f9554afca5cdea842782127d";
const clientSecret = "2533f485f3634ef389378c4cf3efc988";

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

export const getTokenFromResponse = () => {
  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      let _token = body.access_token;
      //console.log(_token);
      return _token;
      //return <Dashboard token={_token} />;
    }
  });
};

// ====for Implicit Grant use ====

// export const authEndpoint = "https://accounts.spotify.com/authorize";

// const clientId = "4a2aa082f9554afca5cdea842782127d";
// const redirectUri = "http://localhost:3000/callback";
// const scopes = [
//   "user-read-currently-playing",
//   "user-read-recently-played",
//   "user-read-playback-state",
//   "user-top-read",
//   "user-read-private",
//   "user-read-email",
//   "user-modify-playback-state",
// ];

// export const getTokenFromResponse = () => {
//   return window.location.hash
//     .substring(1)
//     .split("&")
//     .reduce((initial, item) => {
//       var parts = item.split("=");
//       initial[parts[0]] = decodeURIComponent(parts[1]);

//       return initial;
//     }, {});
// };

// ======      end      ======

// const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//   "%20"
// )}&response_type=token&show_dialog=true`;
