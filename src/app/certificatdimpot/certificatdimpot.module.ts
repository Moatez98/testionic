import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificatdimpotPageRoutingModule } from './certificatdimpot-routing.module';

import { CertificatdimpotPage } from './certificatdimpot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificatdimpotPageRoutingModule
  ],
  declarations: [CertificatdimpotPage]
})
export class CertificatdimpotPageModule {}
