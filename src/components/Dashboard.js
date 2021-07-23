import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const s = new SpotifyWebApi();

export default function Dashboard({ token }) {
  const [term, setTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    if (!token) return;
    s.setAccessToken(token);
  }, [token]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!term) return setSearchResults([]);
    if (!token) return;

    s.searchTracks(term).then((response) => {
      setSearchResults(response.tracks.items);
      setSelectedSong(null);
    });
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Search Songs/Artists</label>
          <input
            type="text"
            placeholder="Search Songs/Artists"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
      <div>
        <SongList
          songs={searchResults}
          onSongSelect={setSelectedSong}
          token={token}
        />
      </div>
      <SongDetail token={token} song={selectedSong?.uri} />
    </div>
  );
}
