import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directives';
  color = 'yellow';
  times = 3;

  persons = [
    {
      name: "Peter",
      age: 34
    },
    {
      name: "John",
      age: 12
    },
    {
      name: "Martha",
      age: 37
    },
    {
      name: "Samuel",
      age: 16
    },
  ];

  filter = (p: any) => p.age >= 18;

  colsRow = 2;
  names = ['Peter', 'John', 'Joane', 'Loise', 'Mathew', 'Martha', 'Lucas', 'Mary'];
}
