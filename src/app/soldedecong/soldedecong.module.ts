import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoldedecongPageRoutingModule } from './soldedecong-routing.module';

import { SoldedecongPage } from './soldedecong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoldedecongPageRoutingModule
  ],
  declarations: [SoldedecongPage]
})
export class SoldedecongPageModule {}
