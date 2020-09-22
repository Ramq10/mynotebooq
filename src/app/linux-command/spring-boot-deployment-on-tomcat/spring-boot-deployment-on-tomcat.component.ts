import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spring-boot-deployment-on-tomcat',
  templateUrl: './spring-boot-deployment-on-tomcat.component.html',
  styleUrls: ['./spring-boot-deployment-on-tomcat.component.css']
})
export class SpringBootDeploymentOnTomcatComponent implements OnInit {

  title = 'SPRING_BOOT_APP-DEPLOYMENT-ON-TOMCAT';
  allCommands: any[] = [];
  commands: any[] = [];
  i = 0;
  l = 8;

  constructor() { }

  ngOnInit(): void {
    this.allCommands = [
      {
        cmd: ['Install maven globally and for that follow this url: https://www.javatpoint.com/how-to-install-maven'],
        value: 'Step-1'
      },
      {
        cmd: ['After successfully installation of Maven, Run \'mvn clean install\' in project folder.', 'This will create a war file name of your project as: projectName.war'],
        value: 'Step-2'
      },
      {
        cmd: ['Just copy the war file in webapps folder of tomcat', 'and go to bin/ folder run this command: \'./startup.sh\''],
        value: 'Step-3'
      },
      {
        cmd: ['Logs will be created in logs/catalina.out file, to get the logs go to logs/ folder and run this command: \'tail -f catalina.out\''],
        value: 'Want to see logs?'
      }
    ];
    this.commands = this.allCommands.slice(this.i, this.l);
  }

  paginateData(): void {
    if (this.l < this.allCommands.length) {
      this.i = this.l;
      this.l = this.l + 8;
      this.commands = this.allCommands.slice(this.i, this.l);
    } else {
      this.i = 0;
      this.l = 8;
      this.commands = this.allCommands.slice(this.i, this.l);
    }

  }

}
