import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';
import { ComingComponent } from './coming/coming.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'location', component: LocationComponent },
  { path: 'coming', component: ComingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

