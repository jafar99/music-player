import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const SongList = ({ selectSong }) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const API_KEY = '946658c4ed7d3affe6e08025c745a5b6';
    const LASTFM_API_URL = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`;

    axios.get(LASTFM_API_URL)
      .then(response => {
        if (response.data && response.data.tracks && response.data.tracks.track) {
          setTracks(response.data.tracks.track);
        }
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="song-list">
      {tracks.map((track, index) => (
        <motion.div
          key={index}
          onClick={() => selectSong(track)}
          className="song-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={track.image[0]['#text']} alt={track.name} />
          <div className="song-info">
            <h3>{track.name}</h3>
            <p>{track.artist.name}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SongList;
