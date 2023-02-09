import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Autos', url: '/lista', icon: 'car-sport-outline' },
    { title: 'Agregar', url: '/agrega-auto', icon: 'mail' },
    { title: 'Actualizar', url: '/actualiza-auto', icon: 'mail' },
    { title: 'Detalle', url: '/detalle', icon: 'mail' },
    { title: 'Borrar', url: '/borra-auto', icon: 'mail' },
  ];
  constructor() {}
}
