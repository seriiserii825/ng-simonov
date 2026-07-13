import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
})
export class ChildComponent {
  color = input.required<string>();
  name = input.required<string>();

  outputEmitter = output();

  changeName() {
    this.outputEmitter.emit();
  }
}
