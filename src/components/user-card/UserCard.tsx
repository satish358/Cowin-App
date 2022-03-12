import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'
import React from 'react'
import styles from './UserCard.module.css';

export type UserCardPropType = {
    referenceId: string;
    name: string;
    isFirstDoseCompleted?: boolean;
    isSecondDoseCompleted?: boolean;
    photoId?: string;
    idNumber?: string;
    yearOfBirth?: string;
    gender?: string;

}
export const UserCard = ({
    referenceId,
    name,
    isFirstDoseCompleted,
    isSecondDoseCompleted,
    photoId,
    idNumber,
    yearOfBirth,
    gender
}: UserCardPropType) => {
  return (
    <IonCard mode='ios' className={styles.fullyVaccinated}>
        <IonCardHeader className={styles.cardHeader}>
            <IonCardSubtitle>{referenceId}</IonCardSubtitle>
            <IonCardTitle>{name}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent className={styles.cardContents}>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonText>
                            <p>
                                <b>PHOTO ID</b> <br />
                            Addhar Card
                            </p>
                        </IonText>
                    </IonCol>
                    <IonCol>
                        <IonText>
                            <p>
                                <b>ID NUMBER</b> <br />
                            XXXXXXXX8374
                            </p>
                        </IonText>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <IonText>
                            <p>
                                <b>YEAR OF BIRTH</b> <br />
                                1198
                            </p>
                        </IonText>
                    </IonCol>
                    <IonCol>
                        <IonText color='primary'>
                            <p>
                                <b>SECRET CODE</b> <br />
                                0670
                            </p>
                        </IonText>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <IonButton mode='ios' fill='outline' expand='block' color='success'>DOSE 1</IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton mode='ios' fill='outline' expand='block' color='warning'>DOSE 1</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCardContent>
    </IonCard>
  )
}
