import React, { useState } from 'react'
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonModal } from '@ionic/react'
import { UserCard, UserInfoModel } from '../../components'

export const DashboardPage = () => {
  return (
    <IonPage>
        <IonHeader >
            <IonToolbar  color='primary'>
                <IonTitle>Dashboard</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>      
            <UserCard referenceId='12344422112' name='Satish Mankar' />
                
           <UserInfoModel isCompleted={false} isModelShow={true} vaccineName="covaccine" dueDate="12/01/2021" doesAddress='At Wadholi chandrapur with 4432' lastDate='10/02/2021'  />
        </IonContent>
    </IonPage>
  )
}
