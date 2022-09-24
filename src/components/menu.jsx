import React from "react";
import './colors.css';
import './menu.css';
import logo from '../images/logo.png'
import MenuItem from './menuItem'

function Menu() {
  return (
    <div className='menuContainer'>
      <div className='menuItemsContainer'>
        <img src={logo} alt="logo" width={"50px"} />
        <MenuItem link={'/essentialofthechristian.github.io/'} title={'Home'}> </MenuItem>
        <MenuItem link={'/essentialofthechristian.github.io//#/Jornals'} title={'Messsages'}></MenuItem>

      </div>
    </div>
  );
}

export default Menu;