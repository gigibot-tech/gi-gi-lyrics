import React, { Component } from 'react';

const Results = ({songs}) => {
    const songsList = songs.map(song => {
        return song.song_id > 1 ? (
            <div className='results' key={songs.song_id}>
            <div>id: { song.song_id } </div>
            <div>song: { song.song_name } </div>
            <div> artist: { song.song_artist } </div>
            <div> url: {song.song_url }</div>
        </div>
        ) : null;
    })
    return(
        <div className='list'>
        {songsList}
        </div>
    )
}

export default Results;