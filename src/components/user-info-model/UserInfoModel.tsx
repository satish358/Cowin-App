import React from 'react'
import { IonModal, IonContent, IonGrid, IonRow, IonCol, IonText, IonButton } from '@ionic/react'
import styles from './UserInfoModel.module.css';

import completeImg from './undraw_complete_design_re_h75h.svg';
import waitingImg from './undraw_notify_re_65on.svg';
import classNames from 'classnames';

export type UserInfoModelPropType = {
    does?: number;
    doesAddress?: string;
    isCompleted?: boolean;
    vaccineName?: string;
    isModelShow?: boolean;
    dueDate?: string;
    lastDate?: string;
    beneficiaryReferenceRd?: string;
}

export const UserInfoModel = ({
    does,
    doesAddress,
    dueDate,
    lastDate,
    isCompleted,
    vaccineName,
    isModelShow,
    beneficiaryReferenceRd
}:UserInfoModelPropType) => {
    const modelContainerClasses = classNames([styles.modelContainer, {
        [styles.isWaiting]: !isCompleted,
        [styles.isSuccess]: isCompleted,
        
    }])
  return (
     <IonModal
        
        isOpen={isModelShow}
        breakpoints={[0.1, 0.65]}
        initialBreakpoint={0.65}
      >
        <IonContent className={modelContainerClasses}>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <div className={styles.imageContainer}>
                        <img className={styles.image} src={isCompleted? completeImg: waitingImg} width={400} height={200} alt="" />
                        </div>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonText>
                                <b>DOSE : </b> 
                                {does === 1? 'FIRST' : 'SECOND'}
                        </IonText>
                    </IonCol>
                    <IonCol>
                        <IonText color='primary'>   
                                {vaccineName?.toUpperCase()}
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonText>
                                <b>FROM </b> <br />
                                {doesAddress}           
                        </IonText>
                    </IonCol>
                </IonRow>

                {!isCompleted && <IonRow>
                    <IonCol>
                        <IonText color='danger'>
                                <b>DUE DATE </b> <br />
                                {dueDate}           
                        </IonText>
                    </IonCol>
                    <IonCol>
                        <IonText color='danger'>
                                <b>LAST DATE </b> <br />
                                {lastDate}           
                        </IonText>
                    </IonCol>
                </IonRow>}

                <IonRow>
                    <IonCol>
                        { isCompleted 
                        ? <IonButton mode='ios' fill='outline' expand='block' color='success'>Download Certificate</IonButton>
                        : <IonButton mode='ios' fill='outline' expand='block' color='warning'>Schedule Appointment</IonButton>}
                    </IonCol>
                </IonRow>
                
            </IonGrid>
        </IonContent>
      </IonModal>
  )
}
