import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoldedecongPage } from './soldedecong.page';

const routes: Routes = [
  {
    path: '',
    component: SoldedecongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoldedecongPageRoutingModule {}
