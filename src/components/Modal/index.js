import React from 'react';
import Link from 'next/link';

import { AiOutlineClose } from 'react-icons/ai';

import styles from './Modal.module.css';

const Modal = ({  setOpenModal, openModal }) => {
    const handleCloseMenu = () => {
        setOpenModal(!openModal)
    }
    return (
        <React.Fragment>
            <div className={styles.Modal}>
                <div className={styles['Modal-header']}>
                    <AiOutlineClose className={styles.cross} onClick={() => handleCloseMenu()} />
                </div>

                <div  onClick={() => handleCloseMenu()} className={styles['Modal-List']}>
                    <Link href={"/"}  >
                        <div className={styles['Modal-List-detail']}>
                            <h2>00 </h2>
                            <p>HOME </p>
                        </div>
                    </Link>

                    <Link href={"/destination"} >
                        <div className={styles['Modal-List-detail']}>
                            <h2>01 </h2>
                            <p>DESTINATION</p>
                        </div>
                    </Link>

                    <Link href={"/crew"}>
                        <div className={styles['Modal-List-detail']}>
                            <h2>02 </h2>
                            <p>CREW</p>
                        </div>
                    </Link>

                    <Link href={"/technology"}>
                        <div className={styles['Modal-List-detail']}>
                            <h2>03 </h2>
                            <p>TECHNOLOGY</p>
                        </div>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Modal