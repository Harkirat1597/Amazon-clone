import React from 'react'
import amazonLogo from '../Icons&Images/amazonLogo.png';

function NavIcon() {
  return (
    <>
      <img 
        src={amazonLogo}
        className="nav-logo-amazon"
        style={{cursor: "pointer", maxWidth: "150px"}}
      />
    </>
  );
}

export default NavIcon;