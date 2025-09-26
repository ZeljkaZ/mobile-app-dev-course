import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
} from "@ionic/react";
import { homeOutline, reorderThreeOutline, apertureOutline } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonListHeader>
              <IonLabel>Navigate from here..</IonLabel>
            </IonListHeader>
            <IonMenuToggle autoHide>
              <IonItem button routerLink="/tab1">
                <IonIcon slot="start" icon={homeOutline}></IonIcon>
                <IonLabel>Home</IonLabel>
              </IonItem>
              <IonItem routerLink="/service">
                <IonIcon slot="start" icon={apertureOutline}></IonIcon>
                <IonLabel>Service</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuToggle>
                <IonButton>
                  <IonIcon slot="start" icon={reorderThreeOutline}></IonIcon>
                </IonButton>
              </IonMenuToggle>
            </IonButtons>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <h1>Main Content</h1>
          <p>Click the icon in the top left to toggle the Menu.</p>
          <ExploreContainer name="Tab 1 page" />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab1;
