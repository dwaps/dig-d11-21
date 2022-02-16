import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { PizzaDetailsComponent } from './components/pizzas/pizza-details/pizza-details.component';
import { PizzaFormComponent } from './components/pizzas/pizza-form/pizza-form.component';
import { PizzaListComponent } from './components/pizzas/pizza-list/pizza-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SelectedDirective } from './shared/directives/selected.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PizzasComponent,
    PizzaDetailsComponent,
    PizzaFormComponent,
    PizzaListComponent,
    UserFormComponent,
    SelectedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
