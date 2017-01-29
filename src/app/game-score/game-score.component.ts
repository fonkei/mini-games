import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'game-score',
  templateUrl: './game-score.component.html',
  styleUrls: ['./game-score.component.css']
})
export class GameScoreComponent implements OnInit {
  @Input() rate: number = 0;

  @Input() max: number = 5;

  constructor() { }

  ngOnInit() {
  }

}
