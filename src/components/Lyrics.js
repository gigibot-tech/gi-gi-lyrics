import React, { Component } from 'react';

export class Lyrics extends Component{
    state = {}
    
        handleChange = (e) => {
            this.setState({
                [e.target.id] : e.target.value
            });
        }
    
        handleSubmit = (e) => {
            e.preventDefault();
            this.props.addSong(this.state);
        }

    render(){
        const { jp, rom, en, artist } = this.props;
        return(
                   
            <div className='lyrics_jp'>
                <div>Jp: { jp } </div>
                <div>romanji: { rom } </div>
                <div> english: { en } </div>
                <div> artist: {artist }</div>
                
                <form onSubmit={this.handleSubmit}>
                        <label htmlFor="song_name">Search:</label>
                        <input type="text" id="search" onChange={this.handleChange} />
                        <button>Submit</button>
                    </form>b 
            </div>
        )
    }
}

export default Lyrics;