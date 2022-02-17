import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichedepayePageRoutingModule } from './fichedepaye-routing.module';

import { FichedepayePage } from './fichedepaye.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichedepayePageRoutingModule
  ],
  declarations: [FichedepayePage]
})
export class FichedepayePageModule {}
