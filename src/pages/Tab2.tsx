import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar
  , IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Vocabulary List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Vocabulary</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>

          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle Hiragana Katakana し </IonCardSubtitle>
            <IonCardTitle>Card Title Kanji 欲</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            1. Hi
            2. Test its english nice
      </IonCardContent>
        </IonCard>

        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
