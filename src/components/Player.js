import React from 'react';

const Player = ({ currentSong }) => {
  if (!currentSong) return <div className="player">Select a song to play</div>;

  return (
    <div className="player">
      <img src={currentSong.cover} alt={currentSong.title} />
      <div className="player-info">
        <h2>{currentSong.title}</h2>
        <p>{currentSong.artist}</p>
      </div>
      <audio controls autoPlay>
        <source src={currentSong.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Player;
