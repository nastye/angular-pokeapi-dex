import { Injectable } from '@angular/core';
import { TeamPokemon } from './TeamPokemon';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  pokemons: TeamPokemon[] = [];

  constructor() { }

  addTeamPokemon(mon: TeamPokemon): void {
    this.pokemons.push(mon);
  }
}
