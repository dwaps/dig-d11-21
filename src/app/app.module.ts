import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Compo1Component } from './components/compo1/compo1.component';
import { Compo2Component } from './components/compo2/compo2.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';

const ROUTES: Route[] = [
  { path: 'home', component: HomeComponent },
  {
    path: 'compo1',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
