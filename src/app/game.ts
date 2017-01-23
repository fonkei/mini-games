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
}
