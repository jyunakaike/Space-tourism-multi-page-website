import React from 'react';
import Image from 'next/image';
// images
import Logo from '../../assets/shared/logo.svg'


import style from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className={style.header}>
        <Image
          src={Logo}
          alt={"logo"}
          width={50}
          height={50}
        />
        <div className={style["header-menu-container"]}>
          <div className={style["header-menu"]}>  <h2>00 </h2> <p>HOME </p> </div>
          <div className={style["header-menu"]}>  <h2 >01 </h2> <p>DESTINATION</p> </div>
          <div className={style["header-menu"]}>  <h2>02 </h2> <p>CREW</p>  </div>
          <div className={style["header-menu"]}>  <h2>03 </h2> <p>TECNOLOGY</p> </div>
        </div>



      </div>
      {children}
    </React.Fragment>

  )
}
