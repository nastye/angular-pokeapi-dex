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

  constructor(private http: HttpClient) { }

  getPokedex(): Observable<Pokedex> {
    return this.http.get<Pokedex>(`${this.baseUrl}pokedex/2/`).pipe(
      catchError((err, caught) => {
        console.log('error fetching pokedex');
        return new Observable<Pokedex>();
      })
    )
  }

  getPokemon(id: string | number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}pokemon/${id}/`).pipe(
      //tap(pokemon => console.log(pokemon)),
      catchError((err, caught) => {
        console.log(`error fetching pokemon id=${id}`);
        return new Observable<Pokemon>();
      })
    )
  }

  getMove(id: string | number): Observable<PokemonMoveDetail> {
    return this.http.get<PokemonMoveDetail>(`${this.baseUrl}move/${id}/`).pipe(
      //tap(move => console.log(move)),
      catchError((err, caught) => {
        console.log(`error fetching move id=${id}`);
        return new Observable<PokemonMoveDetail>();
      })
    )
  }
}
