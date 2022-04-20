import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from "./crew.module.css"

export const Crew = ({ crewList }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [crew, setCrew] = useState();
    // const [crewItem, setCrewItem] = useState();

    useEffect(() => {
        try {
            setCrew(crewList[0])
            setLoading(false)

        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }, [])

    const handleSpanButton = (item) => {
        setLoading(true)
        try {
            setCrew(crewList[item])
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    // console.log(crew.name)

    return (
        <section className={styles['crew-container']}>
            <div className={styles['crew-wrapper']} >
                <div className={styles['crew-title']} >
                    <h3>02</h3>
                    <h2>MEET YOUR CREW</h2>
                </div>
                {
                    (loading == false)
                        ? <div className={styles['crew-detail']} >
                            <h3>{crew.role.toUpperCase()}</h3>
                            <h1>{crew.name.toUpperCase()}</h1>
                            <p>{crew.bio}</p>
                        </div>
                        : <div>loading... </div>
                }

                {
                    (loading != true)?
                    <div className={styles['crew-buttons']} >
                        <span onClick={() => handleSpanButton(0)} className={(crew.name === "Douglas Hurley") ? styles['crew-buttons-span-active'] : styles['crew-buttons-span']} />
                        <span onClick={() => handleSpanButton(1)} className={(crew.name === "Mark Shuttleworth") ? styles['crew-buttons-span-active'] : styles['crew-buttons-span']} />
                        <span onClick={() => handleSpanButton(2)} className={(crew.name === "Victor Glover") ? styles['crew-buttons-span-active'] : styles['crew-buttons-span']} />
                        <span onClick={() => handleSpanButton(3)} className={(crew.name === "Anousheh Ansari") ? styles['crew-buttons-span-active'] : styles['crew-buttons-span']} />
                    </div>
                    :
                    <div>Loading...</div>
                }

            </div>
            <div className={styles['crew-image']} >
                {
                    (loading == false)
                        ?
                        < Image src={crew.images.png} width={500} height={500} alt={`Images of ${crew.name}`} />
                        :
                        <div>loading...</div>
                }

            </div>
        </section>
    )
}
