import React from 'react';
import SongList from '../components/SongList';

const Home = ({ selectSong }) => {
  return (
    <div>
      <SongList selectSong={selectSong} />
    </div>
  );
};

export default Home;
