import Modal from "./Modal";
import React, { useState } from "react";
import styled from "styled-components";

const Information = styled.p`
    font-size: 25px;

`

const SongContainer = styled.div`
    background-color: #a59f9d;
    width: auto;
`

const CoverImage = styled.img`
    min-height: 300px;
    min-width: 300px;
    height: auto;
    width: auto;

`

function Song(props) {
    const [isOpen, setIsOpen] = useState(false);
    const {song} = props
    
    
   
  

    return(
        <div>
           <SongContainer onClick={() => setIsOpen(true)}>
            <CoverImage src={song.album.cover} alt={song.title}></CoverImage>
                
                <Information>Naziv pjesme: {song.title}</Information>
                
                <Information>Ime glazbenika: {song.artist.name}</Information>
                
               
            </SongContainer> 
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                  
                    <Information>Naziv pjesme: {song.title}</Information>
                
                    <Information>Ime glazbenika: {song.artist.name}</Information>
                    {/*Calculate song duration in format minutes:seconds */}
                    <Information>Song duration: {(Math.floor(song.duration/60)+((song.duration%60)/100)).toFixed(2)}</Information>
                </Modal>
        </div>
    )
}

export default Song;