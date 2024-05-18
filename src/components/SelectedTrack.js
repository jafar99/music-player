import React from 'react';
import './SelectedTrack.css'; // Import the CSS file

const SelectedTrack = ({ track }) => {
  if (!track) return null;

  // Sample audio URL for demonstration purposes
  const sampleAudioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  return (
    <div className="selected-track">
      <div className="track-details">
        <img src={track.image[3]['#text']} alt={track.name} className="track-image" />
        <div className="track-info">
          <h3>{track.name}</h3>
          <p>{track.artist.name}</p>
          <p><a href={track.url} target="_blank" rel="noopener noreferrer">More Info</a></p>
        </div>
      </div>
      <div className="audio-player">
        <audio controls className="audio-element">
          <source src={sampleAudioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default SelectedTrack;
