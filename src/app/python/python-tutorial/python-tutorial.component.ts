import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-python-tutorial',
  templateUrl: './python-tutorial.component.html',
  styleUrls: ['./python-tutorial.component.css']
})
export class PythonTutorialComponent implements OnInit {

  allCommands: any[] = [];
  commands: any[] = [];
  initialData = 0;
  lastData = 8;

  constructor() { }

  ngOnInit(): void {

    this.allCommands = [
      // python introduction
      {
        topic: 'Introduction',
        desc: 'Python is a simple, general purpose, high level, and object-oriented programming language.',
        code: null
      },
      {
        topic: '',
        desc: 'Python was invented by Guido van Rossum in 1991 at CWI in Netherland. ',
        code: null
      },
      {
        topic: '',
        desc: 'Python is a general purpose, dynamic, high-level, and interpreted programming language. It supports Object Oriented programming approach to develop applications.',
        code: null
      },
      {
        topic: '',
        desc: 'Python supports multiple programming pattern, including object-oriented, imperative, and functional or procedural programming styles.',
        code: null
      },
      // python Versions
      {
        topic: 'Python Versions',
        desc: 'In most of the programming languages, whenever a new version releases, it supports the features and syntax of the existing version of the language, therefore, it is easier for the projects to switch in the newer version. However, in the case of Python, the two versions Python 2 and Python 3 are very much different from each other.',
        code: null
      },
      {
        topic: '',
        desc: 'Current Pyhton version is 3.9.2 and Best software for learning/practicing python is PYCHARM',
        code: null
      },
      {
        topic: 'Feature of Python',
        desc: 'Easy to use and Learn, Expressive Language, Interpreted Language, Object-Oriented Language, Open Source Language, Extensible, Learn Standard Library, GUI Programming Support, Integrated, Embeddable, Dynamic Memory Allocation, Wide Range of Libraries and Frameworks',
        code: null
      },
      {
        topic: 'Python Basic Syntax',
        desc: 'There is no use of curly braces or semicolon in Python programming language. It is English-like language. But Python uses the indentation to define a block of code. Indentation is nothing but adding whitespace before the statement when it is needed.',
        code: null
      },
      {
        topic: 'First Program',
        desc: 'print(\'Hello World\');',
        code: 'print(\'Hello World\');'
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      },
      {
        topic: '',
        desc: '',
        code: null
      }
    ]

    this.commands = this.allCommands.slice(this.initialData, this.lastData);
  }

  paginateData(): void {
    if (this.lastData < this.allCommands.length) {
      this.initialData = this.lastData;
      this.lastData = this.lastData + 8;
      this.commands = this.allCommands.slice(this.initialData, this.lastData);
    } else {
      this.initialData = 0;
      this.lastData = 8;
      this.commands = this.allCommands.slice(this.initialData, this.lastData);
    }

  }


}
