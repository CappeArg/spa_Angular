import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-filtroheroe',
  templateUrl: './filtroheroe.component.html',
})
export class FiltroheroeComponent implements OnInit {

  busqueda:any[]=[];
  termino:string="";
  constructor(private _activatedRoute:ActivatedRoute,
              private _heroeService:HeroesService ) {

                
                
               }

  ngOnInit() {

    this._activatedRoute.params.subscribe(params=>{
      this.termino=params['termino'];
      this.busqueda=this._heroeService.buscarHeroes(params['termino'])});
    

  }

}
