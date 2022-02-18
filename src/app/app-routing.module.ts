import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./modules/pages/services/services.module').then(
        (m) => m.ServicesModule
      ),
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./modules/pages/books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/pages/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/authentication/auth.module').then((m) => m.AuthModule),
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
