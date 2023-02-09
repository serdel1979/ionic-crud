import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./autos/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'agrega-auto',
    loadChildren: () => import('./autos/agrega-auto/agrega-auto.module').then( m => m.AgregaAutoPageModule)
  },
  {
    path: 'actualiza-auto',
    loadChildren: () => import('./autos/actualiza-auto/actualiza-auto.module').then( m => m.ActualizaAutoPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./autos/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'borra-auto',
    loadChildren: () => import('./autos/borra-auto/borra-auto.module').then( m => m.BorraAutoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
