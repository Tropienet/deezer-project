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

   

    
  if(songsList){
   
   
  

    return(

      
      <div>
        
        
        <div>
          <Songs songsList={songsList}/>
        </div>
        
      </div>
    )
  }

  return(
    <div>
     
    </div>
  )
}

export default App;
