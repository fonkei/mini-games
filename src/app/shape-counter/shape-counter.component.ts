import { Component, ViewChild, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';
import { Shape } from './ShapeCounter';
import { CountdownComponent } from '../countdown/countdown.component';
import { KeyboardManager } from "../KeyboardManager";
import { Buzzer } from "../buzzer";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-shape-counter',
  templateUrl: './shape-counter.component.html',
  styleUrls: ['./shape-counter.component.css']
})
export class ShapeCounterComponent implements AfterViewInit, OnDestroy {
  @ViewChild("shapeCounterCanvas") canvas: ElementRef;

  private gameStarted: boolean = false;
  private shapes: any[] = [];
  private width: number;
  private height: number;
  private interval: any;
  private context: CanvasRenderingContext2D;
  private maxShapes: number;
  private currShapeIndex: number = 0;
  private typeToCount: number;
  private isCountingEnabled: boolean = false;

  private buzzer1: Buzzer;
  private buzzer2: Buzzer;
  private keyDownSub: Subscription;

  private player1Counter: number = 0;
  private player2Counter: number = 0;

  private game: Game = new Game("ShapeCounter", 3, 0);
  @ViewChild('countdown') countdown: CountdownComponent;

  constructor(private gameService: GameService, private keyboardManager: KeyboardManager) {
    this.buzzer1 = new Buzzer();
    this.buzzer2 = new Buzzer();

    this.keyDownSub = keyboardManager.keyDown.subscribe(bzrs => {
      this.buzzer1 = bzrs[0];
      this.buzzer2 = bzrs[1];

      if (this.buzzer1.red && this.isCountingEnabled) {
        this.player1Counter++;
      }
      if (this.buzzer2.red && this.isCountingEnabled) {
        this.player2Counter++;
      }
    });

    this.gameStarted = true;
    this.gameService.loadGame(this.game);
  }

  ngAfterViewInit() {
    let canvas = this.canvas.nativeElement;
    this.context = canvas.getContext("2d");

    this.width = 500;
    this.height = 500;

    this.canvas.nativeElement.width = this.width;
    this.canvas.nativeElement.height = this.height;

    this.maxShapes = 40;
    this.shapes = [];

    this.typeToCount = Math.floor(Math.random() * 2 + 1);
    this.newGame();
    this.tick();
  }

  newGame(): void {
    this.shapes = [];
    this.currShapeIndex = 0;
    this.player1Counter = 0;
    this.player2Counter = 0;

    this.interval = setInterval(() => {
      if (this.currShapeIndex < this.maxShapes) {
        let type = Math.floor(Math.random() * 2 + 1);
        this.shapes.push(new Shape(this.context, this.width, this.height, this.shapes.length, type));
        this.currShapeIndex++;
      }
      else {
        clearInterval(this.interval);
        this.startCounting();
      }
    }, 500);
  }

  startCounting(): void {
    this.isCountingEnabled = true;
    this.countdown.startTimer(5);
  }

  onCountdownEnded(): void {
    this.isCountingEnabled = false;
    let wantedShapes = this.shapes.filter((shape: Shape) => shape.particleType == 1);

    if (this.player1Counter === wantedShapes.length)
      this.gameService.addPlayer1Point();
    else
      this.gameService.reducePlayer1Point();
    if (this.player2Counter === wantedShapes.length)
      this.gameService.addPlayer2Point();
    else
      this.gameService.reducePlayer2Point();

    this.newGame();
  }

  tick(): void {
    requestAnimationFrame(() => {
      this.tick()
    });
    this.context.clearRect(0, 0, this.width, this.height);
    this.draw();
  }

  draw(): void {
    for (let key in this.shapes) {
      this.shapes[key].update();
      this.shapes[key].draw();
    }
  }

  ngOnDestroy(): void {
    this.keyDownSub.unsubscribe();
  }
}
