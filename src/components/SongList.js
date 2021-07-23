import React from "react";
import SongItems from "./SongItems";
import "../css/songList.css";

const SongList = ({ songs, onSongSelect, token }) => {
  const renderList = songs.map((song) => {
    return (
      <SongItems
        key={song.id}
        onSongSelect={onSongSelect}
        song={song}
        token={token}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default SongList;
