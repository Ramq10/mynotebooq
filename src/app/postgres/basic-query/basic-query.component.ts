import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-query',
  templateUrl: './basic-query.component.html',
  styleUrls: ['./basic-query.component.css']
})
export class BasicQueryComponent implements OnInit {

  title = 'BASIC-QUERY: POSTGRES';
  allCommands: any[] = [];
  commands: any[] = [];
  i = 0;
  l = 8;
  runexmple = '';
  showcmd = false;

  constructor() { }

  ngOnInit(): void {
    this.allCommands = [
      {
        cmd: 'sudo -u postgres psql',
        value: 'Login with user: postgres'
      },
      {
        cmd: 'psql',
        value: 'Start psql after login with postgres user'
      },
      {
        cmd: '\\c db_name',
        value: 'Select/Switch Database'
      },
      {
        cmd: '\\q',
        value: 'Exit'
      },
      {
        cmd: '\\l',
        value: 'List All DB'
      },
      {
        cmd: '\\dt',
        value: 'Display all tables'
      },
      {
        cmd: 'create database db_name',
        value: 'create database'
      },
      {
        cmd: '\\copy table_name from \'path\' delimeter \',\' csv header',
        value: 'Import CSV file to a table from psql    *header is required only if you are giving header in CSV'
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

  opencmd(data): void {
    this.runexmple = data;
    this.showcmd = !this.showcmd;
  }

  @HostListener('document:click', ['$event.target'])
  onClickedOutsideVsxi(targetElement): void {
    if (!targetElement.closest('#custom-terminal') &&
      !targetElement.closest('#terminal-icon') &&
      !targetElement.closest('#cmd-value') &&
      this.showcmd) {
      this.showcmd = !this.showcmd;
    }
  }

}
