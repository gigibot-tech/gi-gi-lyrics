import React, { Component } from  'react';

class AddSong extends Component {
    state = { song_name: null,
    song_artist: null, song_url: null}

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addSong(this.state);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="song_name">Name:</label>
                    <input type="text" id="song_name" onChange={this.handleChange} />
                    <label htmlFor="song_artist">Artist:</label>
                    <input type="text" id="song_artist" onChange={this.handleChange} />
                    <label htmlFor="song_url">Url:</label>
                    <input type="text" id="song_url" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddSong;