import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent implements OnInit {
  myNumber = Math.floor(Math.random() * 100);
  constructor() {}

  buttonOnClick(): void {
    this.myNumber = Math.floor(Math.random() * 100);
  }

  ngOnInit() {}
}
