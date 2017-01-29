import {max} from "rxjs/operator/max";
export class Game {
  public name: string;
  public maxPoints: number;
  public timeout: number;
  public player1points: number;
  public player2points: number;

  constructor(_name: string, _maxPoints?: number, _timeout?: number) {
    this.name = _name;
    this.maxPoints = _maxPoints;
    this.timeout = _timeout;

    this.player1points = 0;
    this.player2points = 0;
  }

  addPlayer1Point(): void {
    if (this.player1points < this.maxPoints)
      this.player1points++;
  }

  addPlayer2Point(): void {
    if (this.player2points < this.maxPoints)
      this.player2points++;
  }

  reducePlayer1Point(): void {
    if (this.player1points > 0)
      this.player1points--;
  }

  reducePlayer2Point(): void {
    if (this.player2points > 0)
      this.player2points--;
  }

  getMaxScore(): number {
    return this.maxPoints;
  }
}
