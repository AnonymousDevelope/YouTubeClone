/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { create_video, group, hamburger, notification, tube } from '../assets/svgs'
import SearchBar from './search-bar'
import userAvatar from '../assets/images/User-Avatar.png'
const header = () => {
  const openSidebar = () => {
    $('.sidebar').toggleClass('hide');
    $('.sidebar').parent().toggleClass('gap-2');
  }
  $(document).ready(function () {
    $('.sidebar').parent().removeClass('gap-2');
  })
  return (
    <>
      <header>
        <div className="header_brand">
          <a href="#" className="openmenu" onClick={openSidebar}>
            <img src={hamburger} alt="" />
          </a>
          <a className='logo' href='/'>
            <img src={tube} alt="" />
          </a>
        </div>
        <div className="search">
          <SearchBar />
        </div>
        <div className="navigations">
          <ul className=''>
            <li className=''>
              <a className='' title='create video' href="#">
                <img src={create_video} alt="" />
              </a>
            </li>
            <li className=' '>
              <a className='' title='apps' href="#">
                <img src={group} alt="" />
              </a>
            </li>
            <li className=' '>
              <a className='' title='notification' href="#">
                <img src={notification} alt="" />
              </a>
            </li>
          </ul>
          <div className='user'>
            <img src={userAvatar} alt="" />
          </div>
        </div>
      </header>
    </>
  )
}

export default header