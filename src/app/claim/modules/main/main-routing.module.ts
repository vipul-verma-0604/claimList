import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimsComponent } from '../../components/claims/claims.component';
import { NotSentComponent } from '../../components/not-sent/not-sent.component';
import { ReturnedComponent } from '../../components/returned/returned.component';
import { RefusedComponent } from '../../components/refused/refused.component';
import { SentComponent } from '../../components/sent/sent.component';
import { AppealedComponent } from '../../components/appealed/appealed.component';
import { BasicListComponent } from '../../components/basic-list/basic-list.component';

const routes: Routes = [
  {
    path: '',
    component: ClaimsComponent,
    children: [
      {
        path: 'notSent',
        component: NotSentComponent
      },
      {
        path: 'returned',
        component: ReturnedComponent
      },
      {
        path: 'refused',
        component: RefusedComponent
      },
      {
        path: 'sent',
        component: SentComponent
      },
      {
        path: 'appealed',
        component: AppealedComponent
      },
      {
        path: 'basiclist',
        component: BasicListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
