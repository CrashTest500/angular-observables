import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScoreboardService } from '../services/scoreboard.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss'
})
export class ScoreboardComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  public homeScore = 0;
  public awayScore = 0;

  constructor(private scoreboardService: ScoreboardService) { }

  ngOnInit(): void {
    this.subscription.add(this.scoreboardService.scoreboard$.subscribe(scoreboard => {
      this.homeScore = scoreboard.homeScore;
      this.awayScore = scoreboard.awayScore;
    }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHomeTeam(value: -1 | 1) {
    this.scoreboardService.updateHomeScore(value);
  }

  updateAwayTeam(value: -1 | 1) {
    this.scoreboardService.updateAwayScore(value);
  }

  resetScore() {
    this.scoreboardService.resetScore();
  }
}
