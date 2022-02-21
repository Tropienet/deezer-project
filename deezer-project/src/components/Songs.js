import styled from "styled-components";

const SongsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

function Songs(props) {
    const {songsList} = props;

    const song = songsList.tracks.data.map(songss => (
        <div key={songss.id}>
            <p>This is from the songs components</p>
            <p>Naziv pjesme: {songss.title}</p>
            <img src={songss.album.cover} alt={songss.album.cover}></img>
            <p>Ime glazbenika: {songss.artist.name}</p>
        </div>
      ))

    return(
        <SongsContainer>
            {song}
        </SongsContainer>
    )
}

export default Songs;