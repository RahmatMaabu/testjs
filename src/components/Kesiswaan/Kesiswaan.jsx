'use client';
import React, { useState } from 'react'
import SideBar from '../Navigation/SideBar';
import Navbar from '../Navigation/Navbar';
import KesiswaanContent from './KesiswaanContent/KesiswaanContent';

const Kesiswaan = () => {
    const [isActive , setIsActive] = useState(false);

    const handleSideNav = () => {
      setIsActive(!isActive);
    }
      return (
        <>
          <div className="relative z-plus top-0 h-16 ">
          <Navbar onClick={handleSideNav} isActive={isActive}/>
          {!isActive ? <SideBar/> : null}
          </div>
          <KesiswaanContent isActive={isActive}/>
        </>
  )
}

export default Kesiswaan
