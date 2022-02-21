import styled from "styled-components";

import React, { useState } from "react";
import Song from "./Song";

const SongsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
`



function Songs(props) {
    
    

    const {songsList} = props;

    const [songsArray, setSongsArray] = useState(songsList.tracks.data);

    function logSongsInfo() {
        let tempArr = [];
        console.log(songsArray.length);
        for(let i = 0;i<songsArray.length;i++){
            
            tempArr.push(songsArray[i].duration);
            console.log(songsArray[i].duration);
        }
        

        let lowestToHighest = tempArr.sort((a,b) => a-b);
        
        for(let i = 0; i<lowestToHighest.length;i++){
            for(let j = 0; j<lowestToHighest.length; j++){
                if(lowestToHighest[i]===songsArray[j].duration){
                    lowestToHighest[i]=songsArray[j];
                }
            }
        }
        console.log(lowestToHighest);
        let highestToLowest = tempArr.sort((a,b) => b-a);
        for(let i = 0; i<highestToLowest.length;i++){
            for(let j = 0;j<highestToLowest.length;j++){
                if(highestToLowest[i]===songsArray[j].duration){
                    highestToLowest[i]=songsArray[j];
                }
            }
        }
        console.log(highestToLowest);
    }
   

    const song = songsList.tracks.data.map(songInfo => (
        <div key={songInfo.id}>
            <Song song={songInfo}/>
        </div>
      ))

    return(
        <div>
            <button onClick={logSongsInfo}>Log</button>
            <SongsContainer>
                {song}
            </SongsContainer>
        </div>
    )
}

export default Songs;