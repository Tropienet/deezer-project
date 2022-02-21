import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from "react";
import Songs from './components/Songs';

function App() {
  const url = "https://mycorsproxydeezer.herokuapp.com/https://api.deezer.com/chart";
  const [songsList, setSongsList] = useState(null);

 

    useEffect(() => {
      axios.get(url)
      .then(response => {
        setSongsList(response.data)
      })
    }, [url])

    const logInfo = () => {
      console.log(songsList.tracks.data);
    }

    
  if(songsList){
  

    return(

      
      <div>
        <button onClick={logInfo}>Click me</button>
        <h1>Hello world</h1>
        
        <div>
          
        </div>
        <div>
          <Songs songsList={songsList}/>
        </div>
        <h2>{songsList.albums.data[0].title}</h2>
      </div>
    )
  }

  return(
    <div>
     
    </div>
  )
}

export default App;
