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
    const [reversed, setReversed] = useState(0);

    function logSongsInfo() {
        let tempArr = songsArray;
      
        
        for(let i = 0;i<tempArr.length;i++){
            for(let j = 0;j<(tempArr.length - i - 1 );j++){
                if(tempArr[j].duration > tempArr[j+1].duration){
                    let temp = tempArr[j]
                    tempArr[j] = tempArr[j + 1]
                    tempArr[j + 1] = temp
                }
            }
        }
        console.log("sorted");
        console.log(tempArr);
        console.log("unsorted")
        console.log(songsArray);
        setSongsArray(tempArr);
        
    }

    const sortByShortestSong = () => {
        let tempArr = songsArray;
      
        
        for(let i = 0;i<tempArr.length;i++){
            for(let j = 0;j<(tempArr.length - i - 1 );j++){
                if(tempArr[j].duration > tempArr[j+1].duration){
                    let temp = tempArr[j]
                    tempArr[j] = tempArr[j + 1]
                    tempArr[j + 1] = temp
                }
            }
        }
        console.log("sorted");
        console.log(tempArr);
        console.log("unsorted")
        console.log(songsArray);
        setSongsArray(tempArr);
        setReversed(0);
    }
   
    const songSorted = songsArray.map(songInfo => (
        <div key={songInfo.id}>
            <Song song={songInfo}/>
        </div>
      ))


    const song = songsList.tracks.data.map(songInfo => (
        <div key={songInfo.id}>
            <Song song={songInfo}/>
        </div>
      ))

      const reverseSort = () => {
          let tempArr = songsArray.reverse();
          setSongsArray(tempArr);
          setReversed(1);
      }

    return(
        <div>

            <form>
                <select>
                    <option onClick={reverseSort}>Ascending</option>
                    <option onClick={sortByShortestSong}>Descending</option>
                </select>
            </form>
            
            
            <SongsContainer>
                {songSorted}
            </SongsContainer>
        </div>
    )
}

export default Songs;