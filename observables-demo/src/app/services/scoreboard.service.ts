import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Scoreboard } from '../models/scoreboard';

@Injectable({
  providedIn: 'root'
})
export class ScoreboardService {
  private _scoreboard = new BehaviorSubject<Scoreboard>({ homeScore: 0, awayScore: 0});
  public scoreboard$ = this._scoreboard.asObservable();

  constructor() { }

  updateHomeScore(value: -1 | 1) {
    const scoreboardLocal = { ...this._scoreboard.getValue() };
    scoreboardLocal.homeScore += value;

    this._scoreboard.next(scoreboardLocal);
  }

  updateAwayScore(value: -1 | 1) {
    const scoreboardLocal = { ...this._scoreboard.getValue() };
    scoreboardLocal.awayScore += value;

    this._scoreboard.next(scoreboardLocal);
  }

  resetScore() {
    const scoreboard: Scoreboard = { homeScore: 0, awayScore: 0 };
    this._scoreboard.next(scoreboard); 
  }
}
