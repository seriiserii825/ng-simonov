import { Component, signal } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-color-component',
  imports: [ChildComponent],
  templateUrl: './color-component.html',
})
export class ColorComponent {
  color = signal<string>('red');
  name = signal<string>('name from parent');

  changeColor(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newColor = target.value;
    this.color.set(newColor);
  }

  changeName(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newName = target.value;
    this.name.set(newName);
  }
}
