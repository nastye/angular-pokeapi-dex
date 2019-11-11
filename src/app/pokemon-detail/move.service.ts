import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Injectable()
export class MoveService {

  private limit: number = 4;
  moves: string[] = [];

  addMove(pmove: string): void {
    //this.log(`addMove: adding ${pmove} to ${this.moves}`)
    if (this.moves.find(move => move === pmove)) return;
    if (this.moves.length >= this.limit) return;
    this.moves.push(pmove);
  }

  deleteMove(pmove: string): void {
    //this.log(`deleteMove: removing ${pmove} from ${this.moves}`)
    this.moves = this.moves.filter(move => move !== pmove);
  }

  setMoves(moves: string[]): void {
    this.moves = moves;
  }

  log(msg: string) {
    console.log(`MoveService: ${msg}`)
  }

  constructor() { }
}
