// This component is responsible for the simulation of the game.

import React, { useState } from 'react';
import constants from './math';


const Simulator = () => {
  const [distance, setDistance] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [angle, setAngle] = useState(0);
  const [angularVelocity, setAngularVelocity] = useState(0);

  return (
    <div>
      <h1>Orbital Motion Simulator</h1>
      <p>Click on the screen to start the simulation.</p>
    </div>
  );
}