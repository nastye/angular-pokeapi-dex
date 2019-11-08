import { Injectable } from '@angular/core';
import { PokemonEntry } from './pokeapi';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  pokemons: PokemonEntry

  constructor() { }
}
