import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponentSecondary } from './app.component.secondary';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "second-component", component: AppComponentSecondary },
  { path: "main", component: AppComponent },
  { path: "", redirectTo: "/main", pathMatch: "full" },
  { path: "**", redirectTo: "/main", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }