// reference - https://nssdc.gsfc.nasa.gov/planetary/factsheet/

const constants = {
  gravitationalConstant: 6.67408 * Math.pow(10, -11),
  sunMass: 1.989 * Math.pow(10, 30), // in kg
  // distance from the sun in meters
  distance: {
    mercury: 5.791 * Math.pow(10, 10),
    venus: 1.082 * Math.pow(10, 11),
    earth: 1.496 * Math.pow(10, 11),
    mars: 2.279 * Math.pow(10, 11),
    jupiter: 7.785 * Math.pow(10, 11),
    saturn: 1.433 * Math.pow(10, 12),
    uranus: 2.871 * Math.pow(10, 12),
    neptune: 4.495 * Math.pow(10, 12),
    pluto: 5.906 * Math.pow(10, 12)
  },
  // angular velocity = 2 * pi / orbital period (in seconds)
  angularVelocity: {
    mercury: 2 * Math.PI / (88 * 86400),
    venus: 2 * Math.PI / (224.7 * 86400),
    earth: 2 * Math.PI / (365 * 86400),
    mars: 2 * Math.PI / (687 * 86400),
    jupiter: 2 * Math.PI / (4331 * 86400),
    saturn: 2 * Math.PI / (10747 * 86400),
    uranus: 2 * Math.PI / (30589 * 86400),
    neptune: 2 * Math.PI / (59800 * 86400),
    pluto: 2 * Math.PI / (90560 * 86400)
  }
};



export default constants;

