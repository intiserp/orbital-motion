// This component is responsible for the simulation of the game.

import React from 'react';
import Planet from './Planet';
import './Simulator.css';

const Simulator = () => {
  return (
    <div className='body'>
      <img className='sun' src='sun.png' alt='sun' />
      <Planet planetName='earth' />
    </div>
  );
}

export default Simulator;



