function ListCity(){
            
    Object.keys(localStorage).map(async (key)=>{

        // Pareil qu'en dessous
        // let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${key}&appid=6cb51553063597da58efe9d5cc9e967a&units=metric`)
        // let data =  await response.json()
        // console.log(data);
        
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${key}&appid=6cb51553063597da58efe9d5cc9e967a&units=metric`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
        return (
            <h1> {data.city.name}</h1>
        )
        });
    
        
    })
}