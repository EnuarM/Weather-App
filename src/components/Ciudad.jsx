import React from "react";
import s from './styles.module.css';
import { NavLink } from 'react-router-dom';


export default function Ciudad({city}) {
    return (
        <div className={s.infocity}>                
            <h2>{city.name}</h2>
                <div>
                        <p>Temperatura: {city.temp} ºC</p>
                        <p>Clima: {city.weather}</p>
                        <p>Viento: {city.wind} km/h</p>
                        <p>Cantidad de nubes: {city.clouds}</p>
                        <p>Latitud: {city.latitud}º</p>
                        <p>Longitud: {city.longitud}º</p>
                </div>
                <NavLink className={s.links} to ='/'>
                    <span>Volver</span>
                </NavLink> 
        </div>
    )
}
