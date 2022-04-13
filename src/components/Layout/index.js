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
          <div className={style["header-menu"]}> <h2 className={style["header-menu-title"]}>00 HOME </h2> </div>
          <div className={style["header-menu"]}> <h2>01 DESTINATION </h2></div>
          <div className={style["header-menu"]}><h2>02 CREW </h2></div>
          <div className={style["header-menu"]}> <h2>03 TECNOLOGY </h2></div>
        </div>



      </div>
      {children}
    </React.Fragment>

  )
}
