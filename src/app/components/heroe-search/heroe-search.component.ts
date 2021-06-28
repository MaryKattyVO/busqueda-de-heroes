import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html'
})
export class HeroeSearchComponent implements OnInit {
  heroes: any[] = []
  termino: string = '';
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
        
    }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino']
      this.heroes = this._heroesService.buscarHeroe(params['termino'])
      console.log(this.heroes)
    }) 
   
  }

}
