import { Component, input } from '@angular/core';
import { IBtnClass } from './interfaces/IBtnClass';

@Component({
  selector: 'app-btn-shared',
  imports: [],
  templateUrl: './btn-shared.html',
})
export class BtnShared {
  label = input.required<string>();
  className = input<IBtnClass>();
}
