import React, {  Component } from 'react';
import Results from './Home';
import AddSong from './AddSong';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const GetData=()=>
fetch('./test.json').then(response => {
  console.log(response);
  return response.json();
}).then(data => {
  // Work with JSON data here
  console.log(data);
  this.setState({songs: JSON.parse(test)});
}).catch(err => {
  // Do something for an error here
  console.log("Error Reading data " + err);
});

/*{
  fetch('./test.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(myJson) {
      console.log(myJson);
        // After setState react runs updating lifecycle methods (https://reactjs.org/docs/react-component.html#updating)
        this.setState({users: JSON.parse(test)});
    });
}*/

class App extends Component {
  state=
  { songs : [{"song_id": "1", "song_name": "\"Tested\"", "song_artist": "Bad Religion", "song_url": "https://www.azlyrics.com/lyrics/badreligion/tested.html"}, {"song_id": "2", "song_name": "\"test drive\"", "song_artist": "Ariana Grande", "song_url": "https://www.azlyrics.com/lyrics/arianagrande/testdrive.html"}, {"song_id": "3", "song_name": "\"Testify\"", "song_artist": "Rage Against The Machine", "song_url": "https://www.azlyrics.com/lyrics/rageagainstthemachine/testify.html"}, {"song_id": "4", "song_name": "\"Test\"", "song_artist": "Bif Naked", "song_url": "https://www.azlyrics.com/lyrics/bifnaked/test.html"}, {"song_id": "5", "song_name": "\"Testosterone\"", "song_artist": "Bush", "song_url": "https://www.azlyrics.com/lyrics/bush/testosterone.html"}, {"song_id": "6", "song_name": "\"Take A Chance On Me\"", "song_artist": "ABBA", "song_url": "https://www.azlyrics.com/lyrics/abba/takeachanceonme.html"}, {"song_id": "7", "song_name": "\"Move On Up\"", "song_artist": "Curtis Mayfield", "song_url": "https://www.azlyrics.com/lyrics/curtismayfield/moveonup.html"}, {"song_id": "8", "song_name": "\"Locked Out Of Heaven\"", "song_artist": "Bruno Mars", "song_url": "https://www.azlyrics.com/lyrics/brunomars/lockedoutofheaven.html"}, {"song_id": "9", "song_name": "\"DDU-DU DDU-DU (\ub69c\ub450\ub69c\ub450)\"", "song_artist": "BLACKPINK", "song_url": "https://www.azlyrics.com/lyrics/blackpink/ddududdudu.html"}, {"song_id": "10", "song_name": "\"That That\"", "song_artist": "PSY", "song_url": "https://www.azlyrics.com/lyrics/psy/thatthat.html"}]}


 addSong = (song) => {
    song.song_id = 66;
    let songs = [...this.state.songs, song];
    this.setState({songs: songs})
 }

  render(){
    const { results } = this.props
    return (
    <div className="App">
      <h1> Test </h1>
        <p>Welcome</p>
      <Results songs={ this.state.songs } />
      <AddSong addSong={this.addSong} />
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects
  }
}

/*
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(App)*/

export default App;
