import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizaAutoPageRoutingModule } from './actualiza-auto-routing.module';

import { ActualizaAutoPage } from './actualiza-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizaAutoPageRoutingModule
  ],
  declarations: [ActualizaAutoPage]
})
export class ActualizaAutoPageModule {}
