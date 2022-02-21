import styled from "styled-components";

import React, { useState } from "react";
import Song from "./Song";

const SongsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
`



function Songs(props) {
    
    const [durationType, setDurationType] = useState({value: "longest"});

    const {songsList} = props;

    function handleChange(e) {
        setDurationType({value: e.target.value});
    }

    const song = songsList.tracks.data.map(songInfo => (
        <div key={songInfo.id}>
            <Song song={songInfo}/>
        </div>
      ))

    return(
        <div>
            <form>
                <select value={durationType} onChange={handleChange}>
                    <option value="longest">Longest</option>
                    <option value="shortest">Shortest</option>
                </select>
            </form>
            <SongsContainer>
                {song}
            </SongsContainer>
        </div>
    )
}

export default Songs;