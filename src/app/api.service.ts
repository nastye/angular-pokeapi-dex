import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of, pipe } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Pokedex, Pokemon, PokemonMoveDetail } from './pokeapi';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/';
  private cache: {
    [request: string]: Object;
  } = {};

  constructor(private http: HttpClient) { }

  getPokedex(): Observable<Pokedex> {
    let request = 'pokedex/2/';
    if (this.cache[request]) {
      return of(this.cache[request] as Pokedex)
    } else {
      return this.http.get<Pokedex>(`${this.baseUrl}${request}`).pipe(
        catchError((err, caught) => {
          console.log('error fetching pokedex');
          return new Observable<Pokedex>();
        })
      );
    }
  }

  getPokemon(id: string | number): Observable<Pokemon> {
    let request = `pokemon/${id}/`
    if (this.cache[request]) {
      return of(this.cache[request] as Pokemon)
    } else {
      return this.http.get<Pokemon>(`${this.baseUrl}${request}`).pipe(
        //tap(pokemon => console.log(pokemon)),
        catchError((err, caught) => {
          console.log(`error fetching pokemon id=${id}`);
          return new Observable<Pokemon>();
        })
      );
    }
  }

  getMove(id: string | number): Observable<PokemonMoveDetail> {
    let request = `move/${id}/`
    if (this.cache[request]) {
      return of(this.cache[request] as PokemonMoveDetail)
    } else {
      return this.http.get<PokemonMoveDetail>(`${this.baseUrl}${request}`).pipe(
        //tap(move => console.log(move)),
        catchError((err, caught) => {
          console.log(`error fetching move id=${id}`);
          return new Observable<PokemonMoveDetail>();
        })
      );
    }
  }
}
