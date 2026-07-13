import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-color-component',
  imports: [],
  templateUrl: './color-component.html',
})
export class ColorComponent {
  color = signal<string>('red');
}
