import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Pokedex, PokemonEntry } from "../pokeapi";

@Component({
  selector: 'app-pokemon-dex',
  templateUrl: './pokemon-dex.component.html',
  styleUrls: ['./pokemon-dex.component.scss']
})
export class PokemonDexComponent implements OnInit {

  pokemon_entries: PokemonEntry[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPokedex().subscribe(res => {
      this.pokemon_entries = res.pokemon_entries;
    });
  }

}
