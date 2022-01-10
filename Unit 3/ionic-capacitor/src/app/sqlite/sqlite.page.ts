import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  CapacitorSQLite,
  SQLiteDBConnection,
  SQLiteConnection,
} from '@capacitor-community/sqlite';

@Component({
  selector: 'app-sqlite',
  templateUrl: './sqlite.page.html',
  styleUrls: ['./sqlite.page.scss'],
})
export class SqlitePage implements OnInit, OnDestroy {
  @ViewChild('personForm') personForm: NgForm;
  sqlite: SQLiteConnection;
  db: SQLiteDBConnection;
  open = false;
  persons: { id?: number; name: string; age: number }[] = [];
  person: { id?: number; name: string; age: number } = {
    name: '',
    age: null,
  };

  constructor() {}

  async ngOnInit() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
    this.db = await this.sqlite.createConnection(
      'testsqlite',
      false,
      'no-encryption',
      1
    );
    await this.db.open();
    this.open = true;

    await this.db.execute(`CREATE TABLE IF NOT EXISTS person (
      id integer primary key,
      name text not null,
      age integer not null)`);

    const result = await this.db.query('SELECT * FROM person');
    this.persons = result.values;
  }

  async ngOnDestroy() {
    if (this.open) {
      console.log('Closing connection');
      await this.sqlite.closeConnection('testsqlite');
    }
  }

  async add() {
    if (!this.open) {
      return;
    }

    const addRes = await this.db.run(
      'INSERT INTO person (name, age) VALUES (?,?)',
      [this.person.name, this.person.age]
    );

    const idRes = await this.db.query('SELECT last_insert_rowid()');

    this.person.id = +Object.values(idRes.values[0])[0];
    this.persons.push(this.person);
    this.person = { name: '', age: null };
    this.personForm.resetForm();
  }

  async remove(person, index: number) {
    if (!this.open) {
      return;
    }

    const delRes = await this.db.run('DELETE FROM person WHERE id = ?', [
      person.id,
    ]);

    if (delRes.changes > 0) {
      this.persons.splice(index, 1);
    }
  }
}
