import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichedepayePage } from './fichedepaye.page';

const routes: Routes = [
  {
    path: '',
    component: FichedepayePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichedepayePageRoutingModule {}
