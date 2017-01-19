import { Injectable, HostListener } from '@angular/core';

@Injectable()
export class KeyboardManager {
  public static readonly BZ1_RED = 49;
  public static readonly BZ1_ORANGE = 50;
  public static readonly BZ1_BLUE = 51;
  public static readonly BZ1_GREEN = 52;
  public static readonly BZ1_YELLOW = 53;

  public static readonly BZ2_RED = 54;
  public static readonly BZ2_ORANGE = 55;
  public static readonly BZ2_BLUE = 56;
  public static readonly BZ2_GREEN = 57;
  public static readonly BZ2_YELLOW = 48;

  buzzer1: boolean[] = [];

  bz1RedPressed = false;
  bz1OrangePressed = false;
  bz1BluePressed = false;
  bz1GreenPressed = false;
  bz1YellowPressed = false;
  bz2RedPressed = false;
  bz2OrangePressed = false;
  bz2BluePressed = false;
  bz2GreenPressed = false;
  bz2YellowPressed = false;

  constructor() {
    this.buzzer1 = [
      this.bz1RedPressed,
      this.bz1OrangePressed,
      this.bz1BluePressed,
      this.bz1GreenPressed,
      this.bz1YellowPressed
    ];
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event) {
    console.log("EVENT");
    switch (event.keyCode) {
      case KeyboardManager.BZ1_RED:
        this.bz1RedPressed = true;
        break;
      case KeyboardManager.BZ1_ORANGE:
        this.bz1OrangePressed = true;
        break;
      case KeyboardManager.BZ1_BLUE:
        this.bz1BluePressed = true;
        break;
      case KeyboardManager.BZ1_GREEN:
        this.bz1GreenPressed = true;
        break;
      case KeyboardManager.BZ1_YELLOW:
        this.bz1YellowPressed = true;
        break;
      case KeyboardManager.BZ2_RED:
        this.bz2RedPressed = true;
        break;
      case KeyboardManager.BZ2_ORANGE:
        this.bz2OrangePressed = true;
        break;
      case KeyboardManager.BZ2_BLUE:
        this.bz2BluePressed = true;
        break;
      case KeyboardManager.BZ2_GREEN:
        this.bz2GreenPressed = true;
        break;
      case KeyboardManager.BZ2_YELLOW:
        this.bz2YellowPressed = true;
        break;
      default:
        break;
    }
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyup(event) {
    switch (event.keyCode) {
      case KeyboardManager.BZ1_RED:
        this.bz1RedPressed = false;
        break;
      case KeyboardManager.BZ1_ORANGE:
        this.bz1OrangePressed = false;
        break;
      case KeyboardManager.BZ1_BLUE:
        this.bz1BluePressed = false;
        break;
      case KeyboardManager.BZ1_GREEN:
        this.bz1GreenPressed = false;
        break;
      case KeyboardManager.BZ1_YELLOW:
        this.bz1YellowPressed = false;
        break;
      case KeyboardManager.BZ2_RED:
        this.bz2RedPressed = false;
        break;
      case KeyboardManager.BZ2_ORANGE:
        this.bz2OrangePressed = false;
        break;
      case KeyboardManager.BZ2_BLUE:
        this.bz2BluePressed = false;
        break;
      case KeyboardManager.BZ2_GREEN:
        this.bz2GreenPressed = false;
        break;
      case KeyboardManager.BZ2_YELLOW:
        this.bz2YellowPressed = false;
        break;
      default:
        break;
    }
  }

  public getKeys(): boolean[] {
    return this.buzzer1;
  }
}
