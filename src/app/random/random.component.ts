import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent implements OnInit {
  myNumber = Math.floor(Math.random() * 100);
  napis = '';
  kolor = 'green';
  constructor() {}

  buttonOnClick(nr): void {
    this.myNumber = Math.floor(Math.random() * nr);
    if (this.myNumber < 0.5 * nr) {
      this.napis = 'Liczba jest w dolnym przedziale';
      this.kolor = 'green';
    } else {
      this.napis = 'Liczba jest w górnym przedziale';
      this.kolor = 'red';
    }
  }

  ngOnInit() {}
}
