import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "dashboard"
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./modules/dashboard/dashboard.module").then(
        (mod) => mod.DashboardModule
      ),
  },
  {
    path: "lessons/:lessonId",
    loadChildren: () =>
      import("./modules/lessons/lessons.module").then(
        (mod) => mod.LessonsModule 

      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
