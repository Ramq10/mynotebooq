import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  count = 0;

  textColor = 'black';
  backgroundColors = ['#EAECEE', '#EC7063', '#AF7AC5', '#5DADE2', '#73C6B6', '#F8C471', '#E59866', '#CCD1D1', '#85C1E9',
                      '#641E16', '#78281F', '#512E5F', '#154360', '#0E6251', '#145A32', '#7D6608', '#784212', '#6E2C00', '#17202A', '#17202A'];

  constructor() { }

  ngOnInit(): void {
  }

  getCardColor(): string {
    this.count = this.count + 1;
    if (this.count > 19) {
      this.count = 0;
    }
    if (this.count > 8) {
      this.textColor = 'white';
    } else {
      this.textColor = 'black';
    }
    return this.backgroundColors[this.count];
  }
}
