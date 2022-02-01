import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {
  
  heroe:any={};

  constructor( private activatedRoute:ActivatedRoute,
               private _heroeService:HeroesService 
               ){ 

    this.activatedRoute.params.subscribe( params=> (

      this.heroe=this._heroeService.getHeroe(params['id'])
      
                                                      )
              )}

  // getLogo(casa:string){

  //   if(casa=='DC'){

  //     this.logo='../../recursos/dclogo.png'
  //     return this.logo;

  //   }
  //   if (casa=='MARVEL') {
      
  //     this.logo='../../recursos/logomarvel.png';
  //     return this.logo;

    // }

  // }


}
