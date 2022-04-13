import React from 'react';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style["Home-background"]}>

      <div className={style["Home-container"]}>
        <div className={style["Home-container-detail"]}>
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space,
            you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back,
            and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className={style["Home-container-button"]}>
          <h2>EXPLORE</h2>
        </div>
      </div>
    </div>
  )
}

export default Home