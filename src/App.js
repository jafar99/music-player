import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import RecentlyPlayed from './pages/RecentlyPlayed';
import SelectedTrack from './components/SelectedTrack';

const App = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const selectSong = (track) => {
    setSelectedTrack(track);
  };


  return (
    <Router>
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home selectSong={selectSong} />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/recently-played" element={<RecentlyPlayed />} />
      </Routes>
      <SelectedTrack track={selectedTrack} />
    </div>
  </Router>
  );
};

export default App;
