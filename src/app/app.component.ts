import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from './credentials';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    firebase.initializeApp(firebaseConfig);
    firebase.firestore().enablePersistence();
    SplashScreen.hide().catch(error => {
      console.error(error);
    });
    StatusBar.hide().catch(error => {
      console.error(error);
    });
  }
}
