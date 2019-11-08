import { Component, OnInit } from '@angular/core';
import { TeamService } from "../team.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(
    public teamService: TeamService
  ) { }

  ngOnInit() {
  }

}
