import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'builder',
    loadComponent: () =>
      import('./builder/builder').then((m) => m.BuilderComponent)
  }
];
