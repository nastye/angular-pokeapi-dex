import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { MoveService } from "../move.service";

@Component({
  selector: 'app-move-selector',
  templateUrl: './move-selector.component.html',
  styleUrls: ['./move-selector.component.scss']
})
export class MoveSelectorComponent implements OnInit {

  moves: string[] = new Array<string>(4);

  constructor(
    public moveService: MoveService
  ) {
  }

  ngOnInit() { }

  deleteMove(move: string): void {
    this.moveService.deleteMove(move);
  }
}
