// This component is responsible for the simulation of the game.

import React from "react";
import Planet from "./Planet";
import "./Simulator.css";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Slider from '@mui/material/Slider';

const Simulator = () => {
  const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  const [settings, setSettings] = React.useState({
    mercury: false,
    venus: false,
    earth: true,
    mars: false,
    jupiter: false,
    saturn: false,
    uranus: false,
    neptune: false,
    sunMassMultiplier: 1,
    speed: 1,
  });

  const handleChange = (event) => {
    setSettings({ ...settings, [event.target.name]: event.target.checked });
  };

  const handleSliderChange = (event, newValue) => {
    setSettings({ ...settings, [event.target.name]: newValue });
  };

  // keep a reference to each planet's ref
  const planetRefs = planets.reduce((acc, planet) => {
    acc[planet] = React.createRef();
    return acc;
  }, {});

  const resetSettings = () => {
    // reset each planet's settings
    planets.forEach((planet) => {
      planetRefs[planet].current.resetSettings();
    });
    // reset simulator settings
    setSettings({
      ...settings,
      sunMassMultiplier: 1,
      speed: 1,
    });
  };

  return (
    <div className="body">
      <div className="settingsDiv">
        <FormLabel>Planets</FormLabel>
        <FormGroup>
          {planets.map((planet) => (
            <FormControlLabel
              key={planet}
              className="settingsPlanet"
              control={
                <Switch
                  checked={settings[planet.toLowerCase()]}
                  onChange={handleChange}
                  name={planet.toLowerCase()}
                />
              }
              label={planet}
            />
          ))}
        </FormGroup>
        <br />
        <FormLabel>Sun Mass Multiplier</FormLabel>
        <Slider
          name="sunMassMultiplier"
          className="slider"
          valueLabelDisplay="auto"
          value={settings.sunMassMultiplier}
          step={0.1}
          min={0}
          max={2}
          onChange={handleSliderChange}
        />
        <FormLabel>Speed</FormLabel>
        <Slider
          name="speed"
          className="slider"
          valueLabelDisplay="auto"
          value={settings.speed}
          step={0.1}
          min={.01}
          max={2}
          onChange={handleSliderChange}
        />
        <button className="resetButton" onClick={resetSettings}>Reset</button>
      </div>
      <img className="sun" src="./sun.png" alt="sun" />
      {planets.map((planet) => (
        <Planet
          ref={planetRefs[planet]}
          key={planet}
          name={planet.toLowerCase()}
          sunMassMultiplier={settings.sunMassMultiplier}
          speed={settings.speed}
          show={settings[planet.toLowerCase()]}
        />
      ))}
    </div>
  );
};

export default Simulator;
