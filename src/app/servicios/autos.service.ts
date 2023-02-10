import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iautos } from '../interfaces/iautos';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(private http: HttpClient) { }


  getAll():Observable<Iautos[]>{
    return this.http.get<Iautos[]>(`${environment.url}/autos`);
  }






}
