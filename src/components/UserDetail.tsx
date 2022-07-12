
import { RouteComponentProps, useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { IonRouterOutlet, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { Storage } from '@ionic/storage'
import { journalSharp } from 'ionicons/icons';
import { Lyrics } from './Lyrics'
import { searchStorage } from './storage';

interface UserDetailPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const UserDetailPage: React.FC<UserDetailPageProps> = ({ match }) => {
  let history = useHistory();
  const [jp, setJp] = useState("");

  function handleClick() {
    history.push("/tab1");
  }
  
  const addJp = async(search:any) => {
    let jps = await searchStorage(search)
    console.log(search)
    console.log('sStorage jp search - found:')
    console.log(jps)
    console.log('current jp:')
    console.log(jp)
    console.log('appending jps-')
    //this.setState({songs: songs})
    setJp(jps[0]['lyrics_jp'])
    console.log(jp)  }
  
  //useEffect( () => getLyrics(match.params.id) ,[jp])

  return (
    <div>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User Detail {match.params.id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>User {match.params.id}</IonContent>
      <button type="button" onClick={handleClick}>
      Go home
    </button>
    <Lyrics  jp = {jp} addSong={addJp}/>    </div>
  );
};

export default UserDetailPage;