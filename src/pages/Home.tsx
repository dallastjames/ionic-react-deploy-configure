import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { Deploy } from "cordova-plugin-ionic";
import "./Home.css";

const Home: React.FC = () => {
  const configure = async (config: {
    appId: string;
    channel: string;
  }): Promise<void> => {
    console.log("configure!");
    console.log("before the great change", await Deploy.getConfiguration());
    await Deploy.configure(config);
    console.log("after the great change", await Deploy.getConfiguration());
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton
          onClick={() =>
            configure({
              appId: "2a4cc4bf",
              channel: "Test",
            })
          }
        >
          CONFIGURE 1
        </IonButton>
        <IonButton
          onClick={() =>
            configure({
              appId: "34e34455",
              channel: "Oh Yeah!",
            })
          }
        >
          CONFIGURE 2
        </IonButton>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
