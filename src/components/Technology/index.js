import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from './technology.module.css';

export const Technology = ({ technologyList }) => {
    const [technology, setTechnology] = useState()
    const [Loading, setLoading] = useState()
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        try {
            setTechnology(technologyList[0]);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }, [])
    const handleButtonNumber = (item) => {
        setLoading(true)
        try {
            setTechnology(technologyList[item]);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }
    return (
        <section className={styles['technology-container']}>
            <div className={styles['technology-wrapper']}>
                <div className={styles['technology-title']}>
                    <h3>03</h3>
                    <h2>SPACE LAUNCH 101</h2>
                </div>
                {
                    (Loading == false)
                        ?
                        <div className={styles['technology-article-wrapper']}>
                            <article className={styles['technology-article']}>
                                <div className={styles['technology-article-numbers']}>
                                    <div onClick={() => handleButtonNumber(0)} className={(technology.name.toUpperCase() === 'LAUNCH VEHICLE') ? styles['technology-article-number-active'] : styles['technology-article-number']}><h1>1</h1></div>
                                    <div onClick={() => handleButtonNumber(1)} className={(technology.name.toUpperCase() === 'SPACEPORT') ? styles['technology-article-number-active'] : styles['technology-article-number']}><h1>2</h1></div>
                                    <div onClick={() => handleButtonNumber(2)} className={(technology.name.toUpperCase() === 'SPACE CAPSULE') ? styles['technology-article-number-active'] : styles['technology-article-number']}><h1>3</h1></div>
                                </div>
                                <div className={styles['technology-article-detail']}>
                                    <h3>
                                        THE TERMINOLOGY…
                                    </h3>
                                    <h1>{technology.name.toUpperCase()}</h1>
                                    <p>{technology.description}</p>
                                </div>
                            </article>
                            <div className={styles['technology-article-image']}>
                                {/* <Image src={technology.images.portrait} width='100%' height='100%' layout="responsive" objectFit="contain" alt={`${technology.name}-image`} /> */}
                                <Image src={technology.images.landscape} width='99%' height='40%' layout="responsive" objectFit="contain" alt={`${technology.name}-image`} />
                            </div>
                        </div>
                        :
                        <div>Loading</div>
                }
            </div>
        </section>
    )
}


