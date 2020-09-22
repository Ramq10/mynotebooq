import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-deployment-on-tomcat',
  templateUrl: './angular-deployment-on-tomcat.component.html',
  styleUrls: ['./angular-deployment-on-tomcat.component.css']
})
export class AngularDeploymentOnTomcatComponent implements OnInit {

  title = 'ANGULAR-DEPLOYMENT-ON-TOMCAT';
  allCommands: any[] = [];
  commands: any[] = [];
  i = 0;
  l = 8;

  constructor() { }

  ngOnInit(): void {
    this.allCommands = [
      {
        cmd: ['run \'ng build --prod --base-href\' or \'ng build --prod\' command on terminal'],
        value: 'Step-1'
      },
      {
        cmd: ['Add following line in server.xml:', '<Host name="localhost" appBase="webapps" unpackWARs="true" autoDeploy="true">', '<Valve className="org.apache.catalina.valves.rewrite.RewriteValve"/>'],
        value: 'Step-2'
      },
      {
        cmd: ['Add a File rewrite.config in conf/catalina/localhost/rewrite.config', 'Rewrite.config:', 'RewriteCond %{REQUEST_PATH} !- f RewriteRule ^/projectName/(.*)/projectName/index.html'],
        value: 'Step-3'
      },
      {
        cmd: ['Don\'t use href in your angular project use routerLink instead.'],
        value: 'Alert!'
      },
      {
        cmd: ['Add this to conf/web.xml:', '<error-page>', '<error-code>404</error-code>', '<location>/index.html</location>', '</error-page>'],
        value: 'ProbLem in Reloading?'
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
