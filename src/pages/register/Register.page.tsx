import React, { useState } from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonGrid, IonRow, IonCol, IonButton, IonRadioGroup } from '@ionic/react'
import { TextField, MenuItem,Select, FormControl, InputLabel, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select';
import styles from './Register.module.css';

export const RegisterPage = () => {
    const [name, setName] = useState<string>('');
    const [photoIdType, setPhotoIdType] = useState<string>('');
    const [photoId, setPhotoId] = useState<string>('');
    const [yearOfBirth, setYearOfBirth] = useState<string>('');
 
  return (
    <IonPage>
        <IonHeader >
            <IonToolbar>
                <IonTitle>Register for Vaccination</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>      
            
          <IonGrid className={styles?.formContainer}>
              <IonRow>
                  <IonCol>
                    <TextField value={name} onChange={(e) => setName(e.target.value)} fullWidth type={"text"} id="name" label="Name" variant="outlined" />
                  </IonCol>
              </IonRow>

              <IonRow >
                  <IonCol>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    </FormControl>
                  </IonCol>
              </IonRow>

              
             <IonRow >
                  <IonCol>
                    <TextField value={yearOfBirth} onChange={(e) => setYearOfBirth(e.target.value)} fullWidth type={"number"} id="yearOfBirth" label="Year of Birth" variant="outlined" />
                  </IonCol>
              </IonRow>

              <IonRow className={styles.padding12}>
                    <IonCol>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Photo ID type</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={photoIdType}
                            label="Photo ID type"
                            onChange={(e) => setPhotoIdType(e.target.value as string)}
                            >
                                <MenuItem value={10}>Addhar</MenuItem>
                                <MenuItem value={20}>PAN</MenuItem>
                                <MenuItem value={30}>Driving Licente</MenuItem>
                            </Select>
                        </FormControl>
                    </IonCol>
            </IonRow >
                <IonRow className={styles.padding12}>
                  <IonCol>
                    <TextField value={photoId} onChange={(e) => setPhotoId(e.target.value)} fullWidth type={"number"} id="photoId" label="Photo ID Number" variant="outlined" />
                  </IonCol>
              </IonRow>

              <IonRow className={styles.padding12}>
                    <IonCol>
                        <IonButton  expand='block' mode='ios' color='primary' fill='outline'>Register</IonButton>
                    </IonCol>
                </IonRow>
          </IonGrid>

          
        </IonContent>
    </IonPage>
  )
}
