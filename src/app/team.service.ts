import { Injectable } from '@angular/core';
import { TeamPokemon } from './TeamPokemon';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseUrl: string = 'http://localhost:8080/';
  pokemons: TeamPokemon[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  updateTeamPokemon(mon: TeamPokemon): Observable<TeamPokemon[]> {
    return this.http.put<TeamPokemon[]>(`${this.baseUrl}api/pokemon/${mon.id}`, mon, this.httpOptions);
  }

  addTeamPokemon(mon: TeamPokemon): Observable<TeamPokemon[]> {
    return this.http.post<TeamPokemon[]>(`${this.baseUrl}api/pokemon`, mon, this.httpOptions);
  }

  deleteTeamPokemon(mon: TeamPokemon): Observable<TeamPokemon[]> {
    return this.http.delete<TeamPokemon[]>(`${this.baseUrl}api/pokemon/${mon.id}`);
  }

  getTeamPokemonByUUID(id: number): Observable<TeamPokemon> {
    return this.http.get<TeamPokemon>(`${this.baseUrl}api/pokemon/${id}`);
  }

  getTeamPokemon(): Observable<TeamPokemon[]> {
    return this.http.get<TeamPokemon[]>(`${this.baseUrl}api/pokemon`);
  }
}
