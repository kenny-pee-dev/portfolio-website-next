import React from 'react';
import NavIcons from './NavIcons';
import { useGlobalStore } from '../../../store/useGlobalStore';

const Navigation = () => {
  const setActiveView = useGlobalStore((state) => state.setActiveView);
  const activeDiv = useGlobalStore((state) => state.activeView);

  return (
    <nav>
      <NavIcons
        id='#header'
        handleOnClick={setActiveView}
        currentActiveState={activeDiv}
      />

      <NavIcons
        id='#about'
        handleOnClick={setActiveView}
        currentActiveState={activeDiv}
      />

      <NavIcons
        id='#experience'
        handleOnClick={setActiveView}
        currentActiveState={activeDiv}
      />

      <NavIcons
        id='#contact'
        handleOnClick={setActiveView}
        currentActiveState={activeDiv}
      />
    </nav>
  );
};

export default Navigation;
