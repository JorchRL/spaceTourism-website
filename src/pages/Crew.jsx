import "./crew.scss";
import { useState } from "react";
import * as data from "../data.json";
import crew0Img from "../assets/crew/image-douglas-hurley.png";
import crew3Img from "../assets/crew/image-anousheh-ansari.png";
import crew1Img from "../assets/crew/image-mark-shuttleworth.png";
import crew2Img from "../assets/crew/image-victor-glover.png";

const Crew = ({ active }) => {
  const [currentCrew, setCurrentCrew] = useState(0);
  const crew = data.crew;
  const handleCrewChange = (id) => {
    setCurrentCrew(id);
  };
  return (
    <div className='crew'>
      <div className='contentContainer'>
        <div className='title'>
          <h2>
            <span>02</span>meet your crew
          </h2>
        </div>
        <div className='crewSelector'>
          <div
            className={currentCrew === 0 ? "indicator active" : "indicator"}
            onClick={() => handleCrewChange(0)}></div>

          <div
            className={currentCrew === 1 ? "indicator active" : "indicator"}
            onClick={() => handleCrewChange(1)}></div>

          <div
            className={currentCrew === 2 ? "indicator active" : "indicator"}
            onClick={() => handleCrewChange(2)}></div>

          <div
            className={currentCrew === 3 ? "indicator active" : "indicator"}
            onClick={() => handleCrewChange(3)}></div>
        </div>
        <div
          className='crewSlider'
          style={{
            transform: `translateX(-${100 * currentCrew}vw)`,
          }}>
          <div className={currentCrew === 0 ? "crewSlide active" : "crewSlide"}>
            <div className='imgContainer'>
              <img src={crew0Img} alt='' />
            </div>
            <div className='infoContainer'>
              <h2 className='role'>{crew[0].role}</h2>
              <h2 className='name'>{crew[0].name}</h2>
              <p className='bio'>{crew[0].bio}</p>
            </div>
          </div>

          <div className={currentCrew === 1 ? "crewSlide active" : "crewSlide"}>
            <div className='imgContainer'>
              <img src={crew1Img} alt='' />
            </div>
            <div className='infoContainer'>
              <h2 className='role'>{crew[1].role}</h2>
              <h2 className='name'>{crew[1].name}</h2>
              <p className='bio'>{crew[1].bio}</p>
            </div>
          </div>

          <div className={currentCrew === 2 ? "crewSlide active" : "crewSlide"}>
            <div className='imgContainer'>
              <img src={crew2Img} alt='' />
            </div>
            <div className='infoContainer'>
              <h2 className='role'>{crew[2].role}</h2>
              <h2 className='name'>{crew[2].name}</h2>
              <p className='bio'>{crew[2].bio}</p>
            </div>
          </div>

          <div className={currentCrew === 3 ? "crewSlide active" : "crewSlide"}>
            <div className='imgContainer'>
              <img src={crew3Img} alt='' />
            </div>
            <div className='infoContainer'>
              <h2 className='role'>{crew[3].role}</h2>
              <h2 className='name'>{crew[3].name}</h2>
              <p className='bio'>{crew[3].bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
