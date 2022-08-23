import React from 'react';
import Card from './Card.jsx';
import s from './styles.module.css';



export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(cities){
    return(
      <div className={s.tarjetas}>  
            
      {      
        cities.map(c =>       
          <Card
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}          
          />          
          )
        }       
        </div>
    );
      }else {
        return(
          <div>Sin ciudades</div>
          )
        } 
        
      };