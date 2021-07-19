import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  color= '#0563bb';
  bgColor= 'white';

  constructor(private themeService: ThemeService) {
    this.themeService.setPrimaryColor(this.color);
    this.themeService.setBackgroundColor(this.bgColor);
   }

  ngOnInit(): void {
  }

  saveChanges() {
    this.themeService.setBackgroundColor(this.bgColor)
    this.themeService.setPrimaryColor(this.color);
  }

}
