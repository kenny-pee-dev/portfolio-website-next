import React, { useState } from 'react';
import NavIcons from './NavIcons';

const Navigation = () => {
  const [active, setActive] = useState('#header');

  function handleOnClick(id) {
    setActive(id);
  }

  return (
    <nav>
      <NavIcons
        id='#header'
        handleOnClick={handleOnClick}
        currentActiveState={active}
      />
      <NavIcons
        id='#about'
        handleOnClick={handleOnClick}
        currentActiveState={active}
      />

      <NavIcons
        id='#experience'
        handleOnClick={handleOnClick}
        currentActiveState={active}
      />

      <NavIcons
        id='#contact'
        handleOnClick={handleOnClick}
        currentActiveState={active}
      />
    </nav>
  );
};

export default Navigation;
