import React from 'react';
import HomeHeaderBar from './HomeHeaderBar';
import PlayerSheet from '../../components/PlayerSheet';

function Home(props) {
  return (
    <div className="home">
      <HomeHeaderBar />
      <PlayerSheet />
    </div>

  );
}

export default Home;
