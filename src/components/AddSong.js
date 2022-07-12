import React, { Component } from  'react';

class AddSong extends Component {
    state = { song_name: null,
    song_artist: null, song_url: null, lyrics_jp: null, lyrics_en: null}


    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addSong(this.state);
    }
        

    /*save = jsonData => {
        const fileData = JSON.stringify(jsonData);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'filename.json';
        link.href = url;
        link.click();
      }*/

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="song_name">Song name:</label>
                    <input type="text" id="song_name" onChange={this.handleChange} />
                    <label htmlFor="song_artist">Artist:</label>
                    <input type="text" id="song_artist" onChange={this.handleChange} />
                    <label htmlFor="song_url">url:</label>
                    <input type="text" id="song_url" onChange={this.handleChange} />
                    <label htmlFor="lyrics_jp">Lyrics jp:</label>
                    <input type="text" id="lyrics_jp" onChange={this.handleChange} />
                    <label htmlFor="lyrics_en">Lyrics en:</label>
                    <input type="text" id="lyrics_en" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddSong;