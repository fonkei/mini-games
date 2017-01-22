export class Game {
  name: string;
  maxPoints: number;
  timeout: number;

  constructor(_name: string, _maxPoints?: number, _timeout?: number) {
    this.name = _name;
    this.maxPoints = _maxPoints;
    this.timeout = _timeout;
  }
}
