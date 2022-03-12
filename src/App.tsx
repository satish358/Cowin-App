import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import LoginPage from './pages/login/Login.page';
import { DashboardPage } from './pages/dashboard/Dashboard.page';
import { SearchPage } from './pages/search/Search.page';
import { RegisterPage } from './pages/register/Register.page';
import { useState } from 'react';
import IntroductionPage from './pages/intro/Intro.page';

setupIonicReact();

const App: React.FC = () => {

  return(
  <IonApp>
    <IonReactRouter>
    <IonRouterOutlet>
      <Route exact path="/">
            <IntroductionPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/dashboard">
            <DashboardPage />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)
};

export default App;
