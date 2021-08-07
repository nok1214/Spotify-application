import React from "react";
import "../css/songItem.css";

const SongItems = ({ song, onSongSelect }) => {
  const albumImage = song.album.images.filter(function (image) {
    return image.height <= 64;
  });
  return (
    <div onClick={() => onSongSelect(song)} className="song-item item">
      <img alt={song.name} className="ui image" src={albumImage[0].url} />
      <div className="content">
        <div className="header">{song.name}</div>
        <div className="description">{song.artists[0].name}</div>
      </div>
    </div>
  );
};

export default SongItems;
