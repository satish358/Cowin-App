import React, { useEffect, useState } from 'react'
import { IonButton, IonCol, IonContent, IonGrid, IonPage, IonRow,  IonText, useIonLoading } from '@ionic/react';
import {TextField } from '@mui/material';

import styles from './Login.module.css';
import medicalCareImg from './undraw_doctors_hwty.svg';
import { useConfirmOTP, useGenerateOTP } from '../../services/auth';
const LoginPage = () => {
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');

  const {mutate: generateOTPApi,  isSuccess: isGenerateOTPSuccess} = useGenerateOTP();
  const {mutate: confirmOtpApi } = useConfirmOTP();

  useEffect(() => {
    if (isGenerateOTPSuccess)
      setIsOtpSent(true);
  }, [isGenerateOTPSuccess]);
  
  const onGenerateOtp = () => {
    generateOTPApi(mobileNumber); 
  }
  const onVerifyOtp = () => {
    confirmOtpApi(otp);
  }
  return (
    <IonPage>
      <IonContent>      
        <IonGrid className={styles?.loginContainer}>
          <IonRow>
            <IonCol>
              <img src={medicalCareImg} alt="medicalOptsImg" />
            </IonCol>
          </IonRow>
          <IonRow className={styles?.inputContainer}>
            <IonCol>
              {
                isOtpSent ? <TextField value={otp} onChange={(e) => setOtp(e.target.value)} type={"number"} fullWidth id="otp" label="OTP" variant="outlined" /> 
                : <TextField value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} fullWidth type={"number"} id="mobileNumber" label="Registered Mobile Number" variant="outlined" />
              }
            </IonCol>
          </IonRow>

          <IonRow className={styles?.buttonsContainer}>
            <IonCol>
              {
                isOtpSent ? <IonButton onClick={onVerifyOtp} expand='block' mode='ios' color='primary' fill='outline'>Verify OTP</IonButton>
                : <IonButton onClick={onGenerateOtp} expand='block' mode='ios' color='primary' fill='outline'>Send OTP</IonButton>
              }
            </IonCol>

          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default LoginPage