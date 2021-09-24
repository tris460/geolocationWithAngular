import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';
  HolaMundo: string;
  constructor() {
    this.HolaMundo = "Hola Mundo";
  }
}
