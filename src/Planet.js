// This component is responsible for the simulation of the game.

import React, { useEffect, useImperativeHandle, useState, forwardRef } from 'react';
import { calculateAcceleration, calculateAngularAcceleration, calculateNextValue } from './mathFunctions';
import constants from './constants';
import './Planet.css';

const Planet = forwardRef((props, ref) => {
  const initialValues = {
    distance: constants.distance[props.name],
    velocity: 0,
    angle: Math.PI / 6,
    angularVelocity: constants.angularVelocity[props.name],
    x: 0,
    y: 0,
  };

  const [distance, setDistance] = useState(initialValues.distance);
  const [velocity, setVelocity] = useState(initialValues.velocity);
  const [angle, setAngle] = useState(initialValues.angle);
  const [angularVelocity, setAngularVelocity] = useState(initialValues.angularVelocity);
  let [x, setX] = useState(initialValues.x);
  let [y, setY] = useState(initialValues.y);

  const interval = 0.00001; // in ms
  const pixelToMeters = 100;
  const scale = constants.distance.earth / pixelToMeters; // pixelToMeters pixels = 1 earth distance
  const delta = 3600 * 24 * props.speed / 10; // 1 day in ms

  const planetElement = document.getElementById(props.name);

  useImperativeHandle(ref, () => ({
    resetSettings() {
      setDistance(initialValues.distance);
      setVelocity(initialValues.velocity);
      setAngle(initialValues.angle);
      setAngularVelocity(initialValues.angularVelocity);
      setX(initialValues.x);
      setY(initialValues.y);
    },
  }));

  // 1. every interval, calculate the acceleration and angular acceleration
  // 2. from the acceleration and angular acceleration, calculate the next velocity and angular velocity
  // 3. from the velocity and angular velocity, calculate the next distance and angle
  // 4. set the new distance and angle
  useEffect(() => {
    const intervalId = setInterval(() => {
      const acceleration = calculateAcceleration(distance, angularVelocity, props.sunMassMultiplier);
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

      if (planetElement) {
        planetElement.style.transform = `translate(${x}px, ${y}px)`;
      }
    }, interval);
    return () => clearInterval(intervalId);
  }, [distance, velocity, angle, angularVelocity, x, y]);

  if (!props.show) {
    return null;
  }

  return (
    <img id={props.name} className="planet" src={`./planet-${props.name}.png`} alt={props.name} />
  );
});

export default Planet;



