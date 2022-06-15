import { IonContent, IonHeader, IonPage, IonList, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import React from 'react';
import { RouteComponentProps} from 'react-router-dom';
import axios from 'axios';
import { AppPage } from '../declarations';

const URL = `http://127.0.0.1:8000/results/?song_url=https://www.azlyrics.com/lyrics/lisa/gurengetvversion.html&song_name=%22%E7%B4%85%E8%93%AE%E8%8F%AF%20(Gurenge)%20(TV%20Version)%22&song_artist=LiSA`;

const fetchArticles = () => {

  return axios({
    url: URL,
    method: 'get'
  }).then(response => {

    console.log(response);
    return response.data;
  })
};

interface Tab1Props extends RouteComponentProps {
  appPages: AppPage[];
}

const Tab1: React.FC = (props) => {

  const [articles, setArticles] = React.useState([]);
  const items: any[] = [];

  React.useEffect(() => {

    fetchArticles().then(data => setArticles(data.articles));

  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lyrics Search</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonSearchbar name="Search"> Search Songs:
        </IonSearchbar>
        <div className="table">{props.lyrics}
        </div>
        <IonContent color="primary" >
        <IonList color="primary">

          {
            articles.map(a => {
              
              return (
                <IonItem>
                  {a['title']}
                  <IonButton href={a['url']} color="primary" slot="end">Read</IonButton>
                </IonItem>
              );
            })
          }

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
