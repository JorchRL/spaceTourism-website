import "./technology.scss";
import { useState } from "react";
import * as data from "../data.json";

//portrait images
import launchVehicleImg from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceCapsuleImg from "../assets/technology/image-space-capsule-portrait.jpg";
import spacePortImg from "../assets/technology/image-spaceport-portrait.jpg";

//landscape images
import launchVehicleImgLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceCapsuleImgLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import spacePortImgLandscape from "../assets/technology/image-spaceport-landscape.jpg";

const Technology = ({ active }) => {
  const [currentTech, setCurrentTech] = useState(0);
  const tech = data.technology;

  const handleTechChange = (id) => {
    setCurrentTech(id);
    console.log("change tech slide: ", id);
  };
  return (
    <div className='technology'>
      <div className={active ? "contentContainer active" : "contentContainer"}>
        {/* Title */}
        <div className='title'>
          <h2>
            <span>03</span>space launch 101
          </h2>
        </div>

        {/* Selector */}
        <div className='techSelector'>
          <div
            className={currentTech === 0 ? "indicator active" : "indicator"}
            onClick={() => handleTechChange(0)}>
            <div className='circleBg'>
              <h1 className='num'>1</h1>
            </div>
          </div>

          <div
            className={currentTech === 1 ? "indicator active" : "indicator"}
            onClick={() => handleTechChange(1)}>
            <div className='circleBg'>
              <h1 className='num'>2</h1>
            </div>
          </div>

          <div
            className={currentTech === 2 ? "indicator active" : "indicator"}
            onClick={() => handleTechChange(2)}>
            <div className='circleBg'>
              <h1 className='num'>3</h1>
            </div>
          </div>
        </div>

        {/* ///////
        Slider 
        ////////*/}
        <div
          className='techSlider'
          style={{ transform: `translateY(-${100 * currentTech}vh)` }}>
          {/* Slide 0 */}
          <div className={currentTech === 0 ? "techSlide active" : "techSlide"}>
            <div className='imgContainer'>
              <img src={launchVehicleImg} className='imgPortrait' alt='' />
              <img
                src={launchVehicleImgLandscape}
                className='imgLandscape'
                alt=''
              />
            </div>
            <div className='infoContainer'>
              <h2 className='header'>the terminology...</h2>
              <h2 className='name'>{tech[0].name}</h2>
              <p className='description'>{tech[0].description}</p>
            </div>
          </div>
          {/* Slide 1 */}
          <div className={currentTech === 1 ? "techSlide active" : "techSlide"}>
            <div className='imgContainer'>
              <img src={spacePortImg} className='imgPortrait' alt='' />
              <img
                src={spacePortImgLandscape}
                className='imgLandscape'
                alt=''
              />
            </div>
            <div className='infoContainer'>
              <h2 className='header'>the terminology...</h2>
              <h2 className='name'>{tech[1].name}</h2>
              <p className='description'>{tech[1].description}</p>
            </div>
          </div>
          {/* Slide 2 */}
          <div className={currentTech === 2 ? "techSlide active" : "techSlide"}>
            <div className='imgContainer'>
              <img src={spaceCapsuleImg} className='imgPortrait' alt='' />
              <img
                src={spaceCapsuleImgLandscape}
                className='imgLandscape'
                alt=''
              />
            </div>
            <div className='infoContainer'>
              <h2 className='header'>the terminology...</h2>
              <h2 className='name'>{tech[2].name}</h2>
              <p className='description'>{tech[2].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
