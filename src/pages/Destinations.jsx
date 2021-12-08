import "./destinations.scss";
import { useState } from "react";

const Destinations = ({ active }) => {
  const [currentPlanet, setCurrentPlanet] = useState(0);

  const handlePlanetChange = (id) => {
    setCurrentPlanet(id);
    // console.log(id);
  };

  return (
    <div className='destinations'>
      <div className='contentContainer'>
        <div className='title'>
          <h2>
            <span>01</span>pick your destination
          </h2>
        </div>
        <div className='planetSelector'>
          <div className='menuItem' onClick={() => handlePlanetChange(0)}>
            <div className='textContainer'>
              Moon
              <div className='indicator'></div>
            </div>
          </div>
          <div className='menuItem' onClick={() => handlePlanetChange(1)}>
            <div className='textContainer'>
              Mars
              <div className='indicator'></div>
            </div>
          </div>
          <div className='menuItem' onClick={() => handlePlanetChange(2)}>
            <div className='textContainer'>
              Europa
              <div className='indicator'></div>
            </div>
          </div>
          <div className='menuItem' onClick={() => handlePlanetChange(3)}>
            <div className='textContainer'>
              Titan
              <div className='indicator'></div>
            </div>
          </div>
        </div>
        <div
          className='planetSlider'
          style={{
            transform: `translateX( -${100 * currentPlanet}vw)`,
          }}>
          <div
            className={
              currentPlanet === 0 ? "planetSlide active" : "planetSlide"
            }>
            MOON
          </div>
          <div
            className={
              currentPlanet === 1 ? "planetSlide active" : "planetSlide"
            }>
            MARS
          </div>
          <div
            className={
              currentPlanet === 2 ? "planetSlide active" : "planetSlide"
            }>
            EUROPA
          </div>
          <div
            className={
              currentPlanet === 3 ? "planetSlide active" : "planetSlide"
            }>
            TITAN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
