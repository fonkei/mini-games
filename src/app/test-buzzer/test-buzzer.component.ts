import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test-buzzer',
  templateUrl: './test-buzzer.component.html',
  styleUrls: ['./test-buzzer.component.css']
})
export class TestBuzzerComponent implements OnInit {

  @ViewChild('buzzer1Red') bz1Red: ElementRef;
  @ViewChild('buzzer1Orange') bz1Orange: ElementRef;
  @ViewChild('buzzer1Blue') bz1Blue: ElementRef;
  @ViewChild('buzzer1Green') bz1Green: ElementRef;
  @ViewChild('buzzer1Yellow') bz1Yellow: ElementRef;

  @ViewChild('buzzer2Red') bz2Red: ElementRef;
  @ViewChild('buzzer2Orange') bz2Orange: ElementRef;
  @ViewChild('buzzer2Blue') bz2Blue: ElementRef;
  @ViewChild('buzzer2Green') bz2Green: ElementRef;
  @ViewChild('buzzer2Yellow') bz2Yellow: ElementRef;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.bz1Red.nativeElement.click();
    }, 1000);


    setTimeout(() => {
      this.bz2Red.nativeElement.click();
    }, 1000);
  }

  handleClick() {
    console.log("Click");
  }

}
