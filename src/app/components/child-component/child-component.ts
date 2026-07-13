import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
})
export class ChildComponent {
  color = input.required<string>();
  name = model.required<string>();

  changeName() {
    this.name.set('new name from child');
  }
}
