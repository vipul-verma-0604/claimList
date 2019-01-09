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
        component: NotSentComponent,
        data: {"animation": "NotSent"}
      },
      {
        path: 'returned',
        component: ReturnedComponent,
        data: {"animation": "Returned"}
      },
      {
        path: 'refused',
        component: RefusedComponent,
        data: {"animation": "Refused"}
      },
      {
        path: 'sent',
        component: SentComponent,
        data: {"animation": "Sent"}
      },
      {
        path: 'appealed',
        component: AppealedComponent,
        data: {"animation": "Appealed"}
      },
      {
        path: 'basiclist',
        component: BasicListComponent,
        data: {"animation": "Basiclist"}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
