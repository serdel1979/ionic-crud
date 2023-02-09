import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizaAutoPage } from './actualiza-auto.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizaAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizaAutoPageRoutingModule {}
