import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes'; // Import des routes

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Ajout des routes définies
    provideHttpClient()    // Ajout du client HTTP pour les requêtes API
  ]
};
