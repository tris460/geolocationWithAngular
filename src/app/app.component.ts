import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyFirstApp';
  helloWorld: string;
  userName: string;
  firstNumber: number;
  secondNumber: number;
  result: number;
  note: string;
  constructor() {
    this.helloWorld = "Hello World";
    this.userName = '';
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.result = 0;
    this.note = '';
  }
  // What to do when the app is carged 
  ngOnInit(){
    if(!navigator.geolocation) {
      alert("Geolocation is nos available");
    } else {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(`Data position: ${position}`);
        alert(`Your current location [${position.coords.latitude} - ${position.coords.longitude}]`);
      })
    }
  }
  // Greet the user
  greet(){
    alert("Hello " + this.userName);
  }
  // Clear the inputs
  clear(){
    this.userName ='';
    this.firstNumber = 0;
    this.secondNumber = 0;
  }
  // Makes a sum
  add() {
    this.result = this.firstNumber + this.secondNumber;
    this.note = '';
  }
  // Do a subtraction
  substract() {
    this.result = this.firstNumber - this.secondNumber;
    this.note = '';
 }
 // Do a multiplication
  multiply() {
    this.result = this.firstNumber * this.secondNumber;
    this.note = '';
  }
  // Make a division
  divide(){
    if (this.secondNumber == 0){
      this.result = 0;
      this.note = "The second number must be greather than 0";
    } else {
      this.result = this.firstNumber / this.secondNumber;
    }
  }
}
