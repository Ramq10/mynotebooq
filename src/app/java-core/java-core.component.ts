import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java-core',
  templateUrl: './java-core.component.html',
  styleUrls: ['./java-core.component.css']
})
export class JavaCoreComponent implements OnInit {

  allCommands: any[] = [];
  commands: any[] = [];
  initialData = 0;
  lastData = 8;

  constructor() { }

  ngOnInit(): void {

    this.allCommands = [
      {
        question: 'What is Java?',
        answer: 'Java is the high-level, object-oriented, robust, secure programming language, platform-independent, high performance, Multithreaded, and portable programming language. It was developed by James Gosling in June 1991.',
        code: null
      },
      {
        question: 'List the features of Java Programming language',
        answer: 'Simple, Object-Oriented, Portable, Platform Independent, Secured, Robust, Multithreaded',
        code: ''
      },
      {
        question: 'How many types of memory areas are allocated by JVM?',
        answer: 'Class(Method) Area: Class Area stores per-class structures such as the runtime constant pool, field, method data, and the code for methods., Heap: Objects stored here., Stack: Store local variable and partial results.',
        code: ''
      },
      {
        question: 'Is Empty .java file name a valid source file name?',
        answer: 'Yes',
        code: ''
      },
      {
        question: 'Is delete, next, main, exit or null keyword in java?',
        answer: 'No',
        code: ''
      },
      {
        question: 'What if I write static public void instead of public static void?',
        answer: 'The program compiles and runs correctly because the order of specifiers doesn\'t matter in Java.',
        code: ''
      },
      {
        question: 'What is the purpose of static methods and variables?',
        answer: 'The methods or variables defined as static are shared among all the objects of the class. The static is the part of the class and not of the object. The static variables are stored in the class area, and we do not need to create the object to access such variables.',
        code: ''
      },
      {
        question: 'What are the advantages of Packages in Java?',
        answer: 'Packages avoid the name clashes. It is easier to locate the related classes. We can also have the hidden classes that are not visible outside and used by the package.',
        code: ''
      },
      {
        question: 'What are the various access specifiers in Java?',
        answer: 'PUBLIC, PROTECTED, DEFAULT, PRIVATE',
        code: ''
      },
      {
        question: 'Public',
        answer: 'The classes, methods, or variables which are defined as public, can be accessed by any class or method.',
        code: ''
      },
      {
        question: 'Protected',
        answer: 'Protected can be accessed by the class of the same package, or by the sub-class of this class, or within the same class.',
        code: ''
      },
      {
        question: 'Default',
        answer: 'Default are accessible within the package only. By default, all the classes, methods, and variables are of default scope.',
        code: ''
      },
      {
        question: 'Private',
        answer: 'The private class, methods, or variables defined as private can be accessed within the class only.',
        code: ''
      }
      ,
    // ];
    // const objectOrientedData = [
      {
        question: 'What is an object?',
        answer: 'The Object is the real-time entity having some state and behavior. In Java, Object is an instance of the class.',
        code: ''
      },
      {
        question: 'What is the difference between an object-oriented programming language and object-based programming language?',
        answer: 'There are the following basic differences between the object-oriented language and object-based language.\n Object-oriented languages follow all the concepts of OOPs whereas, the object-based language doesn\'t follow all the concepts of OOPs like inheritance and polymorphism. \n Object-oriented languages do not have the inbuilt objects whereas Object-based languages have the inbuilt objects, for example, JavaScript has window object. \n Examples of object-oriented programming are Java, C#, Smalltalk, etc. whereas the examples of object-based languages are JavaScript, VBScript, etc.',
        code: ''
      },
      {
        question: 'What is the constructor?',
        answer: 'The constructor can be defined as the special type of method that is used to initialize the state of an object. It is invoked when the class is instantiated Every time, an object is created using the new keyword, the default constructor of the class is called.',
        code: ''
      },
      {
        question: 'What is the purpose of a default constructor?',
        answer: 'The purpose of the default constructor is to assign the default value to the objects. The java compiler creates a default constructor implicitly if there is no constructor in the class.',
        code: ''
      },
      {
        question: 'Does constructor return any value?',
        answer: ' yes, The constructor implicitly returns the current instance of the class (You can\'t use an explicit return type with the constructor).',
        code: ''
      },
      {
        question: 'Can you make a constructor final?',
        answer: 'No, the constructor can\'t be final.',
        code: ''
      },
      {
        question: 'Can we overload the constructors?',
        answer: 'YES',
        code: ''
      },
      // static questions
      {
        question: 'What is the static method?',
        answer: 'A static method belongs to the class rather than the object. There is no need to create the object to call the static methods. A static method can access and change the value of the static variable.',
        code: ''
      },
      {
        question: 'Why is the main method static?',
        answer: 'Because the object is not required to call the static method. ',
        code: ''
      },
      {
        question: 'Can we override the static methods?',
        answer: 'No, we can\'t override static methods. Because Overriding is dynamic process(Runtime-Polymorphism).',
        code: ''
      },
      {
        question: 'What is the static block?',
        answer: 'Static block is used to initialize the static data member. It is executed before the main method, at the time of classloading.',
        code: ''
      },
      // inheritance
      {
        question: 'What is this keyword in java?',
        answer: 'The this keyword is a reference variable that refers to the current object.',
        code: ''
      },
      {
        question: '',
        answer: '',
        code: ''
      },
      {
        question: '',
        answer: '',
        code: ''
      },
      {
        question: '',
        answer: '',
        code: ''
      },
      {
        question: '',
        answer: '',
        code: ''
      },
      {
        question: '',
        answer: '',
        code: ''
      },
      {
        question: '',
        answer: '',
        code: ''
      },
      {
        question: '',
        answer: '',
        code: ''
      },
      {
        question: '',
        answer: '',
        code: ''
      },
      {
        question: '',
        answer: '',
        code: ''
      },
      {
        question: '',
        answer: '',
        code: ''
      },
      {
        question: '',
        answer: '',
        code: ''
      },
      {
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },,{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },,{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
      },{
        question: '',
        answer: '',
        code: ''
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
