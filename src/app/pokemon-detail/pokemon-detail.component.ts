import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../api.service';
import { Pokemon, PokemonMoveDetail, PokemonMove } from "../pokeapi";
import { MoveService } from "./move.service";
import { TeamService } from "../team.service";
import { TeamPokemon } from '../TeamPokemon';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  providers: [MoveService]
})
export class PokemonDetailComponent implements OnInit {

  sortId: number;
  id: number;
  pokemon: Pokemon = new Pokemon();
  moves: PokemonMoveDetail[] = [];

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private location: Location,
    private moveService: MoveService,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.sortId = +this.route.snapshot.paramMap.get('sortId');
    this.id = +this.route.snapshot.paramMap.get('id');
    this.api.getPokemon(this.sortId).subscribe(res => {
      this.pokemon = res

      for (let move of this.pokemon.moves) {
        this.api.getMove(move.move.name).subscribe(res => {
          this.moves.push(res);
        })
      }
    }
    );

    if (this.id !== 0) {
      this.teamService.getTeamPokemonByUUID(this.id).subscribe(res => {
        this.moveService.moves = res.moves;
      })
    }
  }

  getLocalizedMove(move: PokemonMoveDetail, locale: string): string {
    return move.names.find(name => (name.language.name === locale)).name;
  }

  goBack(): void {
    this.location.back();
  }

  addMove(move: PokemonMoveDetail): void {
    this.moveService.addMove(this.getLocalizedMove(move, "en"));
  }

  save(): void {
    let pokemon: TeamPokemon = {
      id: 0,
      sortId: this.pokemon.id,
      name: this.pokemon.name,
      moves: this.moveService.moves
    }
    if (this.id === 0) {
      pokemon.id = new Date().getTime();
      this.teamService.addTeamPokemon(pokemon)
      this.moveService.moves = [];
      return;
    }
    pokemon.id = this.id;
    this.teamService.updateTeamPokemon(pokemon);
    this.moveService.moves = [];
  }
}
