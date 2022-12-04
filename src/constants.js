const constants = {
  gravitationalConstant: 6.67408 * Math.pow(10, -11),
  sunMass: 1.989 * Math.pow(10, 30), // in kg
  // distance from the sun in meters
  distance: {
    earth: 1.496 * Math.pow(10, 11),
    mars: 2.279 * Math.pow(10, 11),
    jupiter: 7.785 * Math.pow(10, 11),
    saturn: 1.433 * Math.pow(10, 12),
    uranus: 2.871 * Math.pow(10, 12),
    neptune: 4.495 * Math.pow(10, 12),
    pluto: 5.906 * Math.pow(10, 12)
  },
  // angular velocity in meters per second
  angularVelocity: {
    earth: 1.990986 * Math.pow(10, -7),
    mars: 1.027 * Math.pow(10, -7),
    jupiter: 1.305 * Math.pow(10, -7),
    saturn: 9.68 * Math.pow(10, -8),
    uranus: 6.81 * Math.pow(10, -8),
    neptune: 5.43 * Math.pow(10, -8),
    pluto: 3.7 * Math.pow(10, -8)
  }
};

export default constants;

