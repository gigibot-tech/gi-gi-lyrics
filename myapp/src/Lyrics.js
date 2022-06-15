import React, { Component } from 'react';

class Lyrics extends Component{
    render(){
        const { jp, rom, en, artist } = this.props;
        return(
            <div className='lyrics_jp'>
                <div>Jp: { jp } </div>
                <div>romanji: { rom } </div>
                <div> english: { en } </div>
                <div> artist: {artist }</div>
            </div>
        )
    }
}

export default Lyrics;