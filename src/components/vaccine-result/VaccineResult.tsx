import React from 'react'
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonText, IonButton, IonLabel, IonIcon } from '@ionic/react'
import {calendarClearOutline } from 'ionicons/icons'
export const VaccineResult = () => {
  return (
    <IonCard mode='ios' >
        <IonCardHeader >
            <IonCardSubtitle>
                <IonLabel color='primary'>{'Check darur sc - dhaba phc'.toUpperCase()}</IonLabel>
            </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent >
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonLabel>
                            <b>
                                
                            </b>
                        </IonLabel>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonText>
                            <p>
                                <b>VACCINE</b> <br />
                                COVACXIN
                            </p>
                        </IonText>
                    </IonCol>
                    <IonCol>
                        <IonText>
                            <p>
                                <b>DOES</b> <br />
                                FIRST
                            </p>
                        </IonText>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <IonText>
                            <p>
                                <b>AGE</b> <br />
                                18 AND ABOVE
                            </p>
                        </IonText>
                    </IonCol>
                    <IonCol>
                        <IonText>
                            <p>
                                <b>TYPE</b> <br />
                                <IonLabel color='success'>FREE</IonLabel>
                            </p>
                        </IonText>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <IonButton mode='ios' fill='outline' expand='block' color='primary'>
                            <IonIcon slot='start' icon={calendarClearOutline}></IonIcon> Schedule
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCardContent>
    </IonCard>
  )
}
