import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';
  helloWorld: string;
  userName: string;
  constructor() {
    this.helloWorld = "Hello World";
    this.userName = '';
  }
  greet(){
    alert("Hello " + this.userName);
  }
  clear(){
    this.userName ='';
  }
}
