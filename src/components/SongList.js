import React from "react";

const SongList = ({ songs }) => {
  const renderList = songs.map((song) => {
    console.log(songs);
    return (
      <div className="item" key={song.albumUrl}>
        <img className="ui image" src={song.albumUrl} alt={song.title} />
        <div className="content">
          <a className="header">{song.title}</a>
          <div className="description">{song.artist}</div>
        </div>
      </div>
    );
  });

  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default SongList;
