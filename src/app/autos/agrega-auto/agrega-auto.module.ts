import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregaAutoPageRoutingModule } from './agrega-auto-routing.module';

import { AgregaAutoPage } from './agrega-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregaAutoPageRoutingModule
  ],
  declarations: [AgregaAutoPage]
})
export class AgregaAutoPageModule {}
