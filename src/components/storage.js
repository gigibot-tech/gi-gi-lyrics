/* input song: song_name, song_artist, song_url */
import { Storage } from '@ionic/storage'

function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min + 1) ) << 0;
}

export const addStorage = async(song) => {
    //append summary.json
    async function initDb() {
      const store = new Storage();
      const db = await store.create();
      await store.set(song.song_name, {song_id: getRandomArbitrary(0,1000), 
        song_name: song.song_name, song_artist: song.song_artist, song_url: song.song_url,
      lyrics_jp: song.lyrics_jp, lyrics_en: song.lyrics_en})
      //setDb(db);
      console.log(song.song_name)
      console.log(await store.get(song.song_name))
      console.log(await store.get('test'))

      await store.forEach((key, value, index) => {
        console.log('store'+key+value+index)
        store.get(value).then(function(result) {
          // here you can use the result of promiseB
          console.log(result)
      })
        if(value.includes('test')){
          console.log(value+'here is test')
          //songs = [...songs, value]
        }
      });
      return store;
    }
    
    var store = initDb();
    //addSummary(song);
    };

    export const searchStorage = async(searc,setState) => {
        let search = searc['search']
        console.log(search)
        const store = new Storage();
        const db = await store.create();
        //setDb(db);

        let songs = [];
        await store.forEach((key, value, index) => {
            console.log('store'+key+value+index)

            let map = []
            /*store.get(value).then(function(result) {
            // here you can use the result of promiseB
            console.log(result)
            console.log(key)
            map = [...map, result]
            console.log(map)
        })*/
            if(value.includes(search)){
            console.log(value+'here is'+search)
            songs = [...songs, key]
            console.log(songs)
            }

        });

        console.log('r')
        return songs;
    }

    /*fetch('./test.json').then(response => {
      console.log(response);
      return response.json();
    }).then(data => {
      // Work with JSON data here
      console.log(data);
      let songs = [...this.state.songs, song];
      this.setState({songs: songs})
      //this.setState({songs: JSON.parse(data)});
    }).catch(err => {
      // Do something for an error here
      console.log("Error Reading data " + err);
      let songs = [...this.state.songs, song];
      this.setState({songs: songs})
    });*/

    /*
  fetch(search.song_name+='.json').then(response => {
    console.log(response);
    console.log(search.song_name)
    return response.json();
  }).then(data => {
    // Work with JSON data here
    console.log(JSON.parse(data));
    let songs = [...JSON.parse(data)];
    this.setState({songs: songs})
    //this.setState({songs: JSON.parse(data)});
  }).catch(err => {
    // Do something for an error here
    console.log("Error Reading data " + err);
    let songs = [...this.state.songs];
    this.setState({songs: songs})
  });
        
let map2 = []
songs.forEach(element => {
    console.log(element)
    store.get(element).then(function(result) {
    console.log(result)
    // here you can use the result of promiseB
    map2 = [...map2, result]
})
    console.log(map2)
}); */
