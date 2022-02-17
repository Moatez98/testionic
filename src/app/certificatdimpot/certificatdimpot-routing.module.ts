import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificatdimpotPage } from './certificatdimpot.page';

const routes: Routes = [
  {
    path: '',
    component: CertificatdimpotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificatdimpotPageRoutingModule {}
