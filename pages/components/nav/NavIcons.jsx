import React from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import styles from './navigation.module.css';

const NavIcons = ({ id, handleOnClick, currentActiveState }) => {
  const className = currentActiveState === id ? styles.active : '';

  const renderIcon = (componentId) => {
    switch (componentId) {
      case '#header':
        return <AiOutlineHome />;
      case '#about':
        return <AiOutlineUser />;
      case '#experience':
        return <BiBook />;
      case '#contact':
        return <BiMessageSquareDetail />;
      default:
        return <div />;
    }
  };

  return (
    <a href={id} className={className} onClick={() => handleOnClick(id)}>
      {renderIcon(id)}
    </a>
  );
};

export default NavIcons;
