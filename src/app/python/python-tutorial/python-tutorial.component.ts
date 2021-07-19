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
        desc: ['Python is a simple, general purpose, high level, and object-oriented programming language.',
        'Python was invented by Guido van Rossum in 1991 at CWI in Netherland.',
        'Python is a general purpose, dynamic, high-level, and interpreted programming language. It supports Object Oriented programming approach to develop applications.',
        'Python supports multiple programming pattern, including object-oriented, imperative, and functional or procedural programming styles.'],
        code: null
      },
      // python Versions
      {
        topic: 'Python Versions',
        desc: ['In most of the programming languages, whenever a new version releases, it supports the features and syntax of the existing version of the language, therefore, it is easier for the projects to switch in the newer version. However, in the case of Python, the two versions Python 2 and Python 3 are very much different from each other.'],
        code: null
      },
      {
        topic: '',
        desc: ['Current Pyhton version is 3.9.2 and Best software for learning/practicing python is PYCHARM'],
        code: null
      },
      {
        topic: 'Feature of Python',
        desc: ['Easy to use and Learn, Expressive Language, Interpreted Language, Object-Oriented Language, Open Source Language, Extensible, Learn Standard Library, GUI Programming Support, Integrated, Embeddable, Dynamic Memory Allocation, Wide Range of Libraries and Frameworks'],
        code: null
      },
      {
        topic: 'Python Basic Syntax',
        desc: ['There is no use of curly braces or semicolon in Python programming language. It is English-like language. But Python uses the indentation to define a block of code. Indentation is nothing but adding whitespace before the statement when it is needed.'],
        code: null
      },
      {
        topic: 'First Program',
        desc: ['print(\'Hello World\');'],
        code: 'print(\'Hello World\');'
      },
      {
        topic: 'Declaration of Variable',
        desc: ['a, b, c, d = 10, 20, 30, 40', 'print(a + b + c + d)',
              'or', 'a = 10, b = 20'],
        code: 'a, b, c, d = 10, 20, 30, 40 \n print(a + b + c + d)'
      },
      {
        topic: 'Dynamically Typed Language',
        desc: ['It is not required to declare type for variable in python thats why it is dynamically-typed Language.',
              'C & Java are statically-typed Language.',
              'a = 10',
              'type(a) => int',
              'a = True',
              'type(a) => bool'],
        code: null
      },
      {
        topic: 'Identifiers',
        desc: ['Class name, Variable name, Method name'],
        code: null
      },
      {
        topic: '',
        desc: ['1. A-Z,a-z: Can be Alphanumeric', '2. Should not start with numbers', 
              '3. Keywords should not used as Identifiers', '4. Case-sensative'],
        code: null
      },
      {
        topic: 'Reserved Words',
        desc: ['There are 33 Reserved Words.'],
        code: null
      },
      {
        topic: '',
        desc: ['False', 'None', 'True', '__peg_parser__', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'],
        code: null
      },
      {
        topic: 'Data Types',
        desc: ['int, float, str, complex, bool, range, set, list, touple, frozenset, dict, None.....'],
        code: null
      },
      {
        topic: 'Every Thing is an Object in Python.',
        desc: [''],
        code: null
      },
      {
        topic: '',
        desc: ['int: to hold whole number ex. 234, 116', 'float: to hold decimal and exponential numbers ex. salary, prices, 234.1, 4.5, 1.2e3',
        'complex: c = a+bj, a: real part c.real, b: imaginary part c.imag', 'bool: True, False'],
        code: null
      },
      {
        topic: '',
        desc: ['str: use \'\' or "" or \'\'\' or """.....triple quotes are used for multiline strings..........slice operator: s[0:2] for first two words',
              ''],
        code: null
      },
      {
        topic: 'Python print() Function',
        desc: ['objects - An object is nothing but a statement that to be printed. The * sign represents that there can be multiple statements.',
                'sep - The sep parameter separates the print values. Default values is ',
                'end - The end is printed at last in the statement.',
                'file - It must be an object with a write(string) method.',
                'flush - The stream or file is forcibly flushed if it is true. By default, its value is false.'],
        code: null
      },
      {
        topic: 'List',
        desc: ['the list can contain data of different types. The items stored in the list are separated with a comma (,) and enclosed within square brackets [].',
              'We can use slice [:] operators to access the data of the list. The concatenation operator (+) and repetition operator (*) works with the list in the same way as they were working with the strings.'],
        code: null
      },
      {
        topic: 'Tuple',
        desc: ['A tuple is similar to the list in many ways. Like lists, tuples also contain the collection of the items of different data types.',
              'The items of the tuple are separated with a comma (,) and enclosed in parentheses ().',
              'A tuple is a read-only data structure as we can\'t modify the size and value of the items of a tuple.'],
        code: null
      },
      {
        topic: 'Dictionary',
        desc: ['Dictionary is an unordered set of a key-value pair of items.',
              'It is like an associative array or a hash table where each key stores a specific value',
              '* Key can hold any primitive data type, whereas value is an arbitrary Python object.',
              'The items in the dictionary are separated with the comma (,) and enclosed in the curly braces {}.'],
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
