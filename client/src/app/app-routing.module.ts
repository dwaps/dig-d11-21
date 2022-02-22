import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { ProfilComponent } from './components/profil/profil.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'signup',
    component: AuthComponent
  },
  {
    path: 'profil',
    component: ProfilComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
