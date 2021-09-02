import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Weather from './Components/Weather';
import Days from './Components/Days';
import FormSearch from './Components/FormSearch';
import DisplayCity from './Components/DisplayCity';


function App() {
  
  const [name, setName] = useState('');
  const [temp, setTemp] = useState('');
  const [temp_min, setTempMin] = useState('');
  const [temp_max, setTempMax] = useState('');
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');
  const [date, setDate] = useState('');
  const [icon, setIcon] = useState('');
  const [days, setDays] = useState('');
  const [result, setResult] = useState({});

  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);

  
              
              const setData = (data) => { 
                
                setName(data.city.name)
                setTemp(data.list[0].main.temp)
                setTempMin(data.list[0].main.temp_min)
                setTempMax(data.list[0].main.temp_max)
                setHumidity(data.list[0].main.humidity)
                setWind(data.list[0].wind.speed)
                setResult(data)
                setDate(data.list[0].dt)
                setDays([
                  data.list[0].dt + 86400,
                  data.list[0].dt + 86400 * 2,
                  data.list[0].dt + 86400 * 3,
                  data.list[0].dt + 86400 * 4,
                ]) 
                setIcon(data.list[0].weather[0].icon)
              }; 
              

              //Récupérer la position géographique
              if (name === ''){
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(getPosition);
                }
              
              function getPosition(position){

                fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=6cb51553063597da58efe9d5cc9e967a&units=metric`)
                  .then(res => res.json())
                  .then(data => {
                      setData(data);  
                  }); 
                }
              }

            const handleSubmit = (event) =>{
                // document.querySelector('[name="search"]').value = '' //Valeur de l'input à 0
                event.preventDefault()
                // console.log(userInput);
                if (userInput !== ''){
                    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=6cb51553063597da58efe9d5cc9e967a&units=metric`)
                      .then(res => res.json())
                      .then(data => {
                        setData(data);
                        // console.log(data);
                        localStorage.setItem(data.city.name, JSON.stringify(data.city.name)); 
                      });  
                    }else{
                      alert('Renseigner le nom de la ville')
                    }
                    };  
                
          const handleSearch = (event) =>{
              
              setUserInput(event.target.value)
          }  
            
            
            
            //Pour l'affichage des jours suivant
            
            function changeDay(timestamp){
              
              result.list.forEach(element => {
                
                if (element.dt == timestamp) {
                  // console.log(element)
                  setTemp(element.main.temp)
                  setTempMin(element.main.temp_min)
                  setTempMax(element.main.temp_max)
                  setHumidity(element.main.humidity)
                  setWind(element.wind.speed)
                  setIcon(element.weather[0].icon)
                }  
              });  
            };  
            
            
            
            
            
            return (
              <div>
      <div>
        <Header />
      </div>
      <div className='search'>
        <FormSearch 
        search={handleSearch} 
        submit={handleSubmit}/>
      </div>
      {error ? (<h1>{error}</h1>) : (
      <div>
        <Weather 
          name={name} 
          temp={temp} 
          temp_min={temp_min} 
          temp_max={temp_max} 
          humidity={humidity} 
          wind={wind} 
          icon={icon}
        />
        
        <Days 
          date={date} 
          changeDay={changeDay} 
          nextDays={days}  
        />

      </div>)};
        <div>
          <ListCity />
        </div>
    </div>
  );
}

export default App;
