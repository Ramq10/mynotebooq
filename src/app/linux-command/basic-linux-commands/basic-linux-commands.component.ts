import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-linux-commands',
  templateUrl: './basic-linux-commands.component.html',
  styleUrls: ['./basic-linux-commands.component.css']
})
export class BasicLinuxCommandsComponent implements OnInit {

  title = 'LINUX-COMMANDS';
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
        cmd: 'sudo-su',
        value: 'Super User command'
      },
      {
        cmd: 'exit',
        value: 'Exit From Current User'
      },
      {
        cmd: 'pwd',
        value: 'Print Work Directory'
      },
      {
        cmd: 'wget \'url\'',
        value: 'Download File from \'url\''
      },
      {
        cmd: 'tar xyzf file.tar.gz',
        value: 'Extract file(.tar file)'
      },
      {
        cmd: 'mv /home/user/oldname /home/user/newname',
        value: 'Rename A Folder/Directory'
      },
      {
        cmd: 'ls -F |grep -v / | wc -l',
        value: 'Get Total Number of file in Folder'
      },
      {
        cmd: 'rm fileName',
        value: 'Remove file'
      },
      {
        cmd: 'rm -d directory',
        value: 'Remove Empty Directory'
      },
      {
        cmd: 'rm -r directory',
        value: 'Remove Non-Empty Directory'
      },
      {
        cmd: 'rm -rf directory',
        value: 'Remove Directory Forcefully'
      },
      {
        cmd: 'scp fileName severIP:port/public_folderName/',
        value: 'Copy File From One Server to Another'
      },
      {
        cmd: 'scp -r folderName severIP:port/public_folderName/',
        value: 'Copy Folder/Directory From One Server to Another'
      },
      {
        cmd: 'scp -a folderName/. severIP:port/public_folderName/',
        value: 'Copy All Files of a Folder From One Server to Another'
      },
      {
        cmd: 'sudo du -shc /folderName',
        value: 'Get Total size of a folder'
      },
      {
        cmd: 'sudo du -shc /folderName/*',
        value: 'Get Total size of each folder and subfolder'
      },
      {
        cmd: 'find /folderName -type f -name "*.mp3"',
        value: 'Find All files with same(\'.mp3\') extention in a folder.'
      },
      {
        cmd: 'find -maxdepth 1 -iname \'*.mp3\' -exec cp {} /home/sk/test2/ \\',
        value: 'Find All files with same(\'.mp3\') extention in a folder and copy to another folder.'
      },
      {
        cmd: 'find /folderName/secondFolderName/ -type f | wc -l',
        value: 'Count All Files.'
      },
      {
        cmd: 'chmod -R 777 /folderName/folder/',
        value: 'Grant all access to folder '
      },
      {
        cmd: 'sudo du -shc /home/witty/upload/',
        value: 'Total size of folder.'
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
    this.runexmple = '$ ' + data;
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
