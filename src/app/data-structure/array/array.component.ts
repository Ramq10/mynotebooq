import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  title = 'ARRAY';
  allData: any[] = [];
  data: any[] = [];
  i = 0;
  l = 8;


  constructor() { }

  ngOnInit(): void {
    this.allData = [
      {
        value: 'Array is collection of same type of data.'
      },
      {
        value: 'An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together.'
      },
      {
        value: 'In Java all arrays are dynamically allocated.'
      },
      {
        value: 'The direct superclass of an array type is Object.'
      },
      {
        value: 'Every array type implements the interfaces Cloneable and java.io.Serializable'
      },
      {
        value: 'JVM throws ArrayIndexOutOfBoundsException to indicate that array has been accessed with an illegal index. The index is either negative or greater than or equal to size of array.'
      },
      {
        value: 'The direct superclass of an array type is Object.'
      },
      {
        value: 'The direct superclass of an array type is Object.'
      }
    ];
    this.data = this.allData.slice(this.i, this.l);
  }

  paginateData(): void {
    if (this.l < this.allData.length) {
      this.i = this.l;
      this.l = this.l + 8;
      this.allData = this.allData.slice(this.i, this.l);
    } else {
      this.i = 0;
      this.l = 8;
      this.allData = this.allData.slice(this.i, this.l);
    }

  }

}
