import { Component, OnInit } from '@angular/core';
import { Directory, Filesystem, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-filesystem',
  templateUrl: './filesystem.page.html',
  styleUrls: ['./filesystem.page.scss'],
})
export class FilesystemPage implements OnInit {
  files: string[] = [];
  error = '';
  constructor() {}

  async ngOnInit() {
    try {
      if (!(await this.dirExists())) {
        await this.createDir();
      }

      await this.createFile('text1.txt');
      await this.createFile('text2.txt');
      this.files = await this.listFiles();
    } catch (e) {
      this.error = 'Filesystem error: ' + e;
    }
  }

  async dirExists(): Promise<boolean> {
    try {
      const ret = await Filesystem.stat({
        path: 'secrets',
        directory: Directory.Documents,
      });
      return ret.type === 'directory';
    } catch (e) {
      return false;
    }
  }

  async createDir(): Promise<void> {
    await Filesystem.mkdir({
      path: 'secrets',
      directory: Directory.Documents,
      recursive: false, // true is like mkdir -p
    });
  }

  async createFile(name: string): Promise<void> {
    await Filesystem.writeFile({
      path: 'secrets/' + name,
      data: 'This is a test',
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
  }

  async listFiles(): Promise<string[]> {
    const result = await Filesystem.readdir({
      path: 'secrets',
      directory: Directory.Documents,
    });
    return result.files;
  }
}
