import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorraAutoPageRoutingModule } from './borra-auto-routing.module';

import { BorraAutoPage } from './borra-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorraAutoPageRoutingModule
  ],
  declarations: [BorraAutoPage]
})
export class BorraAutoPageModule {}
