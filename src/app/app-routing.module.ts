import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaFormComponent } from './components/pizzas/pizza-form/pizza-form.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { CheckAuthGuard } from './shared/guards/check-auth.guard';

const routes: Routes = [
  {
    path: "pizzas",
    canActivate: [CheckAuthGuard],
    children: [
      { path: "", component: PizzasComponent },
      { path: "new", component: PizzaFormComponent },
    ],
  },
  { path: "login", component: UserFormComponent },
  { path: "", redirectTo: "pizzas", pathMatch: "full" },
  { path: "**", redirectTo: "pizzas" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
