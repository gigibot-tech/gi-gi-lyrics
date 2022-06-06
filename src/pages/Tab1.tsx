import './Tab1.css';
import { RouteComponentProps} from 'react-router-dom';
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter } from '@ionic/react';

export const Tab1: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonSearchBar Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Default Searchbar</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        </IonContent>
      <IonFooter>
        <IonToolbar>
          Search Text: {searchText ?? '(none)'}
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
