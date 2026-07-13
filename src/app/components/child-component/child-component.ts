import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
})
export class ChildComponent {
  color = input.required<string>();
}
