import React from "react";
import "./navbar.scss";

const Navbar = ({ handleScreenChange, currentPage }) => {
  const buttons = [
    {
      id: 0,
      num: "00",
      text: "Home",
    },
    {
      id: 1,
      num: "01",
      text: "Destination",
    },
    {
      id: 2,
      num: "02",
      text: "Crew",
    },
    {
      id: 3,
      num: "03",
      text: "Technology",
    },
  ];

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'>
            <g fill='none' fill-rule='evenodd'>
              <circle cx='24' cy='24' r='24' fill='#FFF' />
              <path
                fill='#0B0D17'
                d='M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z'
              />
            </g>
          </svg>
        </div>
        <div className='menuContainer'>
          <div className='menu'>
            {buttons.map((b) => (
              <MenuItem
                handleScreenChange={handleScreenChange}
                num={b.num}
                id={b.id}
                text={b.text}
                key={b.id}
                currentPage={currentPage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ num, id, text, handleScreenChange, currentPage }) => {
  return (
    <div className='menuItem' onClick={() => handleScreenChange(id)}>
      <div className='textContainer'>
        <h6>
          <span>{num} </span>

          {text}
        </h6>
      </div>
      <div
        className={currentPage === id ? "indicator active" : "indicator"}></div>
    </div>
  );
};

export default Navbar;
