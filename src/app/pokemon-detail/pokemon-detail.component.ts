import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../api.service';
import { Pokemon, PokemonMoveDetail, PokemonMove } from "../pokeapi";


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  id: string;
  pokemon: Pokemon = new Pokemon();
  moves: PokemonMoveDetail[] = [];

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    this.api.getPokemon(id).subscribe(
      pokemon => {
        this.pokemon = pokemon;

        for (let move of this.pokemon.moves) {
          this.api.getMove(move.move.name).subscribe(
            move => this.moves.push(move)
          );
        }
      }
    )
  }

  getLocalizedMove(move: PokemonMoveDetail, locale: string): string {
    return move.names.find(name => (name.language.name === locale)).name;
  }

  goBack(): void {
    this.location.back();
  }
}