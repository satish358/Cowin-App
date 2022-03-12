import React, { useState } from 'react'
import { IonButton, IonCol, IonContent, IonGrid, IonPage, IonRow, IonSlide, IonSlides, IonText } from '@ionic/react'
import styles from './Intro.module.css';
import socialDistanceImg from './undraw_social_distancing_2g0u.svg';
import medicalResearchImg from './undraw_medical_research_qg4d.svg';
import medicalCareImg from './undraw_medical_care_movn.svg';
import { useHistory } from 'react-router';

const IntroductionPage = () => {
  const navigator = useHistory();
  const [isFirstTime, setIsFirstTime] = useState<boolean>(localStorage.getItem('isFirstTime') === 'false' ? false : true);
  const slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  if(!isFirstTime) {
    navigator.push('/login');
  }
  const onLetsStartClick = () => {
    localStorage.setItem('isFirstTime', 'false');
    navigator.push('/login');
  }

  return (

      <IonContent>
        <IonSlides className={styles.h100} pager={true} options={slideOpts}>
          <IonSlide>
            <IonGrid className={styles?.ionGrid}>
              <IonRow>
                <img src={socialDistanceImg} alt="" />
              </IonRow>
              <IonRow>
                <IonText>
                  <h3>Stopping the spreadstarts with you</h3>
                  <p>
                    Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local health authority.
                  </p>
                </IonText>
              </IonRow>
            </IonGrid>
          </IonSlide>
          <IonSlide>
            <IonGrid className={styles?.ionGrid}>
              <IonRow>
                <img src={medicalResearchImg} alt="" />
              </IonRow>
              <IonRow>
                <IonText>
                  <h3>Getting the vaccine</h3>
                  <p>
                    Everyone 15 and older is eligible to get the vaccine against Covid-19. Availability may vary by state.
                  </p>
                </IonText>
              </IonRow>
            </IonGrid>
          </IonSlide>
          <IonSlide>
             <IonGrid className={styles?.ionGrid}>
              <IonRow>
                <img src={medicalCareImg} alt="" />
              </IonRow>
              <IonRow>
                <IonCol>
                  <br /><br />
                  <IonButton expand='block' onClick={onLetsStartClick} mode='ios' color='primary' fill='outline'>Let's start </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
           
          </IonSlide>
        </IonSlides>
      </IonContent>
  
  )
}

export default IntroductionPage