import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  min = 0;
  max = 0;
  num = 0;

  id;

  history = [];
  counting = false;
  waiting = false;

  color = '';

  ngOnInit() {
    this.newGame();
  }

  random(number) {
    return Math.floor(Math.random() * number);
  }

  newGame() {
    this.num = 0;
    this.min = this.random(100);
    this.max = this.min + this.random(50);
    this.color = '';
    this.waiting = false;
  }

  setColor() {
    if (this.num > this.max || this.num < this.min) {
      this.color = 'color-lose';
    } else {
      this.color = 'color-won';
    }
  }

  setWaiting() {
    this.waiting = true;
  }

  onClick() {
    if (!this.waiting) {
      if (this.counting) {
        clearInterval(this.id);
        this.setColor();
        setTimeout(() => this.newGame(), 5000);
        this.setWaiting();
      } else {
        this.id = setInterval(() => this.num++, 10);
      }

      this.counting = !this.counting;
    }
  }

}
