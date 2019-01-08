import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/claims/notSent',
    pathMatch: 'full'
  },
  {
    path: 'claims',
    loadChildren: './claim/modules/main/main.module#MainModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
