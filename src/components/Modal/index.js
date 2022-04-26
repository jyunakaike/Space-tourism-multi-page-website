import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { AiOutlineClose } from 'react-icons/ai';

import styles from './Modal.module.css';

const Modal = ({ children, setHandleModal, handleModal }) => {
    const handleCloseMenu = () => {
        setHandleModal(!handleModal)
    }

    let router = useRouter();

    return (
        <React.Fragment>
            <div className={styles.Modal}>
                <div className={styles['Modal-header']}>
                    <AiOutlineClose className={styles.cross} onClick={() => handleCloseMenu()} />
                </div>

                <div className={styles['Modal-List']}>
                    <Link href={"/"} >
                        <div className={styles['Modal-List-detail']}>
                            <h2>00 </h2>
                            <p>HOME </p>
                        </div>
                    </Link>

                    <Link href={"/destination"}>
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
            {children}
        </React.Fragment>
    )
}

export default Modal