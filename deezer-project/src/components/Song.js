import Modal from "./Modal";
import React, { useState } from "react";

function Song(props) {
    const [isOpen, setIsOpen] = useState(false);
    const {song} = props

  

    return(
        <div>
           <div onClick={() => setIsOpen(true)}>
            <img src={song.album.cover} alt={song.title}></img>
                
                <p>Naziv pjesme: {song.title}</p>
                
                <p>Ime glazbenika: {song.artist.name}</p>
                
               
            </div> 
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    
                    <p>Naziv pjesme: {song.title}</p>
                
                    <p>Ime glazbenika: {song.artist.name}</p>
                    {/*Calculate song duration in format minutes:seconds */}
                    <p>Song duration: {(Math.floor(song.duration/60)+((song.duration%60)/100)).toFixed(2)}</p>
                </Modal>
        </div>
    )
}

export default Song;