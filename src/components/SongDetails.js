import React from "react";

import "../css/songDetails.css";

export default function SongDetails({ song }) {
  let duration = song.duration_ms ? song.duration_ms : "";
  const conversion = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);

    return seconds === 60
      ? minutes + 1 + ":00"
      : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  if (!song) {
    return <p>Search and select the song you would like to listen</p>;
  } else {
    return (
      <div className="ui segment song-detail">
        <img
          className="ui centered large image"
          src={song.album.images[0].url}
          alt="song.name"
        />
        <div className="selected-song-detail">
          <div>
            <em>{song.name}</em> by <strong>{song.artists[0].name}</strong>
          </div>
          <div>
            Duration:
            <i className="clock icon"></i> {conversion(duration)}
          </div>
          <div>
            Album Name:
            <a
              href={song.album.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="sticky note icon"></i> {song.album.name}
            </a>
          </div>
          <div>
            Source:
            <a
              className="header"
              href={song.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="play icon"></i> Play at Spotify
            </a>
          </div>
        </div>
      </div>
    );
  }
}
