import React from "react";
import './colors.css';
import './menu.css';
import MenuItem from './menuItem'

function Menu() {
  return (
    <div className='menuContainer'>
      <div className='menuItemsContainer'>
        <MenuItem link={'/'} title={'Home'}> </MenuItem>

      </div>
    </div>
  );
}

export default Menu;