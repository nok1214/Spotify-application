import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import SongList from "./SongList";
import SongDetails from "./SongDetails";

import "../css/songDetails.css";

const s = new SpotifyWebApi();

export default function Dashboard({ token }) {
  const [term, setTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSong, setSelectedSong] = useState("");

  useEffect(() => {
    if (!token) return;
    s.setAccessToken(token);
  }, [token]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!term) return setSearchResults([]);

    s.searchTracks(term).then((response) => {
      setSearchResults(response.tracks.items);
      setSelectedSong("");
    });
  };

  return (
    <div className="ui segment" id="dashboard">
      <h2>Welcome to My Spotify Clone</h2>
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Search Songs/Artists</label>
          <input
            type="text"
            placeholder="What would you like to listen today?"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
      <div className="ui vertically divided grid">
        <div className="two column row">
          <div className="column song-list">
            <SongList
              songs={searchResults}
              onSongSelect={setSelectedSong}
              token={token}
            />
          </div>
          <div className="song-details column">
            <SongDetails song={selectedSong} />
          </div>
        </div>
      </div>
    </div>
  );
}
