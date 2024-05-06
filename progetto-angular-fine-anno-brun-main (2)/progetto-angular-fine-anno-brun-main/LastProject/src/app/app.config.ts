import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';



export const appConfig: ApplicationConfig = {
  
  providers: [provideRouter(routes), provideHttpClient(), importProvidersFrom([AngularFireModule.initializeApp({
    apiKey: "AIzaSyBu1G9gpr398PbBp4J2laplsOT5x4CIN3o",
    authDomain: "progettone-ef213.firebaseapp.com",
    projectId: "progettone-ef213",
    storageBucket: "progettone-ef213.appspot.com",
    messagingSenderId: "1040518815725",
    appId: "1:1040518815725:web:22395396ad7b51428151e4",
    measurementId: "G-HT1XXLNYJJ"
  })]), AngularFireAuth, AngularFireAuthModule],
};
