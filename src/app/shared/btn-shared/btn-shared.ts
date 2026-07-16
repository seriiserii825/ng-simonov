import { Component, input, output } from '@angular/core';
import { IBtnClass } from './interfaces/IBtnClass';

@Component({
  selector: 'app-btn-shared',
  imports: [],
  templateUrl: './btn-shared.html',
})
export class BtnShared {
  label = input.required<string>();
  className = input<IBtnClass>();
  clickEmit = output<void>();

  onClick() {
    this.clickEmit.emit();
  }
}
