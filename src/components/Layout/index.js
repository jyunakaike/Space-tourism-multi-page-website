import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
          <Link href={"/"}>
            <div className={style["header-menu"]}>
              <h2>00 </h2>
              <p>HOME </p>
            </div>
          </Link>

          <Link href={"/destination"}>
            <div className={style["header-menu"]}>
              <h2>01 </h2>
              <p>DESTINATION</p>
            </div>
          </Link>

          <Link href={"/crew"}>
            <div className={style["header-menu"]}>  
              <h2>02 </h2>
              <p>CREW</p>  
            </div>
          </Link>

          <Link href={"/technology"}>
            <div className={style["header-menu"]}>  
              <h2>03 </h2> 
              <p>TECHNOLOGY</p>
            </div>
          </Link>

        </div>



      </div>
      {children}
    </React.Fragment>

  )
}
