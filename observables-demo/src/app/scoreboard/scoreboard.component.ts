import { Component, OnInit } from '@angular/core';
import { ScoreboardService } from '../services/scoreboard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss'
})
export class ScoreboardComponent {
  constructor(private scoreboardService: ScoreboardService) { }

  public scoreboard$ = this.scoreboardService.scoreboard$;

  updateHomeTeam(value: -1 | 1) {
    this.scoreboardService.updateHomeScore(value);
  }

  updateAwayTeam(value: -1 | 1) {
    this.scoreboardService.updateAwayScore(value);
  }
}
