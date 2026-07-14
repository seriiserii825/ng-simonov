import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator-page',
  imports: [FormsModule],
  templateUrl: './calculator-page.html',
})
export class CalculatorPage {
  firstNumber: number = 1;
  secondNumber: number = 1;
  operations: string[] = ['+', '-', '*', '/'];
  operation: string = '+';
  result: number = 1;

  calculate() {
    switch (this.operation) {
      case '+':
        this.result = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.result = this.firstNumber - this.secondNumber;
        break;
      case '*':
        this.result = this.firstNumber * this.secondNumber;
        break;
      case '/':
        if (this.secondNumber !== 0) {
          this.result = this.firstNumber / this.secondNumber;
        } else {
          alert('Cannot divide by zero');
          this.result = NaN; // Set result to NaN to indicate an error
        }
        break;
      default:
        alert('Invalid operation');
        break;
    }
  }
}
