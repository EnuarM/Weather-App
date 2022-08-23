import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import {Route} from 'react-router-dom';
import About from './components/About.jsx';
import Ciudad from './components/Ciudad.jsx'


export default function App() { 

  const[cities, setCities] = useState([]);
  console.log(cities)

      const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
      function onSearch(ciudad) {
        //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
        //pero de momento agregaremos una ciudad por default para ver que funcione
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
        .then(r => r.json())
        .then((recurso) => {
          if(cities.find(city => city.name === recurso.name)) return alert("Ciudad ya agregada")
            else if(recurso.main !== undefined){
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };           
            setCities(oldCities => [...oldCities, ciudad]);
          }else {
            alert("Ciudad no encontrada");
          }
        });
      };

      function onFilter(ciudadId) {
        let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
        if(ciudad.length > 0) {
            return ciudad[0];
        } else {
            return null;
        }
      }

      function onClose(id) {
        setCities(oldCities => oldCities.filter(c => c.id !== id));
      }

    return (
      <>
        <Nav onSearch={onSearch}/>
      <div className="App">
          <Route
          exact path='/'
            render={() => <Cards  cities={cities} onClose={onClose} />}
          />     
          <Route
            exact path='/about'
            render={About}
          />
          <Route
          exact path='/ciudad/:ciudadId'
            render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
  />
          
    </div>
    </>  
    );    
  }
    
    

  