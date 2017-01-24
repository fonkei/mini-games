const COLORS = [
  [255, 0, 0],
  [0, 255, 0],
  [0, 0, 255]
];

export class Shape {
  ctx: any;
  width: number;
  height: number;
  maxParticles: number;
  particleType: number;
  particleColor: number;
  color: any;

  x: number;
  y: number;
  r: number;
  d: number;
  speed: number

  constructor(_ctx: any, _width: number, _height: number, _maxParticles: number, _particleType: number, _particleColor: number, _speedFactor: number) {
    this.ctx = _ctx;
    this.width = _width;
    this.height = _height;
    this.maxParticles = _maxParticles;
    this.particleType = _particleType;
    this.particleColor = _particleColor;
    this.color = COLORS[this.particleColor];

    this.x = Math.random() * (_width - 100) + 40;
    this.y = -10;
    this.r = Math.random() * 20 + 1;
    this.d = Math.random() * _maxParticles;

    this.speed = _speedFactor;
  }

  update(): void {
    this.y += Math.cos(this.d) + this.speed + (this.r / 2);
    this.x += Math.sin(0) * 2;
  };

  draw(): void {
    //this.ctx.save();
    this.ctx.strokeStyle = "rgba(" + this.color + ", 1.0)";
    this.ctx.fillStyle = this.ctx.strokeStyle;
    this.ctx.beginPath();
    for (let i = 0; i < this.maxParticles; i++) {
      this.ctx.moveTo(this.x, this.y);
      switch (this.particleType) {
        case 1:
          this.ctx.arc(this.x, this.y, this.r + 10, 0, Math.PI * 2, false);
          this.ctx.fill();
          break;
        case 2:
          this.ctx.rect(this.x, this.y, this.r + 20, this.r + 20);
          this.ctx.fill();
          break;
        case 3:
          this.ctx.lineTo(this.x + 15, this.y);
          this.ctx.lineTo(this.x + 15, this.y + 15);
          this.ctx.fill();
          break;
        default:
          console.log('Unable to draw: undefined particle type [' + this.particleType + ']');
          break;
      }
    }

    //this.ctx.restore();
  };
}
