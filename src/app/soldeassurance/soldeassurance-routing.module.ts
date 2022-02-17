import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoldeassurancePage } from './soldeassurance.page';

const routes: Routes = [
  {
    path: '',
    component: SoldeassurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoldeassurancePageRoutingModule {}
