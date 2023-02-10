import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { Iauto } from 'src/app/interfaces/iauto';
import { Iautos } from 'src/app/interfaces/iautos';
import { AutosService } from '../../servicios/autos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage {



  public autos: Iautos[] = [];

  constructor(private autosService: AutosService, private loadingCtl: LoadingController) { }

  ionViewWillEnter(){
    this.getAll();
  }

  async getAll(eveent?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtl.create({
      message:"Cargando...",
      spinner:'bubbles'
    })

    await loading.present();
    this.autosService.getAll().subscribe(
      (resp)=>{
          loading.dismiss;
          let listString = JSON.stringify(resp);
          this.autos = JSON.parse(listString);
          loading.dismiss();
      },
      (err) =>{
        console.log(err.message);
        loading.dismiss();
      }
    )
  }





}
