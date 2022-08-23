import React from 'react';
import s from './styles.module.css';
import {Link} from 'react-router-dom';


export default function Card({min, max, name, onClose, img, id}) {
  // acá va tu código    

  return(     
  
      <div className={s.card}>
        <div className={s.containerbutton}>
          <button className ={s.button} onClick={onClose}> X </button>
        </div>

        <Link className={s.links} to={`/ciudad/${id}`}>
          <h1 className={s.h1}>{name}</h1>
        </Link>

          <div className={s.data}>
            <div>
              <p>Min</p>
              <p>{Math.floor(min)} °C </p>
            </div>
            <div>
              <p>Max</p>
              <p>{Math.floor(max)} °C </p>
            </div>
          <div className={s.img}>
            <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`}/>
          </div>
          </div>

      </div>
    )
};

