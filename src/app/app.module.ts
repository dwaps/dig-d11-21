import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { Compo1Component } from './components/compo1/compo1.component';
import { Compo2Component } from './components/compo2/compo2.component';
import { HomeComponent } from './components/home/home.component';

const ROUTES: Route[] = [
  { path: 'home', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'compo1',
    component: Compo1Component,
    children:  [
      { path: 'compo2/admin', component: Compo2Component, pathMatch: 'full' },
      { path: 'compo2/coco', component: Compo2Component, pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    Compo2Component,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
