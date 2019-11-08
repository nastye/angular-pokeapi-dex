import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../api.service';
import { Pokemon, PokemonMoveDetail, PokemonMove } from "../pokeapi";
import { MoveService } from "./move.service";
import { TeamService } from "../team.service";


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  providers: [MoveService]
})
export class PokemonDetailComponent implements OnInit {

  id: string;
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

  addMove(move: PokemonMoveDetail): void {
    this.moveService.addMove(this.getLocalizedMove(move, "en"));
  }

  saveToTeam(): void {
    this.teamService.addTeamPokemon({
      id: this.pokemon.id,
      name: this.pokemon.name,
      moves: this.moveService.moves
    });
    this.moveService.moves = [];
  }
}
