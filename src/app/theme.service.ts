import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  primaryColor;
  bgColor;
  private themeWrapper = document.querySelector('body');

    constructor(){
    }

    setPrimaryColor(val: string){
      this.primaryColor = val;
      this.themeWrapper.style.setProperty('--primaryColor', this.primaryColor);
    }

    setBackgroundColor(val: string){
      this.bgColor = val;
      this.themeWrapper.style.setProperty('--bgColor', this.bgColor);
    }

    getBgColor(){
      return this.bgColor;
    }

    getPrimaryColor(){
      return this.primaryColor;
    }
}
