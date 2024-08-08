import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/cssfiles/header.css';

function Header() {
  return (
    <div className='flex flex-row justify-around py-4 bg-slate-950 fixed top-0 left-0 right-0 botglow mb-48'>
      <div className='hidden md:inline-block'>
        <h4 className='text-2xl font-bold'>
          <span>Deepak </span><span>Prakash</span>
        </h4>
      </div>

      <div>
        <ul className='flex flex-row justify-between gap-7 md:gap-14'>
          <li>
            <NavLink 
              to="/home" 
              activeClassName='active'
              exact
            >
              <h3>Home</h3>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              activeClassName='active'
            >
              <h3>About</h3>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/skills" 
              activeClassName='active'
            >
              <h3>Skills</h3>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              activeClassName='active'
            >
              <h3>Projects</h3>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              activeClassName='active'
            >
              <h3>Contact</h3>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
