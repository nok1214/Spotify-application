import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import SongList from "./SongList";
import Player from "./Player";

const s = new SpotifyWebApi();

export default function Dashboard({ token }) {
  const [term, setTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!token) return;
    s.setAccessToken(token);
  }, [token]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!term) return setSearchResults([]);
    if (!token) return;

    s.searchTracks(term).then((response) => {
      setSearchResults(
        response.tracks.items.map((track) => {
          const albumImage = track.album.images.filter(function (image) {
            return image.height <= 64;
          });
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: albumImage[0].url,
          };
        })
      );
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
        <SongList songs={searchResults} />
      </div>
      <div>
        <Player token={token} />
      </div>
    </div>
  );
}
