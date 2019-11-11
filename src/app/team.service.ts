import { Injectable } from '@angular/core';
import { TeamPokemon } from './TeamPokemon';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseUrl: string = '';
  pokemons: TeamPokemon[] = [];
  uuidv1 = require('uuid/v1');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  updateTeamPokemon(mon: TeamPokemon): void {
    this.http.put(`api/pokemon`, mon, this.httpOptions).subscribe();
  }

  addTeamPokemon(mon: TeamPokemon) {
    this.http.post(`api/pokemon`, mon, this.httpOptions).subscribe();
  }

  deleteTeamPokemon(mon: TeamPokemon) {
    this.http.delete(`api/pokemon/${mon.id}`).subscribe();
  }

  getTeamPokemonByUUID(id: number): Observable<TeamPokemon> {
    return this.http.get<TeamPokemon>(`api/pokemon/${id}`);
  }

  getTeamPokemon(): Observable<TeamPokemon[]> {
    return this.http.get<TeamPokemon[]>(`api/pokemon`);
  }
}
