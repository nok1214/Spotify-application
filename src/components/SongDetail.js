import React from "react";
import Player from "./Player";

export default function SongDetail({ song, token }) {
  return (
    <div>
      <Player trackUri={song} token={token} />
    </div>
  );
}
