// This component is responsible for the simulation of the game.

import React, { useEffect, useState } from 'react';
import { calculateAcceleration, calculateAngularAcceleration, calculateNextValue } from './mathFunctions';
import constants from './constants';
import './Planet.css';

const Planet = ({ planetName }) => {
  const [distance, setDistance] = useState(constants.distance[planetName]);
  const [velocity, setVelocity] = useState(0);
  const [angle, setAngle] = useState(Math.PI / 6);
  const [angularVelocity, setAngularVelocity] = useState(constants.angularVelocity[planetName]);
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);

  const interval = 0.00001; // in ms
  const pixelToMeters = 100;
  const scale = constants.distance.earth / pixelToMeters; // pixelToMeters pixels = 1 earth distance
  const delta = 3600 * 24 / 10; // 1 day in ms

  const planetElement = document.getElementById(planetName);

  // 1. every interval, calculate the acceleration and angular acceleration
  // 2. from the acceleration and angular acceleration, calculate the next velocity and angular velocity
  // 3. from the velocity and angular velocity, calculate the next distance and angle
  // 4. set the new distance and angle
  useEffect(() => {
    const intervalId = setInterval(() => {
      const acceleration = calculateAcceleration(distance, angularVelocity);
      const nextVelocity = calculateNextValue(velocity, delta, acceleration);
      const nextDistance = calculateNextValue(distance, delta, nextVelocity);
      setVelocity(nextVelocity);
      setDistance(nextDistance);

      const angularAcceleration = calculateAngularAcceleration(distance, velocity, angularVelocity);
      const nextAngularVelocity = calculateNextValue(angularVelocity, delta, angularAcceleration);
      const nextAngle = calculateNextValue(angle, delta, nextAngularVelocity);
      setAngularVelocity(nextAngularVelocity);
      setAngle(nextAngle);

      setX(nextDistance * Math.cos(nextAngle) / scale);
      setY(nextDistance * Math.sin(nextAngle) / scale);

      planetElement.style.transform = `translate(${x}px, ${y}px)`;
    }, interval);
    return () => clearInterval(intervalId);
  }, [distance, velocity, angle, angularVelocity]);

  return (
    <img id={planetName} className="planet" src={`./planet-${planetName}.png`} alt={planetName} />
  );
}

export default Planet;



