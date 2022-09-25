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
        <MenuItem link={'/'} title={'Home'}> </MenuItem>
        <MenuItem link={'/#/Jornals'} title={'Messsages'}></MenuItem>

      </div>
    </div>
  );
}

export default Menu;