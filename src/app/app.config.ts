import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withHashLocation, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage'
import { environment } from '@envs/environment.development';
import { provideHttpClient, withFetch} from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withHashLocation(), withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(
      withFetch(),
    ),
    provideFirebaseApp(() => initializeApp( environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage ( () => getStorage())
  ]
};
