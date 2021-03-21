import React from 'react';
import preloader from "./preloader.svg";
import s from "./Preloader.module.css";

let Preloader = (props) => {
    return <div>
        <div className={s.preloaderWrapper}>
            <img src={preloader}></img>
        </div>
    </div>
}

export default Preloader;

