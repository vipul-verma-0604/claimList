import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ClaimsComponent } from '../../components/claims/claims.component';
import { NotSentComponent } from '../../components/not-sent/not-sent.component';
import { MaterialModule } from '../material/material.module';
import { ReturnedComponent } from '../../components/returned/returned.component';
import { RefusedComponent } from '../../components/refused/refused.component';
import { SentComponent } from '../../components/sent/sent.component';
import { AppealedComponent } from '../../components/appealed/appealed.component';
import { BasicListComponent } from '../../components/basic-list/basic-list.component';

@NgModule({
  declarations: [ClaimsComponent, NotSentComponent, ReturnedComponent, RefusedComponent, SentComponent, AppealedComponent, BasicListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MainRoutingModule
  ]
})
export class MainModule { }
