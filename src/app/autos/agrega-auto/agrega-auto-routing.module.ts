import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregaAutoPage } from './agrega-auto.page';

const routes: Routes = [
  {
    path: '',
    component: AgregaAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregaAutoPageRoutingModule {}
