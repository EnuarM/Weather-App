import React, {useState} from 'react';
import s from './styles.module.css';


export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity ] = useState("");
  return (      
    
      <form onSubmit = {(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("")
      }}>

      <input type='text'  value ={city} onChange ={element=>setCity(element.target.value)} className = {s.input} placeholder='Ciudad...' />
      <input type='submit' className={s.addButton} value='Agregar'/>
      </form>

    
  )
};