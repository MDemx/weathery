import React from 'react';
import preloader from "./preloader.svg";
import s from "./Preloader.module.css";

let Preloader = (props) => {
    return <div className={s.preloaderWrapper}>
        {/*<div className={s.preloaderWrapper}>
            <img src={preloader}></img>
        </div>*/}
        <div className={s.water}></div>
    </div>
}

export default Preloader;

