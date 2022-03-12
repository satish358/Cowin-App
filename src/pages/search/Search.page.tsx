import React, { useState } from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react'
import { mapOutline, navigateOutline } from 'ionicons/icons'
import { TextField, MenuItem,Select, FormControl, InputLabel } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select';
import styles from './Search.module.css';

export const SearchPage = () => {

  const [pinCode, setPinCode] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('2018-10-02');
  const [searchBy, setSearchBy] = useState<string>('byPin');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');

  const onStateChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };
  const onDistrictChange = (event: SelectChangeEvent) => {
    setDistrict(event.target.value as string);
  };

    const searchByPin = () => {
        //
    }
    const onTabChange = (e: any) => setSearchBy(e?.detail?.value || '')
  return (
    <IonPage>
        <IonHeader >
            <IonToolbar>
                <IonTitle>Search</IonTitle>
            </IonToolbar>
            <IonToolbar>
          <IonSegment value={searchBy} onIonChange={onTabChange}>
            <IonSegmentButton value="byPin" layout='icon-start'>
                <IonIcon icon={navigateOutline} />
              <IonLabel>By Pin</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="byDistrict" layout='icon-start'>
                <IonIcon icon={mapOutline} />
              <IonLabel>By District</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
        </IonHeader>
        <IonContent>      
            {searchBy === 'byPin' && <IonGrid className={styles.formContainer}>
                <IonRow>
                    <IonCol>
                        <TextField value={pinCode} onChange={(e) => setPinCode(e.target.value)} fullWidth type={"number"} id="pinCode" label="Pin Code" variant="outlined" />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <TextField value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} fullWidth type={"date"} id="selectedDate" label="Date" variant="outlined" />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton onClick={searchByPin} expand='block' mode='ios' color='primary' fill='outline'>Search</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>}

           {searchBy === 'byDistrict' && <IonGrid className={styles.formContainer}>
                <IonRow>
                    <IonCol>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state}
                            label="Age"
                            onChange={onStateChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </IonCol>
                </IonRow>
                <IonRow className={styles.formContainer}>
                    <IonCol>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label2">District</InputLabel>
                            <Select
                            labelId="demo-simple-select-label2"
                            id="demo-simple-select2"
                            value={district}
                            label="District"
                            onChange={onDistrictChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <TextField value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} fullWidth type={"date"} id="selectedDate" label="Date" variant="outlined" />
                    </IonCol>
                </IonRow>
                
                <IonRow >
                    <IonCol>
                        <IonButton onClick={searchByPin} expand='block' mode='ios' color='primary' fill='outline'>Search</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>}
        </IonContent>
    </IonPage>
  )
}
