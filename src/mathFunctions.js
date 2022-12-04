import constants from "./constants";

export const calculateAcceleration = (distance, angularVelocity) => {
  return distance * Math.pow(angularVelocity, 2) - constants.gravitationalConstant * constants.sunMass / Math.pow(distance, 2);
}

export const calculateAngularAcceleration = (distance, velocity, angularVelocity) => {
  return -2 * velocity * angularVelocity / distance;
}

// using Euler's method, calculate next value from current value, delta time, and derivative
export const calculateNextValue = (currentValue, deltaTime, derivative) => {
  return currentValue + deltaTime * derivative;
}