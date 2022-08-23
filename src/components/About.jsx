import React from 'react'
import s from './styles.module.css'
import icon1 from '../img/logo.png'
import icon2 from '../img/logo2.png'

export default function About() {
return (
    <div className={s.mainabout}>
        <div className={s.descripcionabout}>
            <h2>Proyecto React</h2>
            <p> Este proyecto fue construido con componentes funcionales de React y utilizando react router y estados locales con useState. Este trabajo dio el inicio al aprendizaje sobre React.js y fue uno de los requerimientos para aprobar el modulo 2 del bootcamp de Henry en Argentina.
            </p>
        </div>
        <div className={s.personalinfo}>
            <h4>Enuar Montaña</h4>
            <span>Full Stack Web Developer</span>
            <div className={s.imagenes}>
                <a href="https://www.linkedin.com/in/enuarmontaña/" >
                    <div>
                        <img src={icon1}></img>
                    </div>
                </a>
                <a href="https://github.com/EnuarM" >
                    <div>
                        <img src={icon2}></img>
                    </div>
                </a>
            </div>
        </div>        
    </div>
)
}
