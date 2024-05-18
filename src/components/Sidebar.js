import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <h2>Spotify</h2>
    <nav>
      <ul>
        <li><Link to="/">For You</Link></li>
        <li><Link to="/">Top Tracks</Link></li>
        <li><Link to="/">Favourites</Link></li>
        <li><Link to="/">Recently Played</Link></li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
