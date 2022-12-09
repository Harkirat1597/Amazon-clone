import React from 'react'
import amazonLogo from '../Icons&Images/amazonLogo.png';

function NavIcon() {
  return (
    <>
      <img 
        src={amazonLogo}
        style={{cursor: "pointer", width: "150px"}}
      />
    </>
  );
}

export default NavIcon;