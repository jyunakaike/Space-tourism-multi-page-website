import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Modal from '@components/Modal';

// images
import Logo from '../../assets/shared/logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import style from './Layout.module.css';

export const Layout = ({ children }) => {
  let router = useRouter();

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }


  return (
    <React.Fragment>
      <div className={style.header}>
        <Image
          src={Logo}
          alt={"logo"}
          width={50}
          height={50}
        />
        <hr />

        <div className={style["header-menu-container"]}>
          <Link href={"/"} >
            <div className={(router.pathname === "/") ? style["header-menu-active"] : style["header-menu"]}>
              <h2>00 </h2>
              <p>HOME </p>
            </div>
          </Link>

          <Link href={"/destination"}>
            <div className={(router.pathname == "/destination") ? style["header-menu-active"] : style["header-menu"]}>
              <h2>01 </h2>
              <p>DESTINATION</p>
            </div>
          </Link>

          <Link href={"/crew"}>
            <div className={(router.pathname == "/crew") ? style["header-menu-active"] : style["header-menu"]}>
              <h2>02 </h2>
              <p>CREW</p>
            </div>
          </Link>

          <Link href={"/technology"}>
            <div className={(router.pathname == "/technology") ? style["header-menu-active"] : style["header-menu"]}>
              <h2>03 </h2>
              <p>TECHNOLOGY</p>
            </div>
          </Link>
        </div>
          <AiOutlineMenu onClick={handleOpenModal} className={style["header-menu-icon"]} />
      </div>
      {
        (openModal)
        ?
        <Modal openModal={openModal} setOpenModal={setOpenModal} />
        :null
      }

      {children}
    </React.Fragment>

  )
}
