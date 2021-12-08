import "./destinations.scss";
import { useState } from "react";

const Destinations = () => {
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
          <div className='planetSlide'>MOON</div>
          <div className='planetSlide'>MARS</div>
          <div className='planetSlide'>EUROPA</div>
          <div className='planetSlide'>TITAN</div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
