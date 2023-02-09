import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorraAutoPage } from './borra-auto.page';

const routes: Routes = [
  {
    path: '',
    component: BorraAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorraAutoPageRoutingModule {}
