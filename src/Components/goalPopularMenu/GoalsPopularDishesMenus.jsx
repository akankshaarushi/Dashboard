import React from 'react';
import './GoalsPopularDishesMenus.css';
import { FaHamburger, FaUtensils, FaBullseye, FaAngleRight } from 'react-icons/fa';

function GoalsPopularDishesMenus() {
  return (
    <div className="goals-popular-dishes-menus">
      <div className="section">
        <div className="row">
          <div className="icons-containers goals-icon">
            <FaBullseye className="icon goals-icon-img" />
          </div>
          <h3 className='text'>Goals</h3>
          <FaAngleRight className="arrow-icon" />
        </div>
        <div className="row">
          <div className="icons-containers dishes-icon">
            <FaHamburger className="icon dishes-icon-img" />
          </div>
          <h3 className='text'>Popular Dishes</h3>
          <FaAngleRight className="arrow-icon" />
        </div>
        <div className="row">
          <div className="icons-containers menus-icon">
            <FaUtensils className="icon menus-icon-img" />
          </div>
          <h3 className='text'>Menus</h3>
          <FaAngleRight className="arrow-icon" />
        </div>
      </div>
    </div>
  );
}

export default GoalsPopularDishesMenus;
