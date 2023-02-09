import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Autos', url: '/lista', icon: 'list' },
    { title: 'Agregar', url: '/agrega-auto', icon: 'add-circle' },
    { title: 'Actualizar', url: '/actualiza-auto', icon: 'create' },
    { title: 'Detalle', url: '/detalle', icon: 'glasses' },
    { title: 'Borrar', url: '/borra-auto', icon: 'mail' },
  ];
  constructor() {}
}
