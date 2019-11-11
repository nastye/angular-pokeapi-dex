import { Injectable } from '@angular/core';
import { TeamPokemon } from './TeamPokemon';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  pokemons: TeamPokemon[] = [];
  uuidv1 = require('uuid/v1');
  constructor() { }

  addTeamPokemon(mon: TeamPokemon): void {
    if (this.pokemons.find(pokemon => pokemon.uuid === mon.uuid)) {
      this.deleteTeamPokemon(mon);
    }
    this.pokemons.push(mon);
  }

  deleteTeamPokemon(mon: TeamPokemon): void {
    let newMons = [];
    for (let pokemon of this.pokemons) {
      if (pokemon.uuid !== mon.uuid) {
        newMons.push(pokemon);
      }
    }
    this.pokemons = newMons;
  }

  getTeamPokemonByUUID(uuid: string): TeamPokemon {
    return this.pokemons.find(pokemon => pokemon.uuid === uuid);
  }
}
