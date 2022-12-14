import constants from "./constants";

// Reference: https://evgenii.com/blog/earth-orbit-simulation
// calculate acceleration from distance and angular velocity
export const calculateAcceleration = (distance, angularVelocity, sunMassMultiplier = 1) => {
  return distance * Math.pow(angularVelocity, 2) - constants.gravitationalConstant * constants.sunMass * sunMassMultiplier / Math.pow(distance, 2);
}

// calculate angular acceleration from distance, velocity, and angular velocity
export const calculateAngularAcceleration = (distance, velocity, angularVelocity) => {
  return -2 * velocity * angularVelocity / distance;
}

// using Euler's method, calculate next value from current value, delta time, and derivative
export const calculateNextValue = (currentValue, deltaTime, derivative) => {
  return currentValue + deltaTime * derivative;
}