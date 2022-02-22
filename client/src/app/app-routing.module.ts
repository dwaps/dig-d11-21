import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { DataUserGuard } from './shared/guards/data-user.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    component: HomeComponent
  },
  {
    path: 'login',
    canActivate: [DataUserGuard],
    component: AuthComponent
  },
  {
    path: 'signup',
    canActivate: [DataUserGuard],
    component: AuthComponent
  },
  {
    path: 'profil',
    canActivate: [DataUserGuard, AuthGuard],
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
