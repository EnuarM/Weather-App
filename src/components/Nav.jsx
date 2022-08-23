import React from 'react';
import SearchBar from './SearchBar.jsx';
import s from './styles.module.css';
import { NavLink } from 'react-router-dom';



export default function Nav({onSearch}) {
return (
<nav className={s.nav}>
    <div className ={s.divnav}>
    <NavLink className={s.links} to ='/'>
        <span>Home</span>
    </NavLink>  
    <NavLink to ='/about'>          
            <span>About</span>
    </NavLink> 
    <div>
        <h2>Weather App</h2>
        </div>    
    <div>
    <SearchBar onSearch={onSearch}/>    
    </div>
</div>
</nav>   
)
};


