import React, {  Component, useEffect, useState } from 'react';
import Results from './Results';
import AddSong from './AddSong';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Storage } from '@ionic/storage'
import { addStorage, searchStorage}  from './storage';
import { Search } from './Search'
import { useParams } from 'react-router';
import {Lyrics} from './Lyrics';

const List = (props) => {
  const [songs, setSongs] = useState([]);
  const [jp, setJp] = useState("");
  //const { id } = useParams()
  //state={ songs : [{"song_id": "1", "song_name": "\"Tested\"", "song_artist": "Bad Religion", "song_url": "https://www.azlyrics.com/lyrics/badreligion/tested.html"}]};
  //state = GetData();
  
  const addSong = (song) => {
    console.log(addStorage)
    var store = addStorage(song)
    let rsongs = [...songs, song];
    //this.setState({songs: songs})
    setSongs(rsongs)
  }
  
  const searchSong = async(search) => {
    let new_songs = await searchStorage(search)
    console.log('sStorage search - found:')
    console.log(new_songs)
    console.log('current songs:')
    console.log(songs)
    console.log('appending songs-')
    //this.setState({songs: songs})
    setSongs(new_songs)
    console.log(songs)
  }

  //render(){
    //const { results } = this.props
    return (
    <div className="App">
      <h1> Test </h1>
        <p>Welcome</p>
      <Search addSong={searchSong}  />
      <Results songs={ songs } />
      <AddSong addSong={addSong} />
      <Lyrics jp = { jp } addSong={addJp}/>
      <div>test</div>
    </div>
    );
   //}
}


/*
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(List) */

export default List;