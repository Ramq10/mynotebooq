import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  instructionData: any[] = [
    {
      data: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search forill uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      class: 'home'
    },
    {
      data: 'sometimes by accident, sometimes on purpose (injected humour and the like).',
      class: 'about'
    },
    {
      data: 'It is a long established fact t. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search forill uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      class: 'linux'
    },
    {
      data: 'It is a long establish point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search forill uncover many web sites still in their infancy. Vars on purpose (injected humour and the like).',
      class: 'postgres'
    },
    {
      data: 'It is a long established fact that a reader will be distracose (injected humour and the like).',
      class: 'notebook'
    },
    {
      data: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at ih forill uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      class: 'contact'
    },
    {
      data: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search forill uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      class: 'theme'
    }
  ];
  showInstructions: boolean;
  index: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.showInstructions = true;
  }

  onNext() {
    if (this.index === this.instructionData.length) {
      this.showInstructions = !this.showInstructions;
    } else {
      this.index++;
    }
  }
  onSkip() {
    this.index = 0;
    this.showInstructions = !this.showInstructions;
  }

}
