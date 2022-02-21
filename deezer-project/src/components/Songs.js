import styled from "styled-components";

import React, { useState } from "react";
import Song from "./Song";

const SongsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    padding: 20px;
    background-color: grey;
`

const FormContainer = styled.div`
    width: 100%;
    padding: 50px;
    background-color: grey;
    border: solid 1px black;
`

const Form = styled.form`
    width: 250px;
    font-size: 25px;
    `

const Option = styled.option`
    font-size: 25px;
    font-weight: bold;
`

const Select = styled.select`
    width: 250px;
    font-size: 25px;
`


function Songs(props) {
    
    

    const {songsList} = props;

    const [songsArray, setSongsArray] = useState(songsList.tracks.data);
    const [reversed, setReversed] = useState(0);

    

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
        
        setSongsArray(tempArr);
        setReversed(0);
    }
   
    const songSorted = songsArray.map(songInfo => (
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
            <FormContainer>
            <Form className="sorting-form">
                <Select>
                    <Option onClick={reverseSort}>Ascending</Option>
                    <Option onClick={sortByShortestSong}>Descending</Option>
                </Select>
            </Form>
            </FormContainer>
            
            <SongsContainer>
                {songSorted}
            </SongsContainer>
        </div>
    )
}

export default Songs;