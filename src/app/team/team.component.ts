import { Component, OnInit } from '@angular/core';
import { TeamService } from "../team.service";
import { TeamPokemon } from '../TeamPokemon';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  pokemons: TeamPokemon[];

  constructor(
    public teamService: TeamService
  ) { }

  ngOnInit() {
    this.updateTeamPokemon();
  }

  updateTeamPokemon(): void {
    this.teamService.getTeamPokemon().subscribe(res => this.pokemons = res);
  }

  deleteTeamPokemon(pokemon: TeamPokemon): void {
    this.teamService.deleteTeamPokemon(pokemon).subscribe(res => this.pokemons = res);
  }

}
