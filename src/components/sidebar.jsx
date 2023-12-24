import React, { useState } from 'react';
import Container from './container';
import { explore, explore_active, history, home, home_active, library, liveStream, liveStreamActive, subscribe, subscribe_active, yourVideo } from '../assets/svgs';

const Sidebar = () => {
  const [activeTop, setActiveTop] = useState('Home'); // State to track active item name
  const [activeMid, setActiveMid] = useState(''); // State to track active item name

  const MenuTopSection = [
    {
      name: 'Home',
      link: '/',
      icon: home,
      activeIcon: home_active,
    },
    {
      name: 'Explore',
      link: '/',
      icon: explore,
      activeIcon: explore_active,
    },
    {
      name: 'Subscribe',
      link: '/',
      icon: subscribe,
      activeIcon: subscribe_active,
    },
  ];
  const MenuMidSection = [
    {
      name: 'Library',
      link: '/',
      icon: library,
      activeIcon: library,
    },
    {
      name: 'History',
      link: '/',
      icon: history,
      activeIcon: history,

    },
    {
      name: 'Your Videos',
      link: '/',
      icon: yourVideo,
      activeIcon: yourVideo,
    },
    {
      name: 'Live',
      link: '/',
      icon: liveStream,
      activeIcon: liveStreamActive,
    },
    {
      name: 'Library',
      link: '/',
      icon: library,
      activeIcon: library,
    },
    {
      name: 'History',
      link: '/',
      icon: history,
      activeIcon: history,

    },
    {
      name: 'Your Videos',
      link: '/',
      icon: yourVideo,
      activeIcon: yourVideo,
    },
    {
      name: 'Live',
      link: '/',
      icon: liveStream,
      activeIcon: liveStreamActive,
    }

  ]

  const handleClick = (itemName) => {
    setActiveTop(itemName); // Set the active item name when an item is clicked
  };

  return (
    <div className="sidebar_container">
      <ul className="sidebar_list">
        {MenuTopSection.map((item, index) => (
          <li className={`list_item`} key={index}>
            <a className={`${activeTop === item.name ? 'active' : ''}`} href={"#"} onClick={() => handleClick(item.name)}>
              <img src={activeTop === item.name ? item.activeIcon : item.icon} alt={item.name} />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className='sidebar_list'>
        {MenuMidSection.map((item, index) => (
          <li className={`list_item`} key={index}>
            <a className={`${activeMid === item.name ? 'active' : ''}`} href={"#"} onClick={() => setActiveMid(item.name)}>
              <img src={activeMid === item.name ? item.activeIcon : item.icon} alt={item.name} />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
