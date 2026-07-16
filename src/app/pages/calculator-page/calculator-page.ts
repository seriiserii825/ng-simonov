import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BtnShared } from '../../shared/btn-shared/btn-shared';
import { InputShared } from '../../shared/input-shared/input-shared';
import { SelectShared } from '../../shared/select-shared/select-shared';
import { ISelectOption } from '../../shared/select-shared/interfaces/ISelectOption';

@Component({
  selector: 'app-calculator-page',
  imports: [FormsModule, BtnShared, InputShared, SelectShared],
  templateUrl: './calculator-page.html',
})
export class CalculatorPage {
  firstNumber: number = 1;
  secondNumber: number = 1;
  operations: ISelectOption[] = [
    { value: '+', label: '+' },
    { value: '-', label: '-' },
    { value: '*', label: '*' },
    { value: '/', label: '/' },
  ];
  operation: ISelectOption = this.operations[0];
  result: number = 1;

  calculate() {
    switch (this.operation.value) {
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
  reset() {
    this.firstNumber = 1;
    this.secondNumber = 1;
    this.operation = this.operations[0];
    this.result = 1;
  }
}
