import { useState } from "react";

import "./app.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleScreenChange = (id) => {
    setCurrentPage(id);
    console.log(id);
  };
  return (
    <div className='app'>
      <Navbar
        handleScreenChange={handleScreenChange}
        currentPage={currentPage}
      />
      <div
        className='mainSlider'
        style={{
          transform: `translateX(${-1440 * currentPage}px)`,
        }}>
        <Home />
        <Destinations />
        <Crew />
        <Technology />
      </div>
    </div>
  );
};

export default App;
