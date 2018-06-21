import React from 'react';
const SongList = ({
  <div className:="row">
    { songs.map( song =>
      <Song
        key= {song.id}{...song}
        updateSong={updateSong}
        deleteSong={deleteSong} 
        />
      )
    }
  </div>
)

export default SongList;