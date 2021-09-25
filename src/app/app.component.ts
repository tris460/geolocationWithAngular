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
  firstNumber: number;
  secondNumber: number;
  result: number;
  constructor() {
    this.helloWorld = "Hello World";
    this.userName = '';
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.result = 0;
  }
  greet(){
    alert("Hello " + this.userName);
  }
  clear(){
    this.userName ='';
    this.firstNumber = 0;
    this.secondNumber = 0;
  }
  add() {
    this.result = parseFloat(this.firstNumber.toString()) + parseFloat(this.secondNumber.toString());
  }
  substract() {
    this.result = this.firstNumber - this.secondNumber;
 }
  multiply() {
    this.result = this.firstNumber * this.secondNumber;
  }
  divide(){
    this.result = this.firstNumber / this.secondNumber;
  }
}
