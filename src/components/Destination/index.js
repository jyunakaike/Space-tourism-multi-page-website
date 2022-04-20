import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from "./destination.module.css";

const destination = ({ destinationNames }) => {
  const [destinationList, setDestinationList] = useState(destinationNames);
  const [destinationItem, setDestinationItem] = useState(destinationNames[0]);

  useEffect(() => {
    setDestinationList(destinationNames);
    setDestinationItem(destinationNames[0])
  }, []);


  const  handleTitle = (item) => {
    setDestinationItem(destinationNames[item])
  }


  return (
    <section className={styles.background}>
      <div className={styles["destination-container"]}>
        <div className={styles["destination-image"]}>
          <div className={styles["destination-image-title"]} >
            <h3>01</h3> <h2> PICK YOUR DESTINATION </h2>
          </div>
          <div className={styles["destination-image-size"]}>
            {
              (destinationItem)
                ?
                <Image src={destinationItem.images.png} width={400} height={400} alt={destinationItem.name} />
                : loading
            }
          </div>
        </div>
        <div className={styles["destination-detail"]}>
          <div className={styles["destination-nameList"]}>
            {
              destinationList.map((item, index )=>
                <div onClick={()=>handleTitle(index)}  key={item.name} className={(destinationItem.name === item.name) ?styles[ 'destination-nameList-active'] : styles['destination-nameList-noactive'] }>
                  <h3 key={item.name}>{item.name.toUpperCase()}</h3>
                </div>
              )
            }
          </div>

          <h1>{destinationItem.name.toUpperCase()}</h1>
          <p>
            {destinationItem.description}
          </p>

          <hr />


          <div className={styles["destination-nameList-detail"]}>
            <div>
              <h3>AVG. DISTANCE</h3>
              <h2>{destinationItem.distance.toUpperCase()}</h2>
            </div>

            <div>
              <h3>EST. TRAVEL TIME</h3>
              <h2>{destinationItem.travel.toUpperCase()}</h2>
            </div>
          </div>

        </div>
      </div>
    </section >
  )
}

export default destination

