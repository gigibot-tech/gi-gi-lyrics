import React, { Component } from 'react';

export class Search extends Component {
    state = { };
    
        handleChange = (e) => {
            this.setState({
                [e.target.id] : e.target.value
            });
        }
    
        handleSubmit = (e) => {
            e.preventDefault();
            console.log('submit')
            console.log(this.state.setState)
            this.props.addSong(this.state, this.props.setState);
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
                        <label htmlFor="song_name">Search:</label>
                        <input type="text" id="search" onChange={this.handleChange} />
                        <button>Submit</button>
                    </form>
                </div>
            )
        }
    }
    
    export default Search;