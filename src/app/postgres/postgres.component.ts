import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postgres',
  templateUrl: './postgres.component.html',
  styleUrls: ['./postgres.component.css']
})
export class PostgresComponent implements OnInit {

  count: number = 0;

  textColor = 'black';
  backgroundColors = ['#EAECEE','#EC7063','#AF7AC5','#5DADE2','#73C6B6','#F8C471','#E59866','#CCD1D1','#85C1E9',
                      '#641E16','#78281F','#512E5F','#154360','#0E6251','#145A32','#7D6608','#784212','#6E2C00','#17202A','#17202A'];

  constructor() { }

  ngOnInit(): void {
  }

  getCardColor() {
    this.count = this.count + 1;
    if (this.count > 19) {
      this.count = 0;
    }
    if (this.count > 8) {
      this.textColor='white';
    } else {
      this.textColor='black';
    }
    return this.backgroundColors[this.count];
  }

}
