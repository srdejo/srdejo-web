import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Faq } from './faq/faq';
import { StewardPrivacy } from './steward-privacy/steward-privacy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'preguntas-frecuentes', component: Faq },
  { path: 'steward-privacy', component: StewardPrivacy },
];
