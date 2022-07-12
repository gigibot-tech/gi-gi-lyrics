import './Tab1.css';
import { RouteComponentProps} from 'react-router-dom';
import React, { useState } from 'react';
import { IonItem, IonLabel, IonRouterOutlet, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter } from '@ionic/react';
import List from '../components/List';
import { Redirect, Route } from 'react-router-dom';
import UserDetailPage from '../components/UserDetail';
import { addStorage, searchStorage}  from '../components/storage';

export const Tab1: React.FC<RouteComponentProps> = ( {match} ) => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonSearchBar Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <List search={searchText} songs= {searchStorage(searchText)} />
        <p>Default Searchbar</p>
        <IonSearchbar value={searchText} onIonChange={e => 
         setSearchText(e.detail.value!) }></IonSearchbar>
        </IonContent>
      <IonFooter>
        <IonToolbar>
          Search Text: {searchText ?? '(none)'}
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
