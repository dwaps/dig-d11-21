import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TodosComponent } from "./components/todos/todos.component";
import { UsersComponent } from "./components/users/users.component";

const routes: Route[] = [
  { path: "users", component: UsersComponent },
  { path: "todos", children: [
    { path: ":userId", component: TodosComponent }
  ]},
  { path: "", redirectTo: "users", pathMatch: "full" },
  { path: "**", redirectTo: "users" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
