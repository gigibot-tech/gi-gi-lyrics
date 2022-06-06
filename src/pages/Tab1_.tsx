import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { RouteComponentProps} from 'react-router-dom';

interface Tab1Props extends RouteComponentProps {
  lyrics: String;
}

const Tab1: React.FC = (lyrics) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lyrics Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <div className="table">{lyrics}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
