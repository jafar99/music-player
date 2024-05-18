import React from 'react';
import SongList from '../components/SongList';

const Home = ({ selectSong }) => {
  return (
    <div>
        <h1>Home</h1>
      <SongList selectSong={selectSong} />
    </div>
  );
};

export default Home;
